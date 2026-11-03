const shapes = {
  rag: (
    <>
      <path d="M10 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8l4 4v3M12 3v5h5M7 12h3M7 16h2" />
      <circle cx="15.5" cy="15.5" r="3.5" />
      <path d="m18 18 3 3" />
    </>
  ),
  agent: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="3" />
      <path d="M12 3v4M1 12v4M23 12v4M9 16h6" />
      <circle cx="8" cy="12" r=".75" />
      <circle cx="16" cy="12" r=".75" />
    </>
  ),
  tools: (
    <path d="M14 4a6 6 0 0 0-7 7l-4 4a3 3 0 0 0 4 4l4-4a6 6 0 0 0 7-8l-4 4-3-3 4-4Z" />
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6M15 12l3 3 3-3M3 15h6v6H3z" />
    </>
  ),
  embeddings: (
    <>
      <circle cx="5" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="m8 16 8-8M11 8h5v5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  structured: (
    <>
      <path d="M7 3H6a2 2 0 0 0-2 2v4l-2 3 2 3v4a2 2 0 0 0 2 2h1M17 3h1a2 2 0 0 1 2 2v4l2 3-2 3v4a2 2 0 0 1-2 2h-1M10 8h4M10 12h4M10 16h4" />
    </>
  ),
  tune: (
    <>
      <path d="M5 3v4M5 11v10M12 3v10M12 17v4M19 3v4M19 11v10" />
      <rect x="3" y="7" width="4" height="4" rx="1" />
      <rect x="10" y="13" width="4" height="4" rx="1" />
      <rect x="17" y="7" width="4" height="4" rx="1" />
    </>
  ),
  evaluate: (
    <>
      <path d="M3 3v18h18M7 17v-5M12 17v-3M17 17v-7M10 6l3 3 7-7" />
    </>
  ),
  topics: (
    <>
      <path d="m7 7 3 3m4 0 3-3M12 14v4" />
      <circle cx="5" cy="5" r="3" />
      <circle cx="19" cy="5" r="3" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="21" r="2" />
    </>
  ),
  api: (
    <>
      <path d="M3 7h17l-4-4M21 17H4l4 4M20 7l-4 4M4 17l4-4" />
    </>
  ),
  async: (
    <>
      <path d="M3 11a9 9 0 1 1 2.5 7.2M3 5v6h6M12 7v5l3 2" />
    </>
  ),
  access: (
    <>
      <path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  context: (
    <>
      <rect x="7" y="3" width="14" height="15" rx="2" />
      <path d="M3 7v12a2 2 0 0 0 2 2h12M11 7h6M11 11h6M11 15h3" />
    </>
  ),
  prompt: (
    <>
      <path d="M12 3H5a2 2 0 0 0-2 2v12l4-3h4M7 7h4M7 10h2M14 15l-1 5 5-1 4-4-4-4-4 4ZM16 13l4 4" />
    </>
  ),
  multiAgent: (
    <>
      <circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M8 10a4 4 0 0 1 8 0M1 23v-1a3 3 0 0 1 6 0v1M17 23v-1a3 3 0 0 1 6 0v1M6 13l2-3M16 10l2 3M9 20h6" />
    </>
  ),
  protocol: (
    <>
      <path d="M8 3v4M16 3v4M6 7h12v3a6 6 0 0 1-12 0V7ZM12 16v5" />
    </>
  ),
};

export default function SkillConcept({ kind }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="w-full h-full"
    >
      {shapes[kind] || shapes.agent}
    </svg>
  );
}
