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
  spacing: { before: 60, after: 28 }
});

const normal = (text) => new Paragraph({
  children: [t(text, S.body)],
  spacing: { before: 20, after: 20 }
});

const skill = (label, value) => new Paragraph({
  children: [t(label + ": ", S.body, { bold: true }), t(value, S.body)],
  spacing: { before: 8, after: 8 }
});

const blt = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  children: [t(text, S.body)],
  spacing: { before: 8, after: 8 }
});

const entryHead = (left, date) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
  children: [t(left, S.body, { bold: true }), t("\t" + date, S.body)],
  spacing: { before: 40, after: 8 }
});

const entryTitle = (text) => new Paragraph({
  children: [t(text, S.body, { italics: true })],
  spacing: { before: 0, after: 8 }
});

// ─── CV ADAPTADO PARA GSE — Vacante: Agente IA ───────────────────────────
function gse() {
  return [
    center("Victor Angel Lopez Romero", S.name, true),
    center("Ingeniero de Software IA", S.title),
    center("victorwkey@gmail.com  |  +52 462 257 4618  |  www.victorwkey.com", S.contact),
    center("linkedin.com/in/victorlopezwk  |  github.com/VictorWKey", S.contact),
    center("Irapuato, Guanajuato, M\u00e9xico  |  Disponible para Trabajo Remoto", S.contact, false, 50),

    secHdr("RESUMEN PROFESIONAL"),
    normal("Ingeniero de Software IA con experiencia productiva en agentes IA, pipelines de datos y automatizaci\u00f3n de flujos de trabajo. En Vortice Coaching: implement\u00e9 un agente conversacional para todos los servicios clave, reduje costos computacionales 40-60% y constru\u00ed 9 workflows LLM para automatizar la extracci\u00f3n de informaci\u00f3n en m\u00faltiples servicios. En TourlyAI: entren\u00e9 y evalu\u00e9 modelos BERT para clasificaci\u00f3n con 80% F1 en 12 categor\u00edas."),

    secHdr("HABILIDADES T\u00c9CNICAS"),
    skill("Lenguajes", "Python, TypeScript, JavaScript"),
    skill("Datos & ML", "Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow, Visualizaci\u00f3n de Datos (Matplotlib, Seaborn), SQL (PostgreSQL, MySQL)"),
    skill("IA & LLMs", "LangChain, Agentes IA, Retrieval-Augmented Generation (RAG), LLM Workflows, Prompt Engineering, Fine-tuning BERT, Inferencia y Optimizaci\u00f3n de Modelos"),
    skill("Desarrollo", "APIs REST (consumo y creaci\u00f3n), FastAPI, Node.js, React, TypeScript, Git, Postman"),
    skill("Fundamentos", "\u00c1lgebra Lineal, Probabilidad y Estad\u00edstica, Algoritmos, Estructura de Datos"),

    secHdr("EXPERIENCIA LABORAL"),
    entryHead("Vortice Coaching", "Oct 2025 \u2013 Presente"),
    entryTitle("Ingeniero de Software IA"),
    blt("Dise\u00f1\u00e9 y despliegu\u00e9 un agente de IA conversacional que interact\u00faa con todos los servicios clave de la plataforma, permitiendo a los usuarios operarla en lenguaje natural; construido con arquitectura din\u00e1mica y extensible que integra autom\u00e1ticamente los nuevos servicios conforme la plataforma escala."),
    blt("Constru\u00ed 9 workflows LLM en m\u00faltiples servicios para automatizar la extracci\u00f3n de informaci\u00f3n de diversas fuentes, garantizando salidas estructuradas y consistentes para su visualizaci\u00f3n y an\u00e1lisis."),
    blt("Constru\u00ed m\u00f3dulos de an\u00e1lisis y evaluaci\u00f3n desde cero con estrategias de optimizaci\u00f3n de inferencia, logrando una reducci\u00f3n del 40-60% en consumo de tokens y costos de c\u00f3mputo junto con una mejora del 40% en rendimiento del sistema."),
    blt("Impuls\u00e9 el dise\u00f1o t\u00e9cnico de 8 servicios que implement\u00e9 y restructur\u00e9 la arquitectura del proyecto para mayor escalabilidad; comuniqu\u00e9 decisiones de sistemas IA al liderazgo no t\u00e9cnico para alinear la estrategia de la plataforma."),


    secHdr("EXPERIENCIA EN PROYECTOS"),
    entryHead("TourlyAI \u2014 Plataforma NLP Open-Source  |  github.com/TourlyAI  |  tourlyai.site", "Sep 2025 \u2013 Mar 2026"),
    entryTitle("Desarrollador Principal e Investigador IA"),
    blt("Entren\u00e9 y evalu\u00e9 2 modelos BERT para clasificaci\u00f3n multi-etiqueta en 12 categor\u00edas (80% F1-ponderado) y detecci\u00f3n de subjetividad (77% F1), aplicando t\u00e9cnicas de fine-tuning, validaci\u00f3n y evaluaci\u00f3n de modelos en producci\u00f3n."),
    blt("Dise\u00f1\u00e9 un pipeline NLP de 9 fases con an\u00e1lisis de sentimientos, topic modeling y procesamiento de datos con Pandas/NumPy; construido sobre una aplicaci\u00f3n de escritorio offline (Electron/React/Python) con APIs REST propias y cero dependencias externas en tiempo de ejecuci\u00f3n."),

    secHdr("EDUCACI\u00d3N"),
    entryHead("Universidad de Guanajuato", "Ene 2023 \u2013 Dic 2026 (En Curso)"),
    entryTitle("Ing. en Datos e Inteligencia Artificial \u2014 Escuela de Ingenier\u00eda, Campus Irapuato-Salamanca"),

    secHdr("CERTIFICACIONES"),
    entryHead("Platzi", "Mar 2023 \u2013 Jun 2025"),
    entryTitle("Rutas de Aprendizaje: Full-Stack Developer \u2014 Deep Learning: Natural Language Processing (NLP)"),

    secHdr("IDIOMAS"),
    normal("Espa\u00f1ol: Nativo  |  Ingl\u00e9s: B2 (Intermedio-Alto)"),
  ];
}

const doc = new Document({ numbering, sections: [pageSection(gse())] });

Packer.toBuffer(doc)
  .then(buf => {
    const dest = path.join(__dirname, '..', 'CV_Victor_Lopez_GSE.docx');
    fs.writeFileSync(dest, buf);
    console.log('CV GSE generado \u2192 ' + dest);
  })
  .catch(err => console.error(err));
