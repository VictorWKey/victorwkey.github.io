from pathlib import Path

from fpdf import FPDF, XPos, YPos


OUTPUT = Path(__file__).with_name("CV_Victor_Lopez_Nadro.pdf")


def safe_text(value):
    return value.encode("latin-1", "replace").decode("latin-1")


class ResumePdf(FPDF):
    def __init__(self):
        super().__init__(orientation="P", unit="pt", format="Letter")
        self.set_margins(34, 28, 34)
        self.set_auto_page_break(auto=True, margin=28)
        self.add_page()

    def centered(self, value, size=10, style="", after=4):
        self.set_font("Helvetica", style, size)
        self.cell(0, size + 3, safe_text(value), new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
        self.ln(after)

    def section_header(self, value):
        self.ln(3)
        self.set_font("Helvetica", "B", 10)
        self.cell(0, 12.6, safe_text(value), border="B", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def paragraph(self, value, size=9, height=10.8):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "", size)
        self.multi_cell(0, height, safe_text(value), new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def skill(self, label, value):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B", 8.8)
        self.write(10.2, safe_text(f"{label}: "))
        self.set_font("Helvetica", "", 8.8)
        self.multi_cell(0, 10.2, safe_text(value), new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def entry_header(self, left, right):
        self.ln(1)
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B", 9.1)
        self.cell(390, 10.6, safe_text(left), new_x=XPos.RIGHT, new_y=YPos.TOP)
        self.set_font("Helvetica", "", 9.1)
        self.cell(0, 10.6, safe_text(right), new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="R")

    def entry_title(self, value):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "I", 8.9)
        self.multi_cell(0, 10.2, safe_text(value), new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def bullet(self, value):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "", 8.8)
        current_x = self.get_x()
        current_y = self.get_y()
        self.cell(8, 10.2, "-")
        self.set_xy(current_x + 10, current_y)
        self.multi_cell(0, 10.2, safe_text(value), new_x=XPos.LMARGIN, new_y=YPos.NEXT)


def build_pdf():
    pdf = ResumePdf()

    pdf.centered("Victor Angel Lopez Romero", 15, "B", 1)
    pdf.centered("Especialista en IA | AI Engineer", 11, "", 1)
    pdf.centered("victorwkey@gmail.com | +52 462 257 4618 | Portafolio: www.victorwkey.com", 8.8, "", 0)
    pdf.centered("GitHub: github.com/VictorWKey | LinkedIn: linkedin.com/in/victorlopezwk | Irapuato, Guanajuato", 8.8, "", 4)

    pdf.section_header("RESUMEN PROFESIONAL")
    pdf.paragraph("Ingeniero de Software IA enfocado en soluciones funcionales de inteligencia artificial para productos y procesos de negocio: agentes conversacionales, workflows LLM, RAG, NLP, automatizaci\u00f3n e integraci\u00f3n con APIs. En V\u00f3rtice Coaching construyo soluciones de IA generativa en una plataforma SaaS con Docker y servicios cloud, logrando reducciones de 40-60% en consumo de tokens y costos. Desarrollador de TourlyAI, plataforma de IA/NLP vinculada a la Universidad de Guanajuato con pipeline de 9 fases, modelos BERT y anal\u00edtica avanzada de texto.")

    pdf.section_header("HABILIDADES T\u00c9CNICAS")
    pdf.skill("IA generativa", "LangChain, LLM Workflows, agentes IA, RAG, embeddings, Prompt Engineering, Ollama, OpenAI, Hugging Face, evaluaci\u00f3n y optimizaci\u00f3n de respuestas")
    pdf.skill("ML / NLP / Datos", "Python, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, BERT fine-tuning, NLP, an\u00e1lisis de sentimientos, topic modeling, evaluaci\u00f3n de modelos")
    pdf.skill("Ingenier\u00eda y producci\u00f3n", "APIs REST, Docker, Git, fundamentos AWS Cloud Practitioner (S3, EC2, Lambda, IAM), PostgreSQL, bases de datos vectoriales, arquitectura, debugging y optimizaci\u00f3n")
    pdf.skill("Trabajo", "proactividad, resoluci\u00f3n de problemas, aprendizaje autodidacta, comunicaci\u00f3n t\u00e9cnica, orientaci\u00f3n a impacto, calidad y mejora continua")

    pdf.section_header("EXPERIENCIA LABORAL")
    pdf.entry_header("V\u00f3rtice Coaching", "Oct 2025 - Presente")
    pdf.entry_title("Ingeniero de Software IA")
    pdf.bullet("He dise\u00f1ado e implementado un agente conversacional con herramientas para consultar datos estructurados mediante SQL, ejecutar acciones en servicios clave de la plataforma y operar funcionalidades mediante lenguaje natural; incorpor\u00e9 RAG documental para que el 100% de esas respuestas use contexto empresarial recuperado, reduciendo alucinaciones.")
    pdf.bullet("He construido 9 workflows LLM para automatizar extracci\u00f3n de informaci\u00f3n desde m\u00faltiples fuentes, generando salidas estructuradas y consistentes para visualizaci\u00f3n, an\u00e1lisis y toma de decisiones.")
    pdf.bullet("He integrado LLMs y componentes de IA con APIs, bases de datos y servicios de producto, usando herramientas como PyTorch y Hugging Face cuando el flujo lo requiere; trabajo d\u00eda a d\u00eda con Docker y Git Flow.")
    pdf.bullet("He desarrollado m\u00f3dulos de an\u00e1lisis, evaluaci\u00f3n y optimizaci\u00f3n de inferencia, reduciendo 40-60% el consumo de tokens/costos y mejorando 40% el rendimiento general del sistema.")

    pdf.section_header("PROYECTOS")
    pdf.entry_header("TourlyAI - IA/NLP, Universidad de Guanajuato", "Sep 2025 - Mar 2026")
    pdf.entry_title("Desarrollador Principal e Investigador IA | github.com/TourlyAI | tourlyai.site")
    pdf.bullet("Dise\u00f1\u00e9 un pipeline NLP de 9 fases para rese\u00f1as tur\u00edsticas: preprocesamiento, sentimiento, subjetividad, clasificaci\u00f3n multi-etiqueta, BERTopic, resumen con LLM e insights estrat\u00e9gicos.")
    pdf.bullet("Entren\u00e9 y evalu\u00e9 2 modelos BERT con el ecosistema PyTorch/TensorFlow/Hugging Face: clasificaci\u00f3n en 12 categor\u00edas (80% F1 ponderado) y detecci\u00f3n de subjetividad (77% F1).")
    pdf.bullet("Constru\u00ed una aplicaci\u00f3n desktop local y privada con Electron, React y Python, dashboards interactivos, reportes PDF e integraci\u00f3n opcional con LLM v\u00eda Ollama u OpenAI.")

    pdf.section_header("EDUCACI\u00d3N Y FORMACI\u00d3N")
    pdf.entry_header("Universidad de Guanajuato", "Ago 2023 - Dic 2026 (en curso)")
    pdf.entry_title("Ing. en Datos e Inteligencia Artificial - Divisi\u00f3n de Ingenier\u00edas, Campus Irapuato-Salamanca")
    pdf.entry_header("Platzi", "Mar 2023 - Jun 2025")
    pdf.entry_title("Full-Stack Developer; Deep Learning: Natural Language Processing (NLP); preparaci\u00f3n AWS Cloud Practitioner")

    pdf.section_header("IDIOMAS")
    pdf.paragraph("Espa\u00f1ol: Nativo | Ingl\u00e9s: B1 (Intermedio)", size=9, height=10)

    if pdf.page_no() != 1:
        raise RuntimeError(f"El PDF quedo en {pdf.page_no()} paginas; hay que compactar el CV.")

    pdf.output(str(OUTPUT))
    print(f"CV Nadro PDF generado -> {OUTPUT}")


if __name__ == "__main__":
    build_pdf()