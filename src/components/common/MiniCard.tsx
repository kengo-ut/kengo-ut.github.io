import DynamicIcon, { IconName } from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MiniCardProps {
  category: string;
  iconName: IconName;
  skills: string[];
}

const MiniCard = ({ category, iconName, skills }: MiniCardProps) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col border">
      <CardHeader>
        <CardTitle className="text-md font-semibold flex items-center gap-2 text-primary">
          <DynamicIcon name={iconName} size={20} />
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <Badge key={i} variant="secondary" className="text-foreground">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default MiniCard;
