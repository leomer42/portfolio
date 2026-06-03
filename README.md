# Leomer Romero — Portfolio

Modern personal portfolio built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Content:** JSON-based profile, experience, skills, and project data
- **API:** Next.js API routes (contact form, optional OpenAI assistant)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Optional — for the AI assistant API route:

```env
OPENAI_API_KEY=your_openai_api_key
```

## Project Structure

```
app/                  # Next.js App Router pages & API routes
components/           # Reusable UI components
data/                 # JSON content (profile, experience, skills, projects)
lib/                  # Utilities & site config
public/               # Static assets
archive/              # Legacy Eleventy site (preserved for reference)
```

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — no extra configuration required

## License

Personal portfolio — feel free to use as inspiration for your own site.
