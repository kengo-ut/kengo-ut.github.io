import DynamicIcon from "@/components/common/DynamicIcon";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { CardContent } from "@/components/ui/card";
import { CertificationInfo } from "@/types";

interface CertificationsProps {
  certifications: CertificationInfo[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }: CertificationsProps) => {
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
