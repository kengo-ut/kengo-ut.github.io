import { apiUrl } from "@/lib/config";
import {
  AchievementInfo,
  AwardInfo,
  CertificationInfo,
  CoreCompetency,
  EducationInfo,
  ExperienceInfo,
  HeroInfo,
  NavItem,
  PersonalInfo,
  ProjectInfo,
  PublicationInfo,
  SkillInfo,
} from "@/types";

const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain"
  },
  cache: "no-store",
};

async function fetchData<T>(sheetName: string, cell: string): Promise<T> {
  const url = `${apiUrl}?sheetName=${sheetName}&cell=${cell}`;
  const response = await fetch(url, options);
  const data = await response.json();
  return JSON.parse(data.value);
}

export async function getPageData() {
  const [
    heroInfo,
    navItems,
    personalInfo,
    coreCompetencies,
    educations,
    experiences,
    projects,
    skills,
    publications,
    certifications,
    achievements,
    awards,
  ] = await Promise.all([
    fetchData<HeroInfo>("Hero", "A1"),
    fetchData<NavItem[]>("Hero", "A2"),
    fetchData<PersonalInfo>("About", "A1"),
    fetchData<CoreCompetency[]>("About", "A2"),
    fetchData<EducationInfo[]>("Education", "A1"),
    fetchData<ExperienceInfo[]>("Experience", "A1"),
    fetchData<ProjectInfo[]>("Projects", "A1"),
    fetchData<SkillInfo[]>("Skills", "A1"),
    fetchData<PublicationInfo[]>("Publications", "A1"),
    fetchData<CertificationInfo[]>("Certifications", "A1"),
    fetchData<AchievementInfo[]>("Achievements", "A1"),
    fetchData<AwardInfo[]>("Awards", "A1"),
  ]);

  return {
    heroInfo,
    navItems,
    personalInfo,
    coreCompetencies,
    educations,
    experiences,
    projects,
    skills,
    publications,
    certifications,
    achievements,
    awards,
  };
}
