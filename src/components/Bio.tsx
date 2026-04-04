import { motion } from "motion/react";
import { Code2, Brain, Database } from "lucide-react";

export function Bio() {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Frontend Architecture",
      desc: "Building responsive, accessible, and performant user interfaces using React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      title: "Backend Systems",
      desc: "Designing APIs and microservices with Node.js, Express, and scalable database architectures.",
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Integration",
      desc: "Implementing machine learning models and LLMs to create intelligent, context-aware applications.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface">
            About Me
          </h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            I'm a passionate developer who loves bridging the gap between
            complex backend logic and intuitive frontend experiences. With a
            strong foundation in modern web technologies, I strive to build
            applications that are not just functional, but delightful to use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md group"
            >
              <div className="mb-6 p-4 rounded-xl bg-surface-container-high w-fit group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">
                {card.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
