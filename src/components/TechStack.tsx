import { motion } from "motion/react";

export function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Firebase"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub Actions", "Jest", "Cypress", "Figma", "Linux", "Render", "Vercel"]
    }
  
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface">Technical Arsenal</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-outline-variant/20 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-outline-variant/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 rounded-md bg-surface-container-high text-sm font-medium text-on-surface-variant border border-outline-variant/10 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
