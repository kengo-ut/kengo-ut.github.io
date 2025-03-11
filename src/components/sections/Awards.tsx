// Awards.tsx
import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { CardContent } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { AwardInfo } from "@/types";
import { fetchData } from "@/utils";
import { useEffect, useState } from "react";

const urlAwards: string = `${apiUrl}?sheetName=Awards&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Awards = () => {
  const [awards, setAwards] = useState<AwardInfo[]>([]);

  useEffect(() => {
    fetchData(urlAwards, options).then((data) => {
      const content: AwardInfo[] = JSON.parse(data.value);
      setAwards(content);
    });
  }, []);
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
              <p className="mt-2">{award.description}</p>
            </CardContent>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Awards;
