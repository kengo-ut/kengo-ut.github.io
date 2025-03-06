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
              {/* Header - プロジェクトタイトル */}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Briefcase" className="h-6 w-6 flex-shrink-0" />
                    <CardTitle className="text-xl font-bold text-navy flex items-center">
                      {exp.projectTitle || exp.position}{" "}
                      {/* プロジェクトタイトルを表示、なければpositionを表示 */}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2 mt-4 md:mt-0">
                    <DynamicIcon name="Calendar" color="gray" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>

              {/* Company Info & Position */}
              <CardContent className="text-gray-600">
                {/* 会社情報と役職 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="Building" color="gray" />
                    <Link
                      href={exp.company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-accent-coral"
                    >
                      {exp.company.name}
                    </Link>
                    {exp.location}
                  </div>

                  {/* 追加：役職（Position）表示 */}
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="UserCircle" color="gray" />
                    <span>{exp.position}</span>
                  </div>
                </div>

                {/* Description セクション - 概要・詳細・担当に分ける */}
                <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-gray-100">
                  {/* 概要セクション */}
                  {exp.description.overview && (
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center gap-2">
                        Overview
                      </h4>
                      <p className="text-navy ml-4">{exp.description.overview}</p>
                    </div>
                  )}

                  {/* 詳細セクション - 単一テキストに変更 */}
                  {exp.description.detail && (
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center gap-2">
                        Detail
                      </h4>
                      <p className="text-navy ml-4">{exp.description.detail}</p>
                    </div>
                  )}

                  {/* 担当セクション */}
                  {exp.description.responsibilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center gap-2">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {exp.description.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <DynamicIcon name="CheckCircle" className="h-5 w-5 mr-2 mt-0.5" />
                            <span className="text-navy">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Technologies Used */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                    Technologies Used
                  </h4>
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
