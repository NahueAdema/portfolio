import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  ExternalLink,
  Github,
  Code,
  Server,
  Sparkles,
} from "lucide-react";
import WebCritic from "../assets/webcritic.png";
import BolivarYa from "../assets/bolivarya.png";
import AiCvClassifier from "../assets/aicvclassifier.png";
import DealOrNoDeal from "../assets/dealornodeal.png";
import Ztocky from "../assets/ztocky.png";
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  role: string;
  highlight: string;
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Ztocky",
    description:
      "Aplicacion full stack para ayudar a comercios a controlar stock, anticipar faltantes y tomar mejores decisiones de compra con alertas, proyecciones y sugerencias asistidas por IA.",
    image: Ztocky,
    tags: [
      "nextjs",
      "react",
      "prisma",
      "postgresql",
      "tailwind",
      "fullstack",
      "zustand",
      "stock",
      "roles",
      "ai",
      "groq",
      "ui",
    ],
    category: "fullstack",
    role: "Full Stack",
    highlight: "Gestion de stock, roles, predicciones y reordenes inteligentes.",
    githubUrl: "https://github.com/NahueAdema/Ztocky",
    demoUrl: "https://ztocky.vercel.app/",
  },
  {
    id: "2",
    title: "Web critic AI",
    description:
      "Herramienta que analiza sitios web y genera feedback de UI mediante IA, pensada para detectar oportunidades de mejora visual, claridad y experiencia de usuario.",
    image: WebCritic,
    tags: ["nextjs", "web", "ui", "critic", "ai", "groq"],
    category: "frontend",
    role: "Frontend + IA",
    highlight: "Criticas accionables sobre interfaces usando modelos de Groq.",
    githubUrl: "https://github.com/NahueAdema/AI-Website-Critic",
    demoUrl: "https://ai-website-critic.netlify.app/",
  },
  {
    id: "3",
    title: "BolivarYa",
    description:
      "Plataforma grupal de delivery que conecta usuarios con restaurantes, supermercados, farmacias y tiendas, con flujo de pedidos, distintos tipos de comercios y experiencia pensada para uso cotidiano.",
    image: BolivarYa,
    tags: ["laravel", "react", "web", "ui", "delivery", "ecommerce", "roles"],
    category: "fullstack",
    role: "Proyecto grupal",
    highlight: "Marketplace de delivery con roles, comercios y pedidos.",
    githubUrl: "https://github.com/fran5570/Bolivar-Ya",
  },
  {
    id: "4",
    title: "Ai CV Classifier API",
    description:
      "Backend para clasificar y analizar curriculums con inteligencia artificial, orientado a filtrar perfiles tecnicos y ayudar a reclutadores a identificar candidatos con mayor ajuste.",
    image: AiCvClassifier,
    tags: [
      "python",
      "tensorFlow",
      "fastAPI ",
      "backend",
      "ai",
      "analizar",
      "cvs",
    ],
    category: "backend",
    role: "Backend + IA",
    highlight: "Analisis de CVs, clasificacion y API para consumo externo.",
    githubUrl: "https://github.com/NahueAdema/AiCvClassifier",
  },
  {
    id: "5",
    title: "Ai CV Classifier UI",
    description:
      "Interfaz para utilizar el clasificador de CVs de forma simple: cargar informacion, revisar resultados y conectar una experiencia visual con el motor de analisis del backend.",
    image: AiCvClassifier,
    tags: [
      "python",
      "tensorFlow",
      "fastAPI ",
      "backend",
      "ai",
      "analizar",
      "cvs",
    ],
    category: "frontend",
    role: "Frontend",
    highlight: "Pantalla de uso para consumir y visualizar resultados del modelo.",
    githubUrl: "https://github.com/NahueAdema/AiCvClassifierFE",
  },
  {
    id: "6",
    title: "Deal or No Deal",
    description:
      "Aplicacion web inspirada en el juego Deal or No Deal, con logica de partidas, seleccion de cajas, premios ocultos y negociacion con el banquero.",
    image: DealOrNoDeal,
    tags: [
      "python",
      "flask",
      "ui",
      "juego",
      "deal or no deal",
      "backend",
      "frontend",
    ],
    category: "fullstack",
    role: "Full Stack",
    highlight: "Juego web con reglas, estados de partida e interaccion dinamica.",
    githubUrl: "https://github.com/NahueAdema/Deal-Or-No-Deal",
    demoUrl: "https://deal-or-no-deal2.onrender.com/",
  },
];

type Category = {
  id: string;
  name: string;
  icon?: React.ElementType;
};

const categories: Category[] = [
  { id: "all", name: "Todos" },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Server },
  { id: "fullstack", name: "Full Stack", icon: Database },
];

const featuredProject = projects[0];
const regularProjects = projects.slice(1);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [expandedTagsIds, setExpandedTagsIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleExpandTags = (id: string) => {
    setExpandedTagsIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const tagColors: Record<string, string> = {
    react: "bg-sky-500/20 text-sky-300",
    nextjs: "bg-white/10 text-white",
    laravel: "bg-red-500/20 text-red-300",
    python: "bg-yellow-500/20 text-yellow-300",
    flask: "bg-gray-600/30 text-gray-200",
    fastapi: "bg-emerald-500/20 text-emerald-300",
    tensorflow: "bg-orange-500/20 text-orange-300",
    prisma: "bg-indigo-500/20 text-indigo-300",
    postgresql: "bg-blue-500/20 text-blue-300",
    tailwind: "bg-cyan-500/20 text-cyan-300",
    zustand: "bg-amber-500/20 text-amber-300",
    groq: "bg-green-500/20 text-green-300",
    ai: "bg-violet-500/20 text-violet-300",
  };

  const getTagColor = (tag: string) => {
    const key = tag.toLowerCase().replace(/\s+/g, "");
    return tagColors[key] || "bg-gray-700/50 text-gray-300";
  };

  const filteredProjects =
    activeCategory === "all"
      ? regularProjects
      : regularProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-black to-dark"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
            Trabajo reciente
          </h2>

          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Productos, herramientas y experimentos donde practico frontend,
            backend, datos e IA aplicada con una idea clara: que cada proyecto
            resuelva algo concreto.
          </p>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-16 overflow-hidden rounded-2xl border border-primary-400/20 bg-gray-900/60 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative lg:col-span-7 min-h-[280px]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full min-h-[280px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Proyecto destacado
                </div>
              </div>

              <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <span className="mb-4 w-fit rounded-full bg-primary-900/40 px-3 py-1 text-xs font-medium text-primary-300">
                  {featuredProject.role}
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {featuredProject.description}
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  {featuredProject.highlight}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="rounded-xl bg-black/30 p-4">
                    <p className="text-xs text-gray-500 mb-1">Problema</p>
                    <p className="text-sm text-gray-200">
                      Stock y compras sin anticipacion.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/30 p-4">
                    <p className="text-xs text-gray-500 mb-1">Solucion</p>
                    <p className="text-sm text-gray-200">
                      Alertas, roles y sugerencias con IA.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/30 p-4">
                    <p className="text-xs text-gray-500 mb-1">Stack</p>
                    <p className="text-sm text-gray-200">
                      Next.js, Prisma, PostgreSQL.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-primary-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                  >
                    Ver demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Ver codigo
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-800/50 p-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-primary-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center space-x-1">
                      {Icon && <Icon className="w-4 h-4 mr-1" />}
                      <span>{category.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/600x340.png?text=${project.title.replace(
                          /\s+/g,
                          "+",
                        )}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {(expandedTagsIds.has(project.id) ? project.tags : project.tags.slice(0, 3)).map((tag, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 rounded-full text-xs ${getTagColor(tag)}`}
                            >
                              {tag.trim()}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <button
                              onClick={() => toggleExpandTags(project.id)}
                              className="px-2 py-1 bg-gray-700/60 hover:bg-gray-600/60 rounded-full text-xs text-gray-300 transition-colors"
                            >
                              {expandedTagsIds.has(project.id) ? "Ver menos" : `+${project.tags.length - 3}`}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-900/40 text-primary-300 rounded-full text-xs font-medium">
                        {project.role}
                      </span>
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                    <p className={`text-gray-400 text-sm mb-2 ${expandedIds.has(project.id) ? "" : "line-clamp-3"}`}>
                      {project.description}
                    </p>
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-primary-400 text-xs hover:underline mb-6 block"
                      >
                        {expandedIds.has(project.id) ? "Leer menos" : "Leer más"}
                      </button>
                    )}
                    <p className="text-gray-300 text-sm mb-6">
                      {project.highlight}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-sm"
                        >
                          <Github className="w-4 h-4 text-white" />
                          Codigo
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/50 hover:bg-primary-800 rounded-full transition-colors text-sm text-primary-100"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No hay proyectos en esta categoría aún.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
