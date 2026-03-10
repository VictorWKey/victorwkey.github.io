const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, LevelFormat, TabStopType
} = require('docx');
const fs = require('fs');
const path = require('path');

const MARGIN = 720;
const PAGE_W = 12240;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const F = "Arial";
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

function spanish() {
  return [
    center("Victor Angel Lopez Romero", S.name, true),
    center("Ingeniero de Software IA", S.title),
    center("victorwkey@gmail.com  |  +52 462 257 4618  |  www.victorwkey.com", S.contact),
    center("linkedin.com/in/victor-angel-lopez-romero-556605245  |  github.com/VictorWKey", S.contact),
    center("Irapuato, Guanajuato, M\u00e9xico  |  Disponible para Trabajo Remoto y Reubicaci\u00f3n", S.contact, false, 80),

    secHdr("RESUMEN PROFESIONAL"),
    normal("Ingeniero de Software IA especializado en el dise\u00f1o, despliegue y optimizaci\u00f3n de sistemas LLM, NLP y Retrieval-Augmented Generation (RAG) para aplicaciones SaaS empresariales. Propongo e implemento pipelines de IA de extremo a extremo de forma aut\u00f3noma en Vortice Coaching, logrando una reducci\u00f3n del 40-60% en costos computacionales y automatizando flujos de trabajo clave del negocio. Creador de TourlyAI, plataforma NLP open-source completamente local con pipeline de 9 fases, 2 modelos BERT ajustados a medida y cero dependencias externas en tiempo de ejecuci\u00f3n."),

    secHdr("HABILIDADES"),
    skill("LLMs e IA", "LangChain, HuggingFace, Ollama, Retrieval-Augmented Generation (RAG), LLM Workflows, Prompt Engineering, Bidirectional Encoder Representations from Transformers (BERT) Fine-tuning, Model Deployment, Inference Optimization"),
    skill("Frameworks", "Next.js, React, Electron, TailwindCSS, Node.js"),
    skill("Lenguajes", "Python, TypeScript, JavaScript"),
    skill("ML / Datos", "PyTorch, TensorFlow, Scikit-learn, Natural Language Processing (NLP), An\u00e1lisis de Sentimientos, Topic Modeling, Model Evaluation"),
    skill("Bases de Datos", "PostgreSQL, Bases de Datos Vectoriales"),
    skill("Habilidades Blandas", "Proactividad, Aprendizaje Aut\u00f3nomo, Adaptabilidad, Resoluci\u00f3n de Problemas, Comunicaci\u00f3n T\u00e9cnica, Atenci\u00f3n al Detalle"),

    secHdr("EXPERIENCIA LABORAL"),
    entryHead("Vortice Coaching", "Oct 2025 \u2013 Presente"),
    entryTitle("Ingeniero de Software IA"),
    blt("Dise\u00f1\u00e9 e implement\u00e9 un pipeline de preprocesamiento de texto con ingesta de documentos v\u00eda OCR, limpieza de texto y extracci\u00f3n estructurada de informaci\u00f3n para alimentar los servicios de IA de la plataforma."),
    blt("Impuls\u00e9 el dise\u00f1o t\u00e9cnico de 8 servicios de la plataforma que implement\u00e9; restructur\u00e9 la arquitectura del proyecto para mayor escalabilidad y mejor experiencia de desarrollo, y comuniqu\u00e9 decisiones de dise\u00f1o de sistemas IA al liderazgo no t\u00e9cnico para alinear la estrategia de la plataforma."),
    blt("Constru\u00ed 9 workflows LLM en diversos servicios de la plataforma para automatizar la extracci\u00f3n de informaci\u00f3n valiosa de m\u00faltiples fuentes, garantizando salidas estructuradas y consistentes para su visualizaci\u00f3n y uso en an\u00e1lisis posteriores."),
    blt("Constru\u00ed m\u00f3dulos de an\u00e1lisis y evaluaci\u00f3n desde cero con estrategias de optimizaci\u00f3n de inferencia, logrando una reducci\u00f3n del 40-60% en consumo de tokens y costos de c\u00f3mputo junto con una mejora del 40% en el rendimiento general del sistema."),

    secHdr("EXPERIENCIA EN PROYECTOS"),
    entryHead("TourlyAI \u2014 NLP Open-Source e Insights  |  github.com/TourlyAI  |  tourlyai.site", "Sep 2025 \u2013 Mar 2026"),
    entryTitle("Desarrollador Principal e Investigador IA"),
    blt("Ingenier\u00e9 un pipeline NLP de 9 fases con an\u00e1lisis de sentimientos y topic modeling; ajust\u00e9 y desplegu\u00e9 2 modelos BERT para clasificaci\u00f3n multi-etiqueta en 12 categor\u00edas (80% F1-ponderado) y detecci\u00f3n de subjetividad (77% F1), alcanzando precisi\u00f3n de nivel productivo."),
    blt("Arquitect\u00e9 una aplicaci\u00f3n de escritorio offline y privada (Electron/React/Python) con Ollama para inferencia y despliegue de modelos LLM en el dispositivo, sin dependencias externas en tiempo de ejecuci\u00f3n."),

    secHdr("EDUCACI\u00d3N"),
    entryHead("Universidad de Guanajuato", "Ene 2023 \u2013 Dic 2026 (En Curso)"),
    entryTitle("Ing. en Datos e Inteligencia Artificial \u2014 Divisi\u00f3n de Ingenier\u00edas, Campus Irapuato-Salamanca"),

    secHdr("CERTIFICACIONES"),
    entryHead("Platzi", "Mar 2023 \u2013 Jun 2025"),
    entryTitle("Rutas de Aprendizaje: Full-Stack Developer \u2014 Deep Learning: Natural Language Processing (NLP)"),

    secHdr("IDIOMAS"),
    normal("Espa\u00f1ol: Nativo  |  Ingl\u00e9s: B2 (Intermedio-Alto)"),
  ];
}

const docES = new Document({ numbering, sections: [pageSection(spanish())] });

Packer.toBuffer(docES)
  .then(buf => {
    const dest = path.join(__dirname, '..', 'public', 'CV_Victor_Lopez_ES.docx');
    fs.writeFileSync(dest, buf);
    console.log('CV ES generado → ' + dest);
  })
  .catch(err => console.error(err));
