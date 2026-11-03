import Python from '../icons/Python.jsx';
import Pytorch from '../icons/Pytorch.jsx';
import HuggingFace from '../icons/HuggingFace.jsx';
import LangChain from '../icons/LangChain.jsx';
import Electron from '../icons/Electron.jsx';
import ReactLogo from '../icons/ReactLogo.jsx';
import TypeScript from '../icons/TypeScript.jsx';
import Tailwind from '../icons/Tailwind.jsx';
import NextJS from '../icons/NextJS.jsx';
import JavaScript from '../icons/JavaScript.jsx';
import NodeJS from '../icons/NodeJS.jsx';
import PostgreSQL from '../icons/PostgreSQL.jsx';
import Git from '../icons/Git.jsx';
import Pandas from '../icons/Pandas.jsx';
import NumPy from '../icons/NumPy.jsx';
import SkLearn from '../icons/SkLearn.jsx';
import SkillConcept from '../icons/SkillConcept.jsx';
import { skillBrandPaths } from '../icons/skillBrandPaths.js';

const existingLogos = {
  Python, PyTorch: Pytorch, 'Hugging Face': HuggingFace, LangChain,
  Electron, React: ReactLogo, TypeScript, 'Tailwind CSS': Tailwind,
  'Next.js': NextJS, JavaScript, 'Node.js': NodeJS, PostgreSQL, Git,
  pandas: Pandas, NumPy, 'scikit-learn': SkLearn,
};

const additionalLogos = {
  Docker: ['docker', 'text-sky-600 dark:text-sky-300'],
  Express: ['express', ''],
  LangGraph: ['langgraph', ''],
  MCP: ['modelcontextprotocol', ''],
  Ollama: ['ollama', ''],
  Qdrant: ['qdrant', 'text-rose-600 dark:text-rose-300'],
  Redis: ['redis', 'text-red-600 dark:text-red-300'],
};

// Concepts use illustrative symbols rather than invented brand marks.
const conceptIcons = {
  RAG: 'rag',
  'AI agents': 'agent', 'Agentes de IA': 'agent', OpenAI: 'agent',
  'Tool calling': 'tools', 'LLM workflows': 'workflow',
  Embeddings: 'embeddings',
  'Vector databases': 'database', 'Bases de datos vectoriales': 'database', SQL: 'database',
  'Structured outputs': 'structured', 'Salidas estructuradas': 'structured',
  'BERT fine-tuning': 'tune', 'Fine-tuning de BERT': 'tune',
  'Model evaluation': 'evaluate', 'Evaluación de modelos': 'evaluate',
  'Agent evaluation': 'evaluate', 'Evaluación de agentes': 'evaluate',
  BERTopic: 'topics',
  'REST APIs': 'api', 'APIs REST': 'api',
  'Asynchronous processing': 'async', 'Procesamiento asíncrono': 'async', BullMQ: 'async',
  'Access control': 'access', 'Control de acceso': 'access',
  'Context engineering': 'context', 'Prompt engineering': 'prompt',
  'Multi-agent patterns (agents-as-tools, swarm)': 'multiAgent',
  'Patrones multiagente (agents-as-tools, swarm)': 'multiAgent',
  A2A: 'protocol',
};

export default function SkillIcon({ label }) {
  const Logo = existingLogos[label];
  const additional = additionalLogos[label];
  const monochromeInDark = label === 'pandas' || label === 'scikit-learn';

  return (
    <span aria-hidden="true" className={`inline-flex h-4 w-4 shrink-0 items-center justify-center ${monochromeInDark ? 'dark:brightness-0 dark:invert' : ''} ${additional?.[1] || ''} ${!Logo && !additional ? 'text-primary dark:text-night-accent' : ''}`}>
      {Logo ? <Logo /> : additional ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" focusable="false">
          {skillBrandPaths[additional[0]].map((path, index) => <path key={index} d={path} />)}
        </svg>
      ) : <SkillConcept kind={conceptIcons[label]} />}
    </span>
  );
}
