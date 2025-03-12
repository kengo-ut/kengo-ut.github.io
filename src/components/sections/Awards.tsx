import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { CardContent } from "@/components/ui/card";
import { AwardInfo } from "@/types";
import Link from "next/link";

interface AwardsProps {
  awards: AwardInfo[];
}

const Awards: React.FC<AwardsProps> = ({ awards }: AwardsProps) => {
  return (
    <Section id="awards" title="Awards">
      <div className="grid gap-8 md:grid-cols-2">
        {awards.map((award, index) => (
          <StandardCard
            key={index}
            cardTitle={award.title}
            info={award.date}
            iconMain="Trophy"
            iconSub="Calendar"
          >
            {/* Content */}
            <CardContent className="flex flex-col gap-4">
              {/* Conference Info */}
              <div className="flex items-center gap-2">
                <DynamicIcon name="Landmark" />
                {award.conference}
              </div>

              {/* Description */}
              <p>{award.description}</p>
              <Link
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center underline hover:text-accent gap-2"
              >
                <DynamicIcon name="ExternalLink" />
                View Award
              </Link>
            </CardContent>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Awards;
