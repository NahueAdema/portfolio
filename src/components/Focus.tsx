import { motion } from "framer-motion";
import { BrainCircuit, Code2, DatabaseZap, Rocket } from "lucide-react";

const focusItems = [
  {
    icon: Code2,
    title: "Producto completo",
    text: "Me enfoco en llevar una idea desde la interfaz hasta el backend, con pantallas claras, flujos simples y funcionalidades que se puedan usar de verdad.",
  },
  {
    icon: BrainCircuit,
    title: "IA aplicada",
    text: "Estoy explorando herramientas de IA para clasificar informacion, analizar contenido, asistir decisiones y sumar automatizacion a productos web.",
  },
  {
    icon: DatabaseZap,
    title: "Datos y arquitectura",
    text: "Busco que las apps tengan una base solida: modelos bien pensados, APIs consistentes, consultas utiles y una estructura facil de mantener.",
  },
  {
    icon: Rocket,
    title: "Crecimiento actual",
    text: "Actualmente estoy profundizando Next.js, Python, FastAPI, PostgreSQL y despliegues modernos para crear proyectos mas robustos y profesionales.",
  },
];

const Focus = () => {
  return (
    <section id="focus" className="section-padding bg-gradient-to-b from-black to-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
            En que estoy enfocado
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Mi objetivo ahora es construir proyectos mas utiles, mejor
            presentados y con decisiones tecnicas que muestren criterio, no solo
            una lista de tecnologias.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-gray-900/50 border border-white/10 rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-900/40 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Focus;
