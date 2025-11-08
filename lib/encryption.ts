import { createCipheriv, createDecipheriv, randomBytes } from "crypto"

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
const ALGORITHM = "aes-256-gcm"

// Use a dummy key for build time if not provided
// In production, ENCRYPTION_KEY must be set for BYOK functionality
const DEFAULT_KEY = Buffer.alloc(32, 0) // Dummy key for build

let key: Buffer
if (!ENCRYPTION_KEY) {
  if (process.env.NODE_ENV === "production") {
    console.warn("Warning: ENCRYPTION_KEY not set. User API key storage will not work.")
  }
  key = DEFAULT_KEY
} else {
  key = Buffer.from(ENCRYPTION_KEY, "base64")
  if (key.length !== 32) {
    throw new Error("ENCRYPTION_KEY must be 32 bytes long")
  }
}

export function encryptKey(plaintext: string): {
  encrypted: string
  iv: string
} {
  const iv = randomBytes(16)
  const cipher = createCipheriv(ALGORITHM, key, iv)

  let encrypted = cipher.update(plaintext, "utf8", "hex")
  encrypted += cipher.final("hex")

  const authTag = cipher.getAuthTag()
  const encryptedWithTag = encrypted + ":" + authTag.toString("hex")

  return {
    encrypted: encryptedWithTag,
    iv: iv.toString("hex"),
  }
}

export function decryptKey(encryptedData: string, ivHex: string): string {
  const [encrypted, authTagHex] = encryptedData.split(":")
  const iv = Buffer.from(ivHex, "hex")
  const authTag = Buffer.from(authTagHex, "hex")

  const decipher = createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(authTag)

  let decrypted = decipher.update(encrypted, "hex", "utf8")
  decrypted += decipher.final("utf8")

  return decrypted
}

export function maskKey(key: string): string {
  if (key.length <= 8) {
    return "*".repeat(key.length)
  }
  return key.slice(0, 4) + "*".repeat(key.length - 8) + key.slice(-4)
}
