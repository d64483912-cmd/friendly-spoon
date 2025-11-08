import {
  BookOpenText,
  Brain,
  Code,
  Lightbulb,
  Notepad,
  PaintBrush,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 1000
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 5
export const DAILY_LIMIT_PRO_MODELS = 500

export const NON_AUTH_ALLOWED_MODELS = ["gpt-4.1-nano"]

export const FREE_MODELS_IDS = [
  "openrouter:deepseek/deepseek-r1:free",
  "openrouter:meta-llama/llama-3.3-8b-instruct:free",
  "pixtral-large-latest",
  "mistral-large-latest",
  "gpt-4.1-nano",
]

export const MODEL_DEFAULT = "mistral-large-latest"

export const APP_NAME = "NelsonGPT"
export const APP_DOMAIN = "https://nelsongpt.com"

export const SUGGESTIONS = [
  {
    label: "Diagnose",
    highlight: "Help diagnose",
    prompt: `Help diagnose`,
    items: [
      "Help diagnose a 6-month-old with persistent fever",
      "Help diagnose acute respiratory distress in a toddler",
      "Help diagnose developmental delay in a 2-year-old",
      "Help diagnose recurrent abdominal pain in a school-age child",
    ],
    icon: Brain,
  },
  {
    label: "Treatment",
    highlight: "Recommend treatment",
    prompt: `Recommend treatment`,
    items: [
      "Recommend treatment for severe asthma exacerbation",
      "Recommend treatment for acute otitis media",
      "Recommend treatment for pediatric pneumonia",
      "Recommend treatment for febrile seizures",
    ],
    icon: Notepad,
  },
  {
    label: "Guidelines",
    highlight: "What are the guidelines",
    prompt: `What are the guidelines`,
    items: [
      "What are the guidelines for childhood immunizations?",
      "What are the guidelines for managing ADHD in children?",
      "What are the guidelines for neonatal jaundice?",
      "What are the guidelines for pediatric hypertension?",
    ],
    icon: BookOpenText,
  },
  {
    label: "Differential",
    highlight: "Differential diagnosis",
    prompt: `Differential diagnosis`,
    items: [
      "Differential diagnosis for petechial rash in infant",
      "Differential diagnosis for chronic cough in children",
      "Differential diagnosis for failure to thrive",
      "Differential diagnosis for neonatal hypotonia",
    ],
    icon: Code,
  },
  {
    label: "Dosing",
    highlight: "Calculate dosing",
    prompt: `Calculate dosing`,
    items: [
      "Calculate dosing for amoxicillin in a 15kg child",
      "Calculate dosing for acetaminophen for fever",
      "Calculate dosing for emergency epinephrine",
      "Calculate dosing for maintenance IV fluids",
    ],
    icon: Lightbulb,
  },
  {
    label: "Development",
    highlight: "Developmental milestones",
    prompt: `Developmental milestones`,
    items: [
      "Developmental milestones for 12-month-old",
      "Developmental milestones for 4-year-old",
      "Developmental red flags in toddlers",
      "Developmental screening tools for autism",
    ],
    icon: Sparkle,
  },
  {
    label: "Learn",
    highlight: "Explain",
    prompt: `Explain`,
    items: [
      "Explain the pathophysiology of croup",
      "Explain congenital heart disease screening",
      "Explain the immune system in newborns",
      "Explain pediatric growth charts interpretation",
    ],
    icon: PaintBrush,
  },
]

export const SYSTEM_PROMPT_DEFAULT = `You are NelsonGPT, a specialized pediatric clinical assistant powered by the Nelson Textbook of Pediatrics knowledge base. You provide evidence-based, accurate, and concise clinical information to support pediatricians in their practice.

Your tone is professional, clear, and clinically focused. When appropriate, cite relevant Nelson Textbook chapters or sections. You understand the time constraints of clinical practice, so you balance thoroughness with brevity.

When discussing diagnoses or treatments:
1. Provide evidence-based information
2. Consider age-specific factors
3. Mention key differential diagnoses when relevant
4. Highlight critical red flags or complications
5. Reference current clinical guidelines when applicable

You support clinical decision-making but always emphasize that your guidance should be used alongside clinical judgment and current institutional protocols. For emergencies, you remind users to follow PALS/emergency protocols.

You are here to be a reliable clinical companion—like having Nelson's textbook knowledge instantly accessible during patient care.`

export const MESSAGE_MAX_LENGTH = 10000
