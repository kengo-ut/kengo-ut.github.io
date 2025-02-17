"use client";
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Awards from "@/components/sections/Awards";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";

const sections = [
  About,
  Education,
  Experience,
  Skills,
  Publications,
  Certifications,
  Achievements,
  Awards,
];

export default function Home() {
  return (
    <Layout>
      <Hero />
      {sections.map((Section, index) => (
        <div key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
          <Section />
        </div>
      ))}
    </Layout>
  );
}
