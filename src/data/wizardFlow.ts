export interface WizardOption {
  label: string
  next?: string
  result?: {
    code: string
    label: string
    note?: string
  }
}

export interface WizardNode {
  question: string
  hint: string
  options: WizardOption[]
}

export const wizardFlow: Record<string, WizardNode> = {
  start: {
    question: 'What is the primary type of purchase?',
    hint: "Think about what you're actually buying from a supplier — the primary value delivered.",
    options: [
      {
        label: 'Human capability, expertise, or professional outcomes',
        next: 'q_services',
      },
      {
        label: 'Physical goods, raw materials, or components',
        next: 'q_goods',
      },
      {
        label: 'Software, cloud, or IT services',
        result: { code: '04', label: 'Technology & Data Services' },
      },
      {
        label: 'Utilities (power, water, connectivity)',
        result: { code: '07', label: 'Utilities & Connectivity' },
      },
      { label: 'Freight or logistics', next: 'q_freight' },
      {
        label: 'A contract with multiple distinct components',
        next: 'q_multi',
      },
    ],
  },
  q_services: {
    question: 'What kind of capability are you buying?',
    hint: "The supplier's domain expertise determines the Level 2 class.",
    options: [
      {
        label: 'IT, digital, or technology work',
        result: { code: '03-06', label: 'IT & Digital Capability' },
      },
      {
        label: 'Strategic or management consulting',
        result: { code: '03-01', label: 'Management & Strategy Capability' },
      },
      {
        label: 'Legal or compliance advice',
        result: { code: '03-02', label: 'Legal & Compliance Capability' },
      },
      {
        label: 'Marketing or creative work',
        result: { code: '03-04', label: 'Marketing & Creative Capability' },
      },
      {
        label: 'Physical operations (cleaning, security, catering)',
        result: { code: '06', label: 'Operational Services' },
      },
      {
        label: 'Engineering or technical expertise',
        result: { code: '03-05', label: 'Engineering & Technical Capability' },
      },
    ],
  },
  q_goods: {
    question: 'What type of physical goods?',
    hint: 'Lifecycle and strategic purpose separate Plant from Workplace from MRO.',
    options: [
      {
        label: 'Raw materials or commodities (for production)',
        result: {
          code: '01-01',
          label: 'Raw Materials & Industrial Commodities',
        },
      },
      {
        label: 'Manufactured components or sub-assemblies',
        result: {
          code: '01-02',
          label: 'Manufactured Components & Sub-Assemblies',
        },
      },
      {
        label: 'Capital equipment (5+ year lifecycle, strategic)',
        result: { code: '02', label: 'Plant & Infrastructure' },
      },
      {
        label: 'Workplace devices or office equipment (3–5 year refresh)',
        result: { code: '05', label: 'Workplace & Productivity' },
      },
      {
        label: 'Maintenance materials, PPE, spare parts',
        result: { code: '08', label: 'MRO & Maintenance Materials' },
      },
      {
        label: 'Construction materials or building components',
        result: { code: '12', label: 'Construction & Buildings' },
      },
    ],
  },
  q_freight: {
    question: 'Who controls the logistics?',
    hint: "Incoterms are the clearest signal. If no Incoterms, ask who is actually arranging transport.",
    options: [
      {
        label: 'We arrange transport (EXW or FOB terms)',
        result: {
          code: '15-01',
          label: 'Freight & Transportation — actively managed',
          note: 'Classify to 15-01. You control the carrier relationship.',
        },
      },
      {
        label:
          'Seller arranges, but we plan to manage freight separately in future',
        result: {
          code: '15-01',
          label: 'Freight & Transportation — build the data now',
          note: "Split to 15-01 now. You can't retroactively separate historical data.",
        },
      },
      {
        label:
          "Seller arranges (CIF/DDP) and we'll never manage it ourselves",
        result: {
          code: 'embed',
          label: 'Embed with the product classification',
          note: 'No realistic scenario to unbundle — embed freight in the product category.',
        },
      },
    ],
  },
  q_multi: {
    question:
      'Apply the Three-Test Framework: do all three tests pass?',
    hint: 'Materiality (>5–10% or >$10K), Control (can be separated), and Strategic Intent (managing separately now or might want to).',
    options: [
      {
        label:
          'All three tests pass — significant, separable, strategic',
        result: {
          code: 'split',
          label: 'Split the classification',
          note: 'Code each component to its own supply market category.',
        },
      },
      {
        label:
          'One or more tests fail (too small, inseparable, or no intent)',
        result: {
          code: 'bundle',
          label: 'Keep bundled under the primary classification',
          note: 'Use the category of the primary component or service.',
        },
      },
      {
        label: "Uncertain — it's borderline",
        result: {
          code: 'split',
          label: 'Split by default',
          note: "When in doubt, split. Preserves future optionality at no cost. You can consolidate later — you can't retroactively split.",
        },
      },
    ],
  },
}
