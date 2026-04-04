import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      role: "B.Tech Computer Science",
      company: "COEP Technological University",
      period: "2024 - Present",
      description:
        "Honing my skills in software development, algorithms, and data structures. Engaged in various projects and hackathons that involve full-stack development and machine learning applications.",
    },

    {
      role: "Higher Secondary Education",
      company: "Hem Sheela Model School",
      period: "2022 - 2024",
      description:
        "Completed my higher secondary education with a focus on science and mathematics. Actively participated in coding clubs which sparked my passion for software development.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-surface-container-low/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface">
            Experience
          </h2>
          <p className="text-lg text-on-surface-variant">
            A chronological journey of my professional career.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-outline-variant/20 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 shadow-[0_0_0_4px_rgba(var(--surface-container-high-rgb),1)]"></div>

              <div className="p-6 rounded-2xl bg-surface border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-sm font-medium text-on-surface-variant border border-outline-variant/10 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
