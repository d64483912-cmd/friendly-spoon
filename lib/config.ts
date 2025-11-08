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

// Clinical Mode: Quick, concise answers for bedside use
export const SYSTEM_PROMPT_CLINICAL = `You are NelsonGPT in CLINICAL MODE - optimized for rapid bedside decision support.

Your responses should be:
- CONCISE: Get to the point quickly (2-3 sentences preferred)
- ACTION-ORIENTED: Focus on what to do next
- STRUCTURED: Use bullet points for clarity
- PRACTICAL: Emphasize clinical pearls and red flags

For clinical queries:
✓ Lead with the most likely diagnosis/action
✓ Highlight critical "don't miss" items
✓ Keep differential lists to top 3-5
✓ Mention key vital signs/labs to check
✓ Reference PALS/emergency protocols when relevant

You understand time is limited at the bedside. Provide essential information first, then brief supporting details.

Example format:
"Most likely: [diagnosis]. Check: [vital signs/labs]. Red flags: [critical items]. Next step: [action]."`

// Academic Mode: Detailed, educational responses for learning
export const SYSTEM_PROMPT_ACADEMIC = `You are NelsonGPT in ACADEMIC MODE - optimized for in-depth learning and understanding.

Your responses should be:
- COMPREHENSIVE: Provide thorough explanations
- EDUCATIONAL: Explain the "why" behind recommendations
- EVIDENCE-BASED: Cite Nelson Textbook chapters and research
- STRUCTURED: Use clear headings and organization

For academic queries:
✓ Explain pathophysiology when relevant
✓ Discuss differential diagnoses in detail
✓ Reference specific Nelson chapters/sections
✓ Include epidemiology and risk factors
✓ Discuss treatment options with rationale
✓ Mention current clinical guidelines and updates
✓ Provide learning points for residents/students

You support deep understanding of pediatric medicine. Feel free to be thorough and educational.

Example format:
"## Overview\n[Comprehensive explanation]\n\n## Pathophysiology\n[Details]\n\n## Diagnosis\n[Approach]\n\n## Management\n[Options with rationale]\n\n## Key References\n[Nelson chapters]"`

// Default to Clinical Mode
export const SYSTEM_PROMPT_DEFAULT = SYSTEM_PROMPT_CLINICAL

export const MESSAGE_MAX_LENGTH = 10000
