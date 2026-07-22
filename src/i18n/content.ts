import type { Locale } from ".";

const benefitColors = ["#4A90E2", "#FF6363", "#66FFB2", "#FFB366", "#A366FF", "#FF66B2"];
const benefitIcons = ["🌍", "💼", "🎓", "🧠", "✈️", "📚"];

const englishBenefitsText = {
  es: [
    ["Oportunidades globales", "Accede a empleos internacionales, programas de intercambio y oportunidades de negocio en cualquier parte del mundo.", "El 85% de las empresas multinacionales requieren inglés"],
    ["Crecimiento profesional", "Aumenta tu salario hasta un 30% y accede a posiciones de liderazgo que requieren comunicación en inglés.", "Un 67% más de probabilidades de ascenso"],
    ["Educación superior", "Estudia en las mejores universidades del mundo y accede a programas académicos internacionales de élite.", "Las 100 mejores universidades ofrecen programas en inglés"],
    ["Desarrollo cognitivo", "Mejora tu memoria, concentración y capacidad para resolver problemas a través del aprendizaje del inglés.", "Puede retrasar el deterioro cognitivo entre 4 y 5 años"],
    ["Viajes sin barreras", "Comunícate con confianza en cualquier destino y disfruta experiencias de viaje más auténticas y enriquecedoras.", "Es idioma oficial en 67 países"],
    ["Acceso al conocimiento", "Disfruta contenido original en inglés: libros, pódcast, cursos en línea y documentación técnica sin traducciones.", "El 60% del contenido web está en inglés"],
  ],
  en: [
    ["Global Opportunities", "Pursue international careers, exchange programs, and business opportunities anywhere in the world.", "85% of multinational companies require English proficiency"],
    ["Career Growth", "Increase your earning potential by up to 30% and qualify for leadership roles that require English communication skills.", "67% greater likelihood of promotion"],
    ["Higher Education", "Study at leading universities around the world and access prestigious international academic programs.", "The world's top 100 universities offer programs in English"],
    ["Cognitive Development", "Strengthen your memory, concentration, and problem-solving skills by learning English.", "May delay cognitive decline by four to five years"],
    ["Travel Without Barriers", "Communicate confidently wherever you go and enjoy richer, more authentic travel experiences.", "English is an official language in 67 countries"],
    ["Access to Knowledge", "Enjoy original English-language books, podcasts, online courses, and technical documentation without relying on translations.", "60% of online content is in English"],
  ],
} as const;

export const getEnglishBenefits = (locale: Locale) => englishBenefitsText[locale].map((item, index) => ({
  icon: benefitIcons[index], title: item[0], description: item[1], stats: item[2], color: benefitColors[index],
}));

const levelMeta = [
  ["A1", "#66FFB2", "🌱"], ["A2", "#66B2FF", "🚀"], ["B1", "#FFB366", "💪"],
  ["B2", "#FF6363", "🎯"], ["C1", "#A366FF", "👑"], ["C2", "#FF66B2", "🏆"],
] as const;

const englishLevelsText = {
  es: [
    ["Principiante", "Perfecto para comenzar desde cero. Aprende vocabulario básico, frases esenciales y fundamentos de gramática.", "3-4 meses", ["Saludos y presentaciones", "Números y fechas", "Familia y trabajo", "Compras básicas"]],
    ["Elemental", "Desarrolla confianza en conversaciones cotidianas. Amplía tu vocabulario y mejora tu comprensión auditiva.", "4-5 meses", ["Descripciones simples", "Experiencias pasadas", "Planes futuros", "Opiniones básicas"]],
    ["Intermedio", "Comunícate con fluidez en situaciones familiares. Mantén conversaciones más complejas y naturales.", "5-6 meses", ["Debates y discusiones", "Textos complejos", "Trabajo y estudios", "Viajes y cultura"]],
    ["Intermedio alto", "Domina conversaciones profesionales y académicas. Comprende textos técnicos y participa en debates.", "6-7 meses", ["Presentaciones formales", "Negociaciones", "Literatura y medios", "Expresión de emociones"]],
    ["Avanzado", "Expresa ideas complejas con precisión. Comprende matices culturales y referencias implícitas.", "7-8 meses", ["Comunicación sofisticada", "Análisis crítico", "Liderazgo en inglés", "Escritura profesional"]],
    ["Experto", "Alcanza un dominio similar al nativo. Comprende todo tipo de textos y exprésate con naturalidad en cualquier contexto.", "8+ meses", ["Fluidez similar a la nativa", "Sutilezas lingüísticas", "Excelencia académica", "Maestría comunicativa"]],
  ],
  en: [
    ["Beginner", "Ideal for starting from scratch. Learn basic vocabulary, essential phrases, and foundational grammar.", "3–4 months", ["Greetings and introductions", "Numbers and dates", "Family and work", "Basic shopping"]],
    ["Elementary", "Build confidence in everyday conversations. Expand your vocabulary and improve your listening comprehension.", "4–5 months", ["Simple descriptions", "Past experiences", "Future plans", "Basic opinions"]],
    ["Intermediate", "Communicate confidently in familiar situations. Handle more complex, natural conversations.", "5–6 months", ["Debates and discussions", "Complex texts", "Work and studies", "Travel and culture"]],
    ["Upper Intermediate", "Master professional and academic conversations. Understand technical texts and contribute to discussions.", "6–7 months", ["Formal presentations", "Negotiations", "Literature and media", "Expressing emotions"]],
    ["Advanced", "Express complex ideas precisely. Understand cultural nuances and implied meaning.", "7–8 months", ["Sophisticated communication", "Critical analysis", "Leadership in English", "Professional writing"]],
    ["Proficient", "Achieve near-native command of English. Understand any type of text and express yourself naturally in every setting.", "8+ months", ["Near-native fluency", "Linguistic subtleties", "Academic excellence", "Communication mastery"]],
  ],
} as const;

export const getEnglishLevels = (locale: Locale) => englishLevelsText[locale].map((item, index) => ({
  level: levelMeta[index][0], color: levelMeta[index][1], icon: levelMeta[index][2],
  name: item[0], description: item[1], duration: item[2], skills: item[3],
}));
