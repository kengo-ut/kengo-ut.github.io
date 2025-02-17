import DynamicIcon from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { EducationInfo } from "@/types";
import { fetchData } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const urlEducation: string = `${apiUrl}?sheetName=Education&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Education = () => {
  const [educations, setEducations] = useState<EducationInfo[]>([]);

  useEffect(() => {
    fetchData(urlEducation, options).then((data) => {
      const content: EducationInfo[] = JSON.parse(data.value);
      setEducations(content);
    });
  }, []);
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Education</span>
          <span className="text-accent-coral"> & Research</span>
        </h2>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educations.map((edu, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="GraduationCap" className="h-6 w-6 flex-shrink-0" />
                    <CardTitle className="text-xl font-bold text-navy flex items-center">
                      {edu.degree} in {edu.field}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2 mt-4 md:mt-0">
                    <DynamicIcon name="Calendar" color="gray" />
                    {edu.period}
                  </div>
                </div>
              </CardHeader>

              {/* School Info */}
              <CardContent className="text-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <DynamicIcon name="MapPin" color="gray" />
                  <Link
                    href={edu.school.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-coral"
                  >
                    {edu.school.name},
                  </Link>
                  {edu.location}
                </div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="FaChalkboardTeacher" color="gray" />
                  {edu.advisor}
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-2 mt-4">
                    <DynamicIcon name="Award" color="gray" />
                    GPA: {edu.gpa}
                  </div>
                )}

                {/* Research Section (if exists) */}
                {edu.research && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-navy mb-3">Research Focus</h4>
                    <p className="text-gray-600 mb-4">{edu.research.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.research.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline" className="text-gray-600">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
