import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Awards from "@/components/sections/Awards";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import { getPageData } from "@/lib/fetchData";

export default async function Home() {
  const data = await getPageData();

  const sections = [
    <About personalInfo={data.personalInfo} coreCompetencies={data.coreCompetencies} key={0} />,
    <Education educations={data.educations} key={1} />,
    <Experience experiences={data.experiences} key={2} />,
    <Projects projects={data.projects} key={3} />,
    <Skills skills={data.skills} key={4} />,
    <Publications publications={data.publications} key={5} />,
    <Certifications certifications={data.certifications} key={6} />,
    <Achievements achievements={data.achievements} key={7} />,
    <Awards awards={data.awards} key={8} />,
  ];

  return (
    <Layout>
      <Hero heroInfo={data.heroInfo} navItems={data.navItems} />
      {sections.map((section, index) => (
        <div key={index} className={`${index % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          {section}
        </div>
      ))}
    </Layout>
  );
}
