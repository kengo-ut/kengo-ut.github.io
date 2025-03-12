import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EducationInfo } from "@/types";
import Link from "next/link";

interface EducationProps {
  educations: EducationInfo[];
}

const Education: React.FC<EducationProps> = ({ educations }: EducationProps) => {
  return (
    <Section id="education" title="Education">
      {/* Education Timeline */}
      <div className="flex flex-col gap-8">
        {educations.map((edu, index) => (
          <StandardCard
            key={index}
            cardTitle={`${edu.degree} in ${edu.field}`}
            info={edu.period}
            iconMain="GraduationCap"
            iconSub="Calendar"
          >
            {/* School Info */}
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <DynamicIcon name="MapPin" />
                <Link
                  href={edu.school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  {edu.school.name}
                </Link>
                {edu.location}
              </div>
              <div className="flex items-center gap-2">
                <DynamicIcon name="FaChalkboardTeacher" />
                {edu.advisor}
              </div>
              {edu.gpa && (
                <div className="flex items-center gap-2">
                  <DynamicIcon name="Award" />
                  GPA: {edu.gpa}
                </div>
              )}
            </CardContent>

            <Separator className="mb-4" />

            {/* Research Focus */}
            <CardFooter className="flex flex-col items-start gap-4">
              <h4 className="text-lg font-semibold">Research Focus</h4>
              <p>{edu.research.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.research.keywords.map((keyword, i) => (
                  <Badge key={i} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Education;
