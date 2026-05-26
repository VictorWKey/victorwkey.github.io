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

const MARGIN = 600;
const PAGE_W = 12240;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const FONT = 'Arial';
const S = { name: 29, title: 22, contact: 18, section: 20, body: 21 };

const numbering = {
  config: [{
    reference: 'bullets',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '\u2022',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 300, hanging: 180 } } },
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
  const { after = 18, ...runOpts } = opts;

  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [text(content, size, runOpts)],
    spacing: { before: 0, after },
  });
};

const sectionHeader = (content) => new Paragraph({
  children: [text(content, S.section, { bold: true })],
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 1 } },
  spacing: { before: 58, after: 24 },
});

const paragraph = (content) => new Paragraph({
  children: [text(content, S.body)],
  spacing: { before: 16, after: 16 },
});

const skill = (label, value) => new Paragraph({
  children: [text(`${label}: `, S.body, { bold: true }), text(value, S.body)],
  spacing: { before: 6, after: 6 },
});

const bullet = (content) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  children: [text(content, S.body)],
  spacing: { before: 6, after: 6 },
});

const entryHeader = (left, right) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
  children: [text(left, S.body, { bold: true }), text(`\t${right}`, S.body)],
  spacing: { before: 32, after: 6 },
});

const entryTitle = (content) => new Paragraph({
  children: [text(content, S.body, { italics: true })],
  spacing: { before: 0, after: 6 },
});

function nadroCv() {
  return [
    center('Victor Angel Lopez Romero', S.name, { bold: true, after: 8 }),
    center('Especialista en IA | AI Engineer', S.title),
    center('victorwkey@gmail.com | +52 462 257 4618 | Portafolio: www.victorwkey.com', S.contact),
    center('GitHub: github.com/VictorWKey | LinkedIn: linkedin.com/in/victorlopezwk | Irapuato, Guanajuato', S.contact, { after: 46 }),

    sectionHeader('RESUMEN PROFESIONAL'),
    paragraph('Ingeniero de Software IA enfocado en soluciones funcionales de inteligencia artificial para productos y procesos de negocio: agentes conversacionales, workflows LLM, RAG, NLP, automatizaci\u00f3n e integraci\u00f3n con APIs. En V\u00f3rtice Coaching construyo soluciones de IA generativa en una plataforma SaaS con Docker y servicios cloud, logrando reducciones de 40-60% en consumo de tokens y costos. Desarrollador de TourlyAI, plataforma de IA/NLP vinculada a la Universidad de Guanajuato con pipeline de 9 fases, modelos BERT y anal\u00edtica avanzada de texto.'),

    sectionHeader('HABILIDADES T\u00c9CNICAS'),
    skill('IA generativa', 'LangChain, LLM Workflows, agentes IA, RAG, embeddings, Prompt Engineering, Ollama, OpenAI, Hugging Face, evaluaci\u00f3n y optimizaci\u00f3n de respuestas'),
    skill('ML / NLP / Datos', 'Python, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, BERT fine-tuning, NLP, an\u00e1lisis de sentimientos, topic modeling, evaluaci\u00f3n de modelos'),
    skill('Ingenier\u00eda y producci\u00f3n', 'APIs REST, Docker, Git, fundamentos AWS Cloud Practitioner (S3, EC2, Lambda, IAM), PostgreSQL, bases de datos vectoriales, arquitectura, debugging y optimizaci\u00f3n'),
    skill('Trabajo', 'proactividad, resoluci\u00f3n de problemas, aprendizaje autodidacta, comunicaci\u00f3n t\u00e9cnica, orientaci\u00f3n a impacto, calidad y mejora continua'),

    sectionHeader('EXPERIENCIA LABORAL'),
    entryHeader('V\u00f3rtice Coaching', 'Oct 2025 - Presente'),
    entryTitle('Ingeniero de Software IA'),
    bullet('He dise\u00f1ado e implementado un agente conversacional con herramientas para consultar datos estructurados mediante SQL, ejecutar acciones en servicios clave de la plataforma y operar funcionalidades mediante lenguaje natural; incorpor\u00e9 RAG documental para que el 100% de esas respuestas use contexto empresarial recuperado, reduciendo alucinaciones.'),
    bullet('He construido 9 workflows LLM para automatizar extracci\u00f3n de informaci\u00f3n desde m\u00faltiples fuentes, generando salidas estructuradas y consistentes para visualizaci\u00f3n, an\u00e1lisis y toma de decisiones.'),
    bullet('He integrado LLMs y componentes de IA con APIs, bases de datos y servicios de producto, usando herramientas como PyTorch y Hugging Face cuando el flujo lo requiere; trabajo d\u00eda a d\u00eda con Docker y Git Flow.'),
    bullet('He desarrollado m\u00f3dulos de an\u00e1lisis, evaluaci\u00f3n y optimizaci\u00f3n de inferencia, reduciendo 40-60% el consumo de tokens/costos y mejorando 40% el rendimiento general del sistema.'),

    sectionHeader('PROYECTOS'),
    entryHeader('TourlyAI - IA/NLP, Universidad de Guanajuato | github.com/TourlyAI | tourlyai.site', 'Sep 2025 - Mar 2026'),
    entryTitle('Desarrollador Principal e Investigador IA'),
    bullet('Dise\u00f1\u00e9 un pipeline NLP de 9 fases para rese\u00f1as tur\u00edsticas: preprocesamiento, sentimiento, subjetividad, clasificaci\u00f3n multi-etiqueta, BERTopic, resumen con LLM e insights estrat\u00e9gicos.'),
    bullet('Entren\u00e9 y evalu\u00e9 2 modelos BERT con el ecosistema PyTorch/TensorFlow/Hugging Face: clasificaci\u00f3n en 12 categor\u00edas (80% F1 ponderado) y detecci\u00f3n de subjetividad (77% F1).'),
    bullet('Constru\u00ed una aplicaci\u00f3n desktop local y privada con Electron, React y Python, dashboards interactivos, reportes PDF e integraci\u00f3n opcional con LLM v\u00eda Ollama u OpenAI.'),

    sectionHeader('EDUCACI\u00d3N Y FORMACI\u00d3N'),
    entryHeader('Universidad de Guanajuato', 'Ago 2023 - Dic 2026 (en curso)'),
    entryTitle('Ing. en Datos e Inteligencia Artificial - Divisi\u00f3n de Ingenier\u00edas, Campus Irapuato-Salamanca'),
    entryHeader('Platzi', 'Mar 2023 - Jun 2025'),
    entryTitle('Full-Stack Developer; Deep Learning: Natural Language Processing (NLP); preparaci\u00f3n AWS Cloud Practitioner'),

    sectionHeader('IDIOMAS'),
    paragraph('Espa\u00f1ol: Nativo | Ingl\u00e9s: B1 (Intermedio)'),
  ];
}

const doc = new Document({ numbering, sections: [section(nadroCv())] });
const destination = path.join(__dirname, 'CV_Victor_Lopez_Nadro.docx');

Packer.toBuffer(doc)
  .then((buffer) => {
    fs.writeFileSync(destination, buffer);
    console.log(`CV Nadro generado -> ${destination}`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });