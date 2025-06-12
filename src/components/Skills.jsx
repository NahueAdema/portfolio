import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/icons/HTML.png", category: "Frontend" },
  { name: "CSS", icon: "/icons/CSS.png", category: "Frontend" },
  { name: "JavaScript", icon: "/icons/Js.webp", category: "Lenguaje" },
  { name: "TypeScript", icon: "/icons/Ts.png", category: "Lenguaje" },
  { name: "Dart", icon: "/icons/dart.png", category: "Lenguaje" },
  { name: "React", icon: "/icons/React.webp", category: "Frontend" },
  { name: "Next.js", icon: "/icons/NextJs.png", category: "Frontend" },
  { name: "Astro", icon: "/icons/astro.png", category: "Frontend" },
  { name: "Tailwind", icon: "/icons/Tailwind.png", category: "Frontend" },
  { name: "Python", icon: "/icons/Py.webp", category: "Lenguaje" },
  { name: "NestJS", icon: "/icons/NestJs.png", category: "Backend" },
  { name: "Flask", icon: "/icons/Flask.webp", category: "Backend" },
  { name: "FastAPI", icon: "/icons/FastApi.png", category: "Backend" },
  { name: "Express", icon: "/icons/express.webp", category: "Backend" },
  { name: "Flutter", icon: "/icons/flutter.png", category: "Mobile" },
  { name: "React-Native", icon: "/icons/React.webp", category: "Mobile" },
  { name: "Expo", icon: "/icons/expo.png", category: "Mobile" },
  { name: "PostgreSQL", icon: "/icons/PostgreSQL.png", category: "Database" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg", category: "Database" },
  { name: "Docker", icon: "/icons/Docker.webp", category: "DevOps" },
  { name: "AWS", icon: "/icons/aws.png", category: "DevOps" },
];

const categories = [
  "All",
  "Lenguaje",
  "Frontend",
  "Backend",
  "Database",
  "Mobile",
  "DevOps",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Verificamos que estamos en el navegador
    setIsBrowser(true);
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">
            Mis Habilidades
          </h2>

          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gray-400 text-gray-800 dark:text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-24 h-24 mb-4 relative bg-white rounded-full shadow-lg p-4 transition-all duration-300 hover:shadow-xl">
                  {isBrowser && (
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={`${skill.name} icon`}
                      className="w-full h-full object-contain p-2"
                    />
                  )}
                </div>
                <p className="text-center font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
