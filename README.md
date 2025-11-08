# NelsonGPT

**NelsonGPT - Smart Pediatric Assistant**

NelsonGPT is a specialized AI-powered clinical companion designed for pediatricians. Built on a RAG (Retrieval-Augmented Generation) architecture, it provides evidence-based answers powered by the Nelson Textbook of Pediatrics knowledge base.

![NelsonGPT](./public/cover_zola.jpg)

## Features

- **Pediatric-Focused AI**: Specialized knowledge base from Nelson Textbook of Pediatrics
- **Mistral AI Integration**: Powered by Mistral API for reliable clinical reasoning
- **RAG Architecture**: Retrieval-Augmented Generation with Supabase vector database
- **Clinical Mode**: Toggle between concise on-the-go answers and detailed explanations
- **Supabase Authentication**: Secure login and user management
- **Clean, Responsive UI**: Built with Tailwind CSS, shadcn/ui, and prompt-kit
- **Customizable**: User system prompt, multiple layout options, theme support
- **Self-Hostable**: Run on your own infrastructure for complete data control

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- Supabase account (for authentication and vector DB)
- Mistral API key

### Installation

```bash
git clone https://github.com/yourusername/nelsongpt.git
cd nelsongpt
npm install
```

### Configuration

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key
CSRF_SECRET=your_32_character_random_string
MISTRAL_API_KEY=your_mistral_api_key
NEXT_PUBLIC_APP_NAME=NelsonGPT
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nelsongpt)

1. Click the "Deploy" button above
2. Add your environment variables in Vercel dashboard
3. Deploy!

### Docker

```bash
docker build -t nelsongpt .
docker run -p 3000:3000 nelsongpt
```

## Architecture

NelsonGPT combines several technologies:

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **AI Processing**: Mistral API via Vercel AI SDK
- **Vector Database**: Supabase (PostgreSQL + pgvector)
- **Authentication**: Supabase Auth
- **RAG Pipeline**: LangChain + LangGraph (planned enhancement)

## Use Cases

- 🩺 Quick clinical decision support during patient consultations
- 📚 Evidence-based reference to Nelson Textbook sections
- 🔬 Research and study assistance for pediatric residents
- 💬 Interactive learning tool for pediatric education

## Built With

- [Next.js](https://nextjs.org/) — React framework
- [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk) — AI integration
- [Mistral AI](https://mistral.ai/) — AI reasoning engine
- [Supabase](https://supabase.com) — Auth and vector database
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [prompt-kit](https://prompt-kit.com/) — AI chat components

## Why NelsonGPT?

Unlike generic AI assistants, NelsonGPT is:
- ✅ **Specialized** for pediatrics
- ✅ **Dynamic** and interactive (vs static reference apps)
- ✅ **Citation-backed** with Nelson textbook references
- ✅ **Efficient** - no flipping through 1000+ pages while the nurse waits

Think of it as having the Nelson Textbook on your shoulder, whispering evidence-based answers—without the 3kg backache.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache License 2.0

## Disclaimer

NelsonGPT is designed as a clinical support tool and should not replace professional medical judgment. Always verify information and consult current clinical guidelines.

## Notes

This is a specialized adaptation of the open-source Zola chat interface, customized for pediatric clinical use.
