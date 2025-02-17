import DynamicIcon from "@/components/common/DynamicIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { apiUrl } from "@/lib/config";
import { SkillInfo } from "@/types";
import { fetchData } from "@/utils";
import { HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

const urlSkills: string = `${apiUrl}?sheetName=Skills&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const getProgressValue = (level: string): number => {
  switch (level) {
    case "beginner":
      return 33;
    case "intermediate":
      return 66;
    case "advanced":
      return 100;
    default:
      return 0;
  }
};

const getProgressOpacity = (level: string): number => {
  switch (level) {
    case "beginner":
      return 0.25;
    case "intermediate":
      return 0.5;
    case "advanced":
      return 1;
    default:
      return 0;
  }
};

const Skills = () => {
  const [skills, setSkills] = useState<SkillInfo[]>([]);

  useEffect(() => {
    fetchData(urlSkills, options).then((data) => {
      const content: SkillInfo[] = JSON.parse(data.value);
      setSkills(content);
    });
  }, []);
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12 text-navy">
          Technical <span className="text-accent-coral">Skills</span>
        </h2>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg text-gray-800">Experience Levels</CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>How long I&apos;ve worked with each technology</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Beginner */}
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-navy opacity-25"></div>
                <div>
                  <p className="font-medium text-gray-800">Beginner</p>
                  <p className="text-sm text-gray-600">Less than 6 months</p>
                </div>
              </div>
              {/* Intermediate */}
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-navy opacity-50"></div>
                <div>
                  <p className="font-medium text-gray-800">Intermediate</p>
                  <p className="text-sm text-gray-600">1-2 years</p>
                </div>
              </div>
              {/* Advanced */}
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-navy"></div>
                <div>
                  <p className="font-medium text-gray-800">Advanced</p>
                  <p className="text-sm text-gray-600">3+ years</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name={category.icon} className="h-6 w-6 flex-shrink-0" />
                    <CardTitle className="text-xl font-bold text-navy flex items-center">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2 text-md font-medium text-navy">
                      <span>{skill.name}</span>
                      {/* <span className="text-gray-500 capitalize">{skill.level}</span> */}
                    </div>
                    <Progress
                      value={getProgressValue(skill.level)}
                      className="h-2 bg-gray-200"
                      style={{ opacity: getProgressOpacity(skill.level) }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
