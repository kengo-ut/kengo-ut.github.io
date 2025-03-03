// Awards.tsx
import DynamicIcon from "@/components/common/DynamicIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { AwardInfo } from "@/types";
import { fetchData } from "@/utils";
import Link from "next/link";
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
    <section id="awards" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Academic</span>
          <span className="text-accent-coral"> Awards</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex items-center justify-between">
                  {/* 左側: アイコン + カテゴリ */}
                  <div className="flex items-center gap-2">
                    <DynamicIcon
                      name="Trophy"
                      className="h-6 w-6 text-accent-coral flex-shrink-0"
                    />
                    <Link
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      <CardTitle className="text-lg font-bold text-navy">{award.title}</CardTitle>
                    </Link>
                  </div>

                  {/* 右側: 日付 */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <DynamicIcon name="Calendar" color="gray" className="h-4 w-4 flex-shrink-0" />
                    {award.date}
                  </div>
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="text-gray-600">
                {/* Conference Info */}
                <div className="flex items-center gap-2 mb-4">
                  <DynamicIcon name="Landmark" color="gray" className="h-4 w-4 flex-shrink-0" />
                  {award.conference}
                </div>

                {/* Description */}
                <div className="mt-4">
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
