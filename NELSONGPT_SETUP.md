# NelsonGPT Setup Guide

## 🎉 Transformation Complete!

The Zola AI chat application has been successfully transformed into **NelsonGPT**, a specialized AI-powered clinical companion for pediatricians.

---

## ✅ What Was Done

### 1. **Branding Changes**
- ✅ Renamed project from "zola" to "nelsongpt" in `package.json` and `package-lock.json`
- ✅ Updated all UI references from "Zola" to "NelsonGPT"
- ✅ Created custom NelsonGPT icon with medical/pediatric theme
- ✅ Updated metadata (title, description) in `app/layout.tsx`
- ✅ Replaced references in share pages, headers, and components
- ✅ Updated Docker Compose service names

### 2. **Configuration Updates**
- ✅ Updated `lib/config.ts` with:
  - App name: "NelsonGPT"
  - App domain: "https://nelsongpt.com"
  - Default model: "mistral-large-latest" (Mistral AI)
  - Pediatric-focused suggestions (diagnose, treatment, guidelines, etc.)
  - Clinical system prompt optimized for pediatric care
- ✅ Updated `.env.example` with NelsonGPT-specific configuration
- ✅ Added ENCRYPTION_KEY configuration for BYOK functionality

### 3. **Backend Integration**
- ✅ Kept multi-provider AI system intact (flexible for future expansion)
- ✅ Set Mistral Large as the default model
- ✅ Maintained Supabase authentication
- ✅ Chat API already supports Mistral through existing openproviders system
- ✅ Made ENCRYPTION_KEY optional for build (with runtime warnings)

### 4. **Documentation**
- ✅ Created comprehensive README.md for NelsonGPT
- ✅ Updated installation instructions
- ✅ Added pediatric-specific use cases and features
- ✅ Created placeholder logo (`public/nelson-logo.png`)

### 5. **Build & Deployment**
- ✅ Dependencies installed successfully
- ✅ Project builds without errors
- ✅ Application runs locally on port 3000
- ✅ Vercel deployment ready
- ✅ Docker configuration updated

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher (already installed)
- Supabase account (for auth & vector DB)
- Mistral API key

### Setup Steps

1. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your credentials:**
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE=your_supabase_service_role_key
   
   # CSRF Protection
   CSRF_SECRET=your_32_character_random_string
   
   # Encryption Key (for BYOK)
   ENCRYPTION_KEY=your_base64_encoded_32_byte_key
   
   # Mistral API Key (PRIMARY)
   MISTRAL_API_KEY=your_mistral_api_key
   
   # App Configuration
   NEXT_PUBLIC_APP_NAME=NelsonGPT
   ```

3. **Generate Required Keys:**
   ```bash
   # Generate CSRF secret (32 characters)
   node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
   
   # Generate encryption key (32 bytes, base64)
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   
   Visit: http://localhost:3000

---

## 🏗️ Architecture

### Current Setup
- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **AI Provider**: Mistral AI (primary), with support for OpenAI, Anthropic, Google, etc.
- **Database**: Supabase (PostgreSQL + pgvector for RAG)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel-ready (or Docker)

### Default Model
- **mistral-large-latest** - Mistral's flagship model with 128K context window

### Chat System
The chat API (`app/api/chat/route.ts`) uses a flexible multi-provider system:
- Automatically routes requests to the correct AI provider based on model selection
- Supports streaming responses
- Includes tool use and reasoning capabilities
- Stores conversations in Supabase

---

## 📋 Key Features

### Implemented
✅ **Pediatric-Focused AI** - Specialized prompts and suggestions  
✅ **Mistral AI Integration** - Set as default model  
✅ **Supabase Authentication** - Secure user management  
✅ **Clean UI/UX** - Inherited from Zola with NelsonGPT branding  
✅ **Multi-Model Support** - Can use other models if needed  
✅ **Responsive Design** - Works on mobile and desktop  
✅ **Theme Support** - Light/dark mode  

### Ready for Enhancement
🔨 **RAG Implementation** - Supabase vector DB ready for Nelson Textbook integration  
🔨 **Citation System** - Can add references to Nelson chapters  
🔨 **Clinical Mode Toggle** - Switch between concise/detailed answers  
🔨 **Dosing Calculator** - Add pediatric dose calculations  

---

## 🔧 Configuration Files

### Key Files Modified
- `package.json` - Project metadata
- `lib/config.ts` - App configuration & suggestions
- `app/layout.tsx` - Page metadata
- `.env.example` - Environment template
- `app/components/layout/header.tsx` - Header with NelsonGPT branding
- `app/components/layout/app-info/app-info-content.tsx` - About section
- `components/icons/nelsongpt.tsx` - Custom icon
- `README.md` - Project documentation

### Environment Configuration
- `.environments.yaml` created for Clacky deployment
- Configured with: `npm run dev`, `npm install`, ESLint, TypeScript

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Option 2: Docker
```bash
docker build -t nelsongpt .
docker run -p 3000:3000 --env-file .env.local nelsongpt
```

### Option 3: Docker Compose with Ollama
```bash
docker-compose -f docker-compose.ollama.yml up
```

---

## 🩺 Pediatric-Focused Suggestions

The app includes 7 categories of pediatric prompts:

1. **Diagnose** - Help diagnose clinical presentations
2. **Treatment** - Recommend evidence-based treatments
3. **Guidelines** - Current clinical guidelines
4. **Differential** - Generate differential diagnoses
5. **Dosing** - Pediatric medication calculations
6. **Development** - Developmental milestones
7. **Learn** - Explain pediatric concepts

---

## 🔐 Security & Privacy

- **CSRF Protection** - Required for all API calls
- **Encryption** - User API keys encrypted at rest (BYOK)
- **Supabase Auth** - Industry-standard authentication
- **Environment Variables** - Sensitive data in `.env.local` (gitignored)

---

## ⚠️ Important Notes

### Required Environment Variables
For the app to work fully, you MUST set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE`
- `CSRF_SECRET`
- `MISTRAL_API_KEY`
- `ENCRYPTION_KEY` (optional, but needed for BYOK)

### Default Mistral Model
The app defaults to `mistral-large-latest`. Users can select other models if:
1. You add API keys for those providers
2. Models are configured in `lib/models/`

### RAG Implementation (Future)
To enable full RAG with Nelson Textbook:
1. Populate Supabase with vectorized Nelson content
2. Enable search in chat API (`enableSearch: true`)
3. Configure retrieval parameters
4. Add citation formatting

---

## 🐛 Known Issues

- None currently! Build passes, app runs successfully.

---

## 📞 Support

For questions or issues:
- Check the [README.md](README.md)
- Review [INSTALL.md](INSTALL.md) from original Zola project
- Consult Mistral AI docs: https://docs.mistral.ai

---

## 🎯 Next Steps

1. **Set up Supabase**:
   - Create a Supabase project
   - Set up authentication
   - Prepare database for vector storage

2. **Get Mistral API Key**:
   - Sign up at https://console.mistral.ai
   - Generate API key
   - Add to `.env.local`

3. **Test the Chat**:
   - Run `npm run dev`
   - Try pediatric-focused queries
   - Verify Mistral integration

4. **Deploy**:
   - Push to GitHub
   - Deploy to Vercel
   - Configure environment variables

5. **Enhance RAG** (Optional):
   - Prepare Nelson Textbook content
   - Vectorize and store in Supabase
   - Enable retrieval in chat

---

## ✨ Success!

Your NelsonGPT application is ready to run! 🎉

The transformation is complete with all branding, configuration, and deployment setup finished. The app maintains the excellent UX of Zola while being optimized for pediatric clinical use with Mistral AI.

**Current Status**: ✅ Running successfully on http://localhost:3000
