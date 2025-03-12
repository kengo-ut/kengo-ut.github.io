import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { CardContent } from "@/components/ui/card";
import { AchievementInfo } from "@/types";

interface AchievementsProps {
  achievements: AchievementInfo[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }: AchievementsProps) => {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid gap-8 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <StandardCard
            key={index}
            cardTitle={achievement.title}
            info={achievement.date}
            iconMain="TrendingUp"
            iconSub="Calendar"
          >
            {/* Content */}
            <CardContent className="flex flex-col gap-4">
              {/* スコア & タイトル */}
              <div className="flex flex-col">
                <p className="text-xl font-bold text-accent">{achievement.score}</p>
                <p className="text-primary font-medium">{achievement.title}</p>
              </div>

              {/* 詳細 */}
              {achievement.details && (
                <p className="text-muted-foreground">{achievement.details}</p>
              )}
            </CardContent>
          </StandardCard>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
