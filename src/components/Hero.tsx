import { motion } from "motion/react";
import { Terminal, Download, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 shadow-sm w-fit"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-on-surface-variant">
                Hello, World!
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-on-surface">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Shreyash Chandra
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-on-surface-variant max-w-2xl font-light">
              Full-Stack Developer & AI Enthusiast building scalable,
              intelligent web applications.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View Projects
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-surface border border-outline-variant/20 hover:bg-surface-container-highest transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-surface-container-high shadow-2xl bg-surface-container-low">
              <img
                src="https://i.ibb.co/N2PwZKGW/Gemini-Generated-Image-bg2fugbg2fugbg2f.png"
                alt="Shreyash Chandra"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 -left-6 px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/20 shadow-xl backdrop-blur-md"
            >
              <span className="font-mono text-sm text-primary">I'm</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 -right-8 px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/20 shadow-xl backdrop-blur-md"
            >
              <span className="font-mono text-sm text-secondary">Online</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
