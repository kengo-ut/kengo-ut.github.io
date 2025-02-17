import DynamicIcon from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { PublicationInfo } from "@/types";
import { fetchData } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const urlPublications: string = `${apiUrl}?sheetName=Publications&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Publications = () => {
  const [publications, setPublications] = useState<PublicationInfo[]>([]);

  useEffect(() => {
    fetchData(urlPublications, options).then((data) => {
      const content: PublicationInfo[] = JSON.parse(data.value);
      setPublications(content);
    });
  }, []);
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Research</span>
          <span className="text-accent-coral"> Publications</span>
        </h2>

        {/* Publications List */}
        <div className="space-y-12">
          {publications.map((pub, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="BookOpen" className="h-6 w-6 flex-shrink-0" />
                    <CardTitle className="text-xl font-bold text-navy flex items-center">
                      {pub.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2 mt-4 md:mt-0">
                    <DynamicIcon name="Calendar" color="gray" />
                    {pub.date}
                  </div>
                </div>
              </CardHeader>

              {/* Publication Info */}
              <CardContent className="text-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <DynamicIcon name="Users" color="gray" />
                  {pub.authors.join(", ")}
                </div>

                {/* Conference Info */}
                <div className="flex items-center gap-2 mb-4">
                  <DynamicIcon name="Landmark" color="gray" />
                  {pub.conference}
                </div>

                {/* Abstract */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-navy mb-3">Abstract</h4>
                  <p className="text-gray-600">{pub.abstract}</p>
                </div>

                {/* Keywords (if any) */}
                {pub.keywords && pub.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {pub.keywords.map((keyword, i) => (
                      <Badge key={i} variant="outline" className="text-gray-600">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Link to Full Publication */}
                {pub.link && (
                  <div className="mt-4">
                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-coral hover:text-accent-coral hover:underline"
                    >
                      <DynamicIcon name="ExternalLink" className="h-4 w-4 mr-2" />
                      View Publication
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
