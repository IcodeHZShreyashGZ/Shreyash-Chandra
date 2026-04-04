/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeToggle } from "./components/ThemeToggle";
import { Background } from "./components/Background";
import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen font-body text-on-surface selection:bg-primary/30 selection:text-primary transition-colors duration-500">
      <Background />
      <ThemeToggle />
      
      <main>
        <Hero />
        <Bio />
        <TechStack />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
