import Section from "@/components/common/Section";
import SkillCard from "@/components/common/SkillCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SkillInfo } from "@/types";
import { HelpCircle } from "lucide-react";

interface SkillsProps {
  skills: SkillInfo[];
}

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

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-8">
        <Card className="bg-card text-card-foreground flex flex-col border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">Experience Levels</CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>How long I&apos;ve worked with each technology</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Beginner */}
            <div className="flex items-center gap-3">
              <div className="h-3 w-8 rounded-full bg-primary opacity-25"></div>
              <div>
                <p className="font-medium">Beginner</p>
                <p className="text-sm">Less than 6 months</p>
              </div>
            </div>
            {/* Intermediate */}
            <div className="flex items-center gap-3">
              <div className="h-3 w-8 rounded-full bg-primary opacity-50"></div>
              <div>
                <p className="font-medium">Intermediate</p>
                <p className="text-sm">1-2 years</p>
              </div>
            </div>
            {/* Advanced */}
            <div className="flex items-center gap-3">
              <div className="h-3 w-8 rounded-full bg-primary"></div>
              <div>
                <p className="font-medium">Advanced</p>
                <p className="text-sm">3+ years</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <SkillCard key={index} cardTitle={category.title} iconMain={category.icon}>
              <CardContent className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col gap-2">
                    <div className="flex justify-between text-md font-medium">
                      <span>{skill.name}</span>
                      {/* <span className="text-muted-foreground capitalize">{skill.level}</span> */}
                    </div>
                    <Progress
                      value={getProgressValue(skill.level)}
                      className="h-2 bg-background"
                      style={{ opacity: getProgressOpacity(skill.level) }}
                    />
                  </div>
                ))}
              </CardContent>
            </SkillCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
