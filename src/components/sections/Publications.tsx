import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { PublicationInfo } from "@/types";
import Link from "next/link";

interface PublicationsProps {
  publications: PublicationInfo[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <Section id="publications" title="Publications">
      {/* Publications List */}
      <div className="flex flex-col gap-8">
        {publications.map((pub, index) => (
          <StandardCard
            key={index}
            cardTitle={pub.title}
            info={pub.date}
            iconMain="BookOpen"
            iconSub="Calendar"
          >
            {/* Publication Info */}
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <DynamicIcon name="Users" />
                {pub.authors.join(", ")}
              </div>

              {/* Conference Info */}
              <div className="flex items-center gap-2">
                <DynamicIcon name="Landmark" />
                {pub.conference}
              </div>
            </CardContent>

            <Separator className="mb-4" />

            {/* Abstract */}
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-primary">Abstract</h4>
                {pub.abstract}
              </div>

              {/* Keywords (if any) */}
              {pub.keywords && pub.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, i) => (
                    <Badge key={i} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Link to Full Publication */}
              {pub.link && (
                <div>
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center underline hover:text-accent gap-2"
                  >
                    <DynamicIcon name="ExternalLink" />
                    View Publication
                  </Link>
                </div>
              )}
            </CardFooter>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
