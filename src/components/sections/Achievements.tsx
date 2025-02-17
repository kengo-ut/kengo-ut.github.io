// Achievements.tsx
import DynamicIcon from "@/components/common/DynamicIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { AchievementInfo } from "@/types";
import { fetchData } from "@/utils";
import { useEffect, useState } from "react";

const urlAchievements: string = `${apiUrl}?sheetName=Achievements&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementInfo[]>([]);

  useEffect(() => {
    fetchData(urlAchievements, options).then((data) => {
      const content: AchievementInfo[] = JSON.parse(data.value);
      setAchievements(content);
    });
  }, []);
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Personal</span>
          <span className="text-accent-coral"> Achievements</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Card key={index} className="w-full">
              {/* Header */}
              <CardHeader>
                <div className="flex items-center justify-between">
                  {/* 左側: アイコン + カテゴリ */}
                  <div className="flex items-center gap-2">
                    <DynamicIcon
                      name="TrendingUp"
                      className="h-6 w-6 text-accent-coral flex-shrink-0"
                    />
                    <CardTitle className="text-lg font-bold text-navy">
                      {achievement.category}
                    </CardTitle>
                  </div>

                  {/* 右側: 日付 */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <DynamicIcon name="Calendar" color="gray" className="h-4 w-4 flex-shrink-0" />
                    {achievement.date}
                  </div>
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="text-gray-600 space-y-2">
                {/* スコア & タイトル */}
                <div>
                  <div className="text-xl font-bold text-accent-coral">{achievement.score}</div>
                  <div className="text-navy font-medium">{achievement.title}</div>
                </div>

                {/* 詳細 */}
                {achievement.details && <p className="text-gray-600">{achievement.details}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
