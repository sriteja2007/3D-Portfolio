import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection onOpenResume={() => setResumeOpen(true)} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection onOpenResume={() => setResumeOpen(true)} />
      
      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;