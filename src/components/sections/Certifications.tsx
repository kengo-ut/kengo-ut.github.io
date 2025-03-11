import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { CardContent } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { CertificationInfo } from "@/types";
import { fetchData } from "@/utils";
import { useEffect, useState } from "react";

const urlCertifications: string = `${apiUrl}?sheetName=Certifications&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Certifications = () => {
  const [certifications, setCertifications] = useState<CertificationInfo[]>([]);

  useEffect(() => {
    fetchData(urlCertifications, options).then((data) => {
      const content: CertificationInfo[] = JSON.parse(data.value);
      setCertifications(content);
    });
  }, []);
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <StandardCard
            key={index}
            cardTitle={cert.name}
            info={cert.date}
            iconMain="Award"
            iconSub="Calendar"
          >
            {/* Content */}
            <CardContent className="flex flex-col gap-4">
              {/* Issuer */}
              <div className="flex items-center gap-2">
                <DynamicIcon name="Building" />
                {cert.issuer}
              </div>

              {/* ID (if exists) */}
              {cert.id && (
                <div className="flex items-center gap-2">
                  <DynamicIcon name="IdCard" />
                  {cert.id}
                </div>
              )}

              {/* Description (if exists) */}
              {cert.description && <p className="text-gray-600">{cert.description}</p>}
            </CardContent>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
