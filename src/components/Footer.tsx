// @ts-nocheck
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-outline-variant/10 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            SC.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com/IcodeHZShreyashGZ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash-chandra-9ba45432a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/anjaan_kashti_06/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-[#E1306C] hover:bg-[#E1306C]/10 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText("hishreyashgiis@gmail.com");
              alert("Email copied to clipboard!");
            }}
            className="p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
