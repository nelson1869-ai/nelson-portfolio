import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { education, heroStack, personalInfo } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

// Structured data (JSON-LD): tells Google who this page is about.
// Test it at https://search.google.com/test/rich-results
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  alternateName: "Nelson Fernandez",
  jobTitle: personalInfo.heroTitle,
  url: siteUrl,
  sameAs: [personalInfo.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bacolod City",
    addressRegion: "Negros Occidental",
    addressCountry: "PH",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.institution },
  knowsAbout: heroStack,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Replace "<" so the JSON can never close the script tag early (XSS safety).
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
