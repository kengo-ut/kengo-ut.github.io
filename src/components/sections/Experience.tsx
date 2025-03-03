import DynamicIcon from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { ExperienceInfo } from "@/types";
import { fetchData } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const urlExperience: string = `${apiUrl}?sheetName=Experience&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceInfo[]>([]);

  useEffect(() => {
    fetchData(urlExperience, options).then((data) => {
      const content: ExperienceInfo[] = JSON.parse(data.value);
      setExperiences(content);
    });
  }, []);
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Professional</span>
          <span className="text-accent-coral"> Experience</span>
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Briefcase" className="h-6 w-6 flex-shrink-0" />
                    <CardTitle className="text-xl font-bold text-navy flex items-center">
                      {exp.position}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2 mt-4 md:mt-0">
                    <DynamicIcon name="Calendar" color="gray" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>

              {/* Company Info */}
              <CardContent className="text-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <DynamicIcon name="Building" color="gray" />
                  <Link
                    href={exp.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent-coral"
                  >
                    {exp.company.name},
                  </Link>
                  {exp.location}
                </div>

                {/* Responsibilities & Achievements */}
                <ul className="mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <DynamicIcon
                        name="Briefcase"
                        color="accent-coral"
                        className="h-5 w-5 mr-2 mt-0.5"
                      />
                      <span className="text-navy">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-navy mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
