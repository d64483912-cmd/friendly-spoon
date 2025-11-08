export function AppInfoContent() {
  return (
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed">
        <span className="font-medium">NelsonGPT</span> is a specialized AI-powered clinical companion for pediatricians.
        <br />
        Built on RAG architecture with Nelson Textbook of Pediatrics knowledge base.
        <br />
        Get evidence-based answers for clinical decision-making.
        <br />
      </p>
      <p className="text-foreground leading-relaxed">
        Powered by Mistral AI with Supabase vector database for retrieval-augmented generation.
      </p>
    </div>
  )
}
