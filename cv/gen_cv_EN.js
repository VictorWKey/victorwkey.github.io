const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, LevelFormat, TabStopType
} = require('docx');
const fs = require('fs');

const MARGIN = 720;
const PAGE_W = 12240;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const F = "Arial";

// 10pt = 20 half-points
const S = { name: 28, title: 22, contact: 18, sec: 20, body: 21 };

const numbering = {
  config: [{
    reference: "bullets",
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: "\u2022",
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 200 } } }
    }]
  }]
};

function pageSection(children) {
  return {
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN }
      }
    },
    children
  };
}

const t = (text, size, opts = {}) => new TextRun({ text, size, font: F, ...opts });

const center = (text, size, bold = false, afterSpacing = 24) => new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [t(text, size, { bold })],
  spacing: { before: 0, after: afterSpacing }
});

const secHdr = (text) => new Paragraph({
  children: [t(text, S.sec, { bold: true })],
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000", space: 1 } },
  spacing: { before: 100, after: 44 }
});

const normal = (text) => new Paragraph({
  children: [t(text, S.body)],
  spacing: { before: 36, after: 36 }
});

const skill = (label, value) => new Paragraph({
  children: [t(label + ": ", S.body, { bold: true }), t(value, S.body)],
  spacing: { before: 14, after: 14 }
});

const blt = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  children: [t(text, S.body)],
  spacing: { before: 14, after: 14 }
});

const entryHead = (left, date) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
  children: [t(left, S.body, { bold: true }), t("\t" + date, S.body)],
  spacing: { before: 64, after: 14 }
});

const entryTitle = (text) => new Paragraph({
  children: [t(text, S.body, { italics: true })],
  spacing: { before: 0, after: 14 }
});

const gap = () => new Paragraph({
  children: [t("", S.body)],
  spacing: { before: 0, after: 20 }
});

// ─── ENGLISH — tailored for AI Software Engineer ─────────────────────────
function english() {
  return [
    center("Victor Angel Lopez Romero", S.name, true),
    center("AI Software Engineer", S.title),
    center("victorwkey@gmail.com  |  +52 462 257 4618  |  www.victorwkey.com", S.contact),
    center("linkedin.com/in/victor-angel-lopez-romero-556605245  |  github.com/VictorWKey", S.contact),
    center("Irapuato, Guanajuato, M\u00e9xico  |  Open to Remote Work & Relocation", S.contact, false, 80),

    secHdr("PROFESSIONAL SUMMARY"),
    normal("AI Software Engineer specialized in designing, deploying, and optimizing production-grade LLM, NLP, and Retrieval-Augmented Generation (RAG) systems for enterprise SaaS applications. Independently proposes and implements end-to-end AI pipelines at Vortice Coaching, achieving a 40-60% reduction in computational costs and automating core business workflows. Creator of TourlyAI, a fully local open-source NLP platform featuring a 9-phase pipeline, 2 custom fine-tuned BERT models, and zero external runtime dependencies."),

    secHdr("SKILLS"),
    skill("LLMs & AI", "LangChain, HuggingFace, Ollama, Retrieval-Augmented Generation (RAG), LLM Workflows, Prompt Engineering, Bidirectional Encoder Representations from Transformers (BERT) Fine-tuning, Model Deployment, Inference Optimization"),
    skill("Frameworks", "Next.js, React, Electron, TailwindCSS, Node.js"),
    skill("Languages", "Python, TypeScript, JavaScript"),
    skill("ML / Data", "PyTorch, TensorFlow, Scikit-learn, Natural Language Processing (NLP), Sentiment Analysis, Topic Modeling, Model Evaluation"),
    skill("Databases", "PostgreSQL, Vector Databases"),
    skill("Soft Skills", "Proactivity, Self-Directed Learning, Adaptability, Problem-Solving, Technical Communication, Attention to Detail"),

    secHdr("WORK EXPERIENCE"),
    entryHead("Vortice Coaching", "Oct 2025 \u2013 Present"),
    entryTitle("AI Software Engineer"),
    blt("Designed and implemented a text preprocessing pipeline including OCR-based document ingestion, text cleaning, and structured information extraction to feed the platform's AI services."),
    blt("Drove the technical design of 8 platform services I implemented; restructured project architecture for improved scalability and developer experience, and communicated AI system design decisions to non-technical leadership to align on platform strategy."),
    blt("Built 9 LLM workflows across platform services to automate the extraction of valuable information from multiple sources, ensuring structured, consistent outputs for visualization and downstream analysis."),
    blt("Built analysis and evaluation modules from scratch with model inference optimization strategies, achieving a 40-60% reduction in token consumption and compute costs alongside a 40% improvement in overall system performance."),

    secHdr("PROJECT EXPERIENCE"),
    entryHead("TourlyAI \u2014 Open-Source NLP & Insights  |  github.com/TourlyAI  |  tourlyai.site", "Sep 2025 \u2013 Mar 2026"),
    entryTitle("Lead Developer & AI Researcher"),
    blt("Engineered a 9-phase NLP pipeline with sentiment analysis and topic modeling; fine-tuned and deployed 2 BERT models for multi-label classification across 12 categories (80% F1-weighted) and subjectivity detection (77% F1), achieving production-grade accuracy."),
    blt("Architected a privacy-first, fully offline desktop application (Electron/React/Python) integrating Ollama for on-device LLM inference and model serving with zero external runtime dependencies."),

    secHdr("EDUCATION"),
    entryHead("Universidad de Guanajuato", "Jan 2023 \u2013 Dec 2026 (In Progress)"),
    entryTitle("B.Eng. in Data Engineering & Artificial Intelligence \u2014 Division of Engineering, Irapuato-Salamanca Campus"),

    secHdr("CERTIFICATIONS"),
    entryHead("Platzi", "Mar 2023 \u2013 Jun 2025"),
    entryTitle("Learning Paths: Full-Stack Developer \u2014 Deep Learning: Natural Language Processing (NLP)"),

    secHdr("LANGUAGES"),
    normal("Spanish: Native  |  English: B2 (Upper-Intermediate)"),
  ];
}

// ─── SPANISH — tailored ──────────────────────────────────────────────────
function spanish() {
  return [
    center("Victor Angel Lopez Romero", S.name, true),
    center("Ingeniero de Software IA", S.title),
    center("victorwkey@gmail.com  |  +52 462 257 4618  |  www.victorwkey.com", S.contact),
    center("linkedin.com/in/victor-angel-lopez-romero-556605245  |  github.com/VictorWKey", S.contact),
    gap(),

    secHdr("RESUMEN PROFESIONAL"),
    normal("Ingeniero de Software IA especializado en el dise\u00f1o, despliegue y optimizaci\u00f3n de sistemas LLM, NLP y Retrieval-Augmented Generation (RAG) de nivel productivo para aplicaciones SaaS empresariales. Propone e implementa pipelines de IA de extremo a extremo de forma aut\u00f3noma en Vortice Coaching, logrando una reducci\u00f3n del 40-60% en costos computacionales y automatizando flujos de trabajo clave del negocio. Creador de TourlyAI, plataforma NLP open-source completamente local con pipeline de 9 fases, 2 modelos BERT ajustados a medida y cero dependencias externas en tiempo de ejecuci\u00f3n."),

    secHdr("HABILIDADES"),
    skill("LLMs e IA", "LangChain, HuggingFace, Ollama, Retrieval-Augmented Generation (RAG), LLM Workflows, Prompt Engineering, Bidirectional Encoder Representations from Transformers (BERT) Fine-tuning, Model Deployment, Inference Optimization"),
    skill("Frameworks", "Next.js, React, Electron, TailwindCSS, Node.js"),
    skill("Lenguajes", "Python, TypeScript, JavaScript"),
    skill("ML / Datos", "PyTorch, TensorFlow, Scikit-learn, Natural Language Processing (NLP), An\u00e1lisis de Sentimientos, Topic Modeling, Model Evaluation"),
    skill("Bases de Datos", "PostgreSQL, Bases de Datos Vectoriales"),
    skill("Habilidades Blandas", "Aprendizaje Aut\u00f3nomo, Adaptabilidad, Resoluci\u00f3n de Problemas, Comunicaci\u00f3n T\u00e9cnica, Atenci\u00f3n al Detalle"),

    secHdr("EXPERIENCIA LABORAL"),
    entryHead("Vortice Coaching", "Oct 2025 \u2013 Presente"),
    entryTitle("Ingeniero de Software IA"),
    blt("Dise\u00f1\u00f3 y despleg\u00f3 un pipeline NLP de extremo a extremo logrando una reducci\u00f3n del 40-60% en costos computacionales mediante optimizaci\u00f3n de procesamiento y almacenamiento sem\u00e1ntico, reduciendo directamente los gastos de infraestructura de la plataforma productiva."),
    blt("Desarroll\u00f3 m\u00faltiples flujos de trabajo impulsados por IA para automatizar an\u00e1lisis organizacionales complejos \u2014 evaluaciones de desempe\u00f1o, perfilamiento conductual e informes financieros \u2014 eliminando el procesamiento manual en 3 funciones clave del negocio."),
    blt("Construy\u00f3 m\u00f3dulos de an\u00e1lisis y evaluaci\u00f3n desde cero, implementando estrategias de optimizaci\u00f3n de inferencia de modelos que mejoraron el rendimiento general del sistema en un 40%."),
    blt("Propuso e implement\u00f3 de forma aut\u00f3noma una plataforma de IA empresarial multi-servicio; lider\u00f3 la refactorizaci\u00f3n hacia arquitectura de microservicios para mayor escalabilidad, y comunic\u00f3 decisiones de dise\u00f1o de sistemas IA al liderazgo no t\u00e9cnico para alinear la estrategia de la plataforma."),

    secHdr("PROYECTOS"),
    entryHead("TourlyAI \u2014 NLP Open-Source e Insights  |  github.com/TourlyAI", "Sep 2025 \u2013 Presente"),
    entryTitle("Desarrollador Principal e Investigador IA"),
    blt("Dise\u00f1\u00f3 y despleg\u00f3 un pipeline NLP de 9 fases con an\u00e1lisis de sentimientos y topic modeling; ajust\u00f3 2 modelos BERT para clasificaci\u00f3n multi-etiqueta en 12 categor\u00edas (80% F1-ponderado) y detecci\u00f3n de subjetividad (77% F1), alcanzando precisi\u00f3n de nivel productivo."),
    blt("Dise\u00f1\u00f3 una aplicaci\u00f3n de escritorio offline y privada (Electron/React/Python) con Ollama para inferencia y despliegue de modelos LLM en el dispositivo, sin dependencias externas en tiempo de ejecuci\u00f3n."),

    secHdr("EDUCACI\u00d3N"),
    entryHead("Universidad de Guanajuato", "Ene 2023 \u2013 Dic 2026 (En Curso)"),
    entryTitle("Ing. en Datos e Inteligencia Artificial \u2014 Escuela de Ingenier\u00eda, Campus Irapuato-Salamanca"),

    secHdr("CERTIFICACIONES"),
    entryHead("Platzi", "Mar 2023 \u2013 Jun 2025"),
    entryTitle("Full-Stack Developer & Deep Learning: Natural Language Processing (NLP)"),

    secHdr("IDIOMAS"),
    normal("Espa\u00f1ol: Nativo  |  Ingl\u00e9s: B2 (Intermedio-Alto)"),
  ];
}

const docEN = new Document({ numbering, sections: [pageSection(english())] });

Packer.toBuffer(docEN)
  .then(buf => {
    fs.writeFileSync("/home/claude/CV_Victor_Lopez_EN_v3.docx", buf);
    console.log("Done!");
  })
  .catch(err => console.error(err));
