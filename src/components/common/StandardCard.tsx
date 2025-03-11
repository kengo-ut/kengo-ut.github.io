import DynamicIcon, { IconName } from "@/components/common/DynamicIcon";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface StandardCardProps {
  cardTitle: string;
  info: string;
  iconMain?: IconName;
  iconSub?: IconName;
  children: React.ReactNode;
}

const StandardCard = ({ cardTitle, info, iconMain, iconSub, children }: StandardCardProps) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col border">
      {/* Header */}
      <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
          {iconMain && <DynamicIcon name={iconMain} size={24} />}
          {cardTitle}
        </CardTitle>
        <div className="ml-1 text-md flex items-center gap-2 text-muted-foreground">
          {iconSub && <DynamicIcon name={iconSub} size={16} />}
          {info}
        </div>
      </CardHeader>

      {/* Content */}
      {children}
    </Card>
  );
};

export default StandardCard;
