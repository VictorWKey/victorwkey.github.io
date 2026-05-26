const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  LevelFormat,
  TabStopType,
} = require('docx');
const fs = require('fs');
const path = require('path');

const MARGIN = 720;
const PAGE_W = 12240;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const FONT = 'Arial';
const S = { name: 30, title: 22, contact: 18, section: 20, body: 21 };

const numbering = {
  config: [{
    reference: 'bullets',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '\u2022',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 200 } } },
    }],
  }],
};

function section(children) {
  return {
    properties: {
      page: {
        size: { width: PAGE_W, height: 15840 },
        margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
      },
    },
    children,
  };
}

const text = (content, size, opts = {}) => new TextRun({
  text: content,
  size,
  font: FONT,
  ...opts,
});

const center = (content, size, opts = {}) => {
  const { after = 24, ...runOpts } = opts;

  return new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [text(content, size, runOpts)],
  spacing: { before: 0, after },
});
};

const sectionHeader = (content) => new Paragraph({
  children: [text(content, S.section, { bold: true })],
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 1 } },
  spacing: { before: 100, after: 44 },
});

const paragraph = (content) => new Paragraph({
  children: [text(content, S.body)],
  spacing: { before: 36, after: 36 },
});

const skill = (label, value) => new Paragraph({
  children: [text(`${label}: `, S.body, { bold: true }), text(value, S.body)],
  spacing: { before: 14, after: 14 },
});

const bullet = (content) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  children: [text(content, S.body)],
  spacing: { before: 14, after: 14 },
});

const entryHeader = (left, right) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
  children: [text(left, S.body, { bold: true }), text(`\t${right}`, S.body)],
  spacing: { before: 64, after: 14 },
});

const entryTitle = (content) => new Paragraph({
  children: [text(content, S.body, { italics: true })],
  spacing: { before: 0, after: 14 },
});

function quarksoftCv() {
  return [
    center('Victor Angel Lopez Romero', S.name, { bold: true, after: 10 }),
    center('Ingeniero de Software IA', S.title),
    center('victorwkey@gmail.com | +52 462 257 4618 | www.victorwkey.com', S.contact),
    center('linkedin.com/in/victorlopezwk | github.com/VictorWKey', S.contact),
    center('Irapuato, Guanajuato, México | Disponible para entrevistas presenciales en León, Gto.', S.contact, { after: 80 }),

    sectionHeader('RESUMEN PROFESIONAL'),
    paragraph('Ingeniero de Software IA con experiencia productiva en agentes IA, orquestación de LLMs, NLP y automatización de procesos para aplicaciones SaaS. En Vortice Coaching diseñé un agente conversacional integrado con servicios clave de plataforma, implementé 9 workflows LLM y construí módulos de evaluación/optimización que redujeron 40-60% el consumo de tokens y costos de cómputo. Perfil hands-on con base en Ingeniería de Datos e Inteligencia Artificial, APIs REST, arquitectura escalable, comunicación técnica y trabajo ágil.'),

    sectionHeader('HABILIDADES'),
    skill('LLMs e IA', 'LangChain, RAG, LLM Workflows, Prompt Engineering, HuggingFace, Ollama, BERT Fine-tuning, evaluación de modelos y optimización de inferencia'),
    skill('Backend y arquitectura', 'Python, FastAPI, APIs REST, servicios modulares, fundamentos de microservicios, PostgreSQL, bases de datos vectoriales y Node.js'),
    skill('Ingeniería de software', 'TypeScript, JavaScript, integración de APIs, diseño de servicios, automatización de procesos y tooling de producto'),
    skill('Prácticas', 'Git, Linux, documentación técnica, Scrum/entornos ágiles, salidas estructuradas y trazabilidad de workflows IA'),

    sectionHeader('EXPERIENCIA LABORAL'),
    entryHeader('Vortice Coaching', 'Oct 2025 - Presente'),
    entryTitle('Ingeniero de Software IA'),
    bullet('Diseñé y desplegué un agente de IA conversacional que interactúa con servicios clave de la plataforma, permitiendo operarla en lenguaje natural mediante una arquitectura dinámica y extensible.'),
    bullet('Construí 9 workflows LLM para automatizar extracción de información de múltiples fuentes, con salidas estructuradas y consistentes para visualización, análisis y toma de decisiones.'),
    bullet('Implementé 8 servicios de plataforma y reestructuré la arquitectura del proyecto para mejorar escalabilidad, mantenibilidad y experiencia de desarrollo.'),
    bullet('Comuniqué decisiones de diseño de sistemas IA al liderazgo no técnico para alinear prioridades, alcance y estrategia de plataforma.'),
    bullet('Desarrollé módulos de análisis, evaluación y optimización de inferencia, logrando 40-60% menos consumo de tokens/costos y 40% de mejora en rendimiento general.'),

    sectionHeader('PROYECTOS RELEVANTES'),
    entryHeader('TourlyAI - Plataforma NLP Open-Source | github.com/TourlyAI | tourlyai.site', 'Sep 2025 - Mar 2026'),
    entryTitle('Desarrollador Principal e Investigador IA'),
    bullet('Ingeniería de pipeline NLP de 9 fases con análisis de sentimientos y topic modeling; fine-tuning de 2 modelos BERT para clasificación multi-etiqueta en 12 categorías (80% F1 ponderado) y subjetividad (77% F1).'),
    bullet('Arquitecté una aplicación offline y privada con Python y Ollama para inferencia local de LLMs, APIs REST propias y cero dependencias externas en tiempo de ejecución.'),

    sectionHeader('EDUCACIÓN'),
    entryHeader('Universidad de Guanajuato', 'Ene 2023 - Dic 2026 (en curso)'),
    entryTitle('Ing. en Datos e Inteligencia Artificial - División de Ingenierías, Campus Irapuato-Salamanca'),

    sectionHeader('CERTIFICACIONES'),
    entryHeader('Platzi', 'Mar 2023 - Jun 2025'),
    entryTitle('Full-Stack Developer, Git/GitHub y Deep Learning: Natural Language Processing (NLP)'),

    sectionHeader('IDIOMAS'),
    paragraph('Español: Nativo | Inglés: B2 (Intermedio-Alto)'),
  ];
}

const doc = new Document({ numbering, sections: [section(quarksoftCv())] });
const destination = path.join(__dirname, 'CV_Victor_Lopez_Quarksoft.docx');

Packer.toBuffer(doc)
  .then((buffer) => {
    fs.writeFileSync(destination, buffer);
    console.log(`CV Quarksoft generado -> ${destination}`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });