import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExperienceInfo } from "@/types";
import Link from "next/link";

interface ExperienceProps {
  experiences: ExperienceInfo[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }: ExperienceProps) => {
  return (
    <Section id="experience" title="Experience">
      {/* Experience Timeline */}
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <StandardCard
            key={index}
            cardTitle={exp.projectTitle}
            info={exp.period}
            iconMain="Briefcase"
            iconSub="Calendar"
          >
            {/* Company Info & Position */}
            <CardContent className="flex flex-col gap-4">
              {/* 会社情報と役職 */}
              <div className="flex items-center gap-2">
                <DynamicIcon name="Building" />
                <Link
                  href={exp.company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  {exp.company.name}
                </Link>
                {exp.location}
              </div>

              {/* 追加：役職（Position）表示 */}
              <div className="flex items-center gap-2">
                <DynamicIcon name="UserCircle" />
                <span>{exp.position}</span>
              </div>
            </CardContent>

            <Separator className="mb-4" />

            <CardContent className="flex flex-col gap-4">
              {/* Description セクション - 概要・詳細・担当に分ける */}
              {/* 概要セクション */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Overview</h4>
                {exp.description.overview}
              </div>

              {/* 詳細セクション */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Detail</h4>
                {exp.description.detail}
              </div>

              {/* 担当セクション */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Responsibilities</h4>
                <ul className="flex flex-col gap-2">
                  {exp.description.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <DynamicIcon name="CheckCircle" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <Separator className="mb-4" />

            {/* Technologies Used */}
            <CardFooter className="flex flex-col items-start gap-4">
              <h4 className="text-lg font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
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

export default Experience;
