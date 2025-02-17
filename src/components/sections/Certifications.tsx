import DynamicIcon from "@/components/common/DynamicIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { CertificationInfo } from "@/types";
import { fetchData } from "@/utils";
import { Award } from "lucide-react";
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
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Professional</span>
          <span className="text-accent-coral"> Certifications</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex items-center justify-between">
                  {/* 左側: アイコン + 資格名 */}
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-accent-coral flex-shrink-0" />
                    <CardTitle className="text-lg font-bold text-navy">{cert.name}</CardTitle>
                  </div>

                  {/* 右側: 日付 */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <DynamicIcon name="Calendar" color="gray" className="h-4 w-4 flex-shrink-0" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="text-gray-600 space-y-4">
                {/* Issuer */}
                <div className="flex items-center gap-2 text-gray-500">
                  <DynamicIcon name="Building" color="gray" className="h-4 w-4 flex-shrink-0" />
                  {cert.issuer}
                </div>

                {/* ID (if exists) */}
                {cert.id && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <DynamicIcon name="IdCard" color="gray" className="h-4 w-4 flex-shrink-0" />
                    {cert.id}
                  </div>
                )}

                {/* Description (if exists) */}
                {cert.description && <p className="text-gray-600">{cert.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
