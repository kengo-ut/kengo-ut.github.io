import DynamicIcon, { IconName } from "@/components/common/DynamicIcon";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  cardTitle: string;
  iconMain: IconName;
  children: React.ReactNode;
}

const SkillCard = ({ cardTitle, iconMain, children }: SkillCardProps) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col border">
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
          <DynamicIcon name={iconMain} size={24} />
          {cardTitle}
        </CardTitle>
      </CardHeader>

      {/* Content */}
      {children}
    </Card>
  );
};

export default SkillCard;
