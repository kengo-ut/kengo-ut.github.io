import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Code,
  ExternalLink,
  GraduationCap,
  IdCard,
  Landmark,
  MapPin,
  Medal,
  Monitor,
  Server,
  Settings,
  TrendingUp,
  Trophy,
  UserCircle,
  Users,
} from "lucide-react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiThealgorithms } from "react-icons/si";

const iconList = {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Code,
  ExternalLink,
  GraduationCap,
  IdCard,
  Landmark,
  MapPin,
  Medal,
  Monitor,
  Server,
  Settings,
  Trophy,
  TrendingUp,
  UserCircle,
  Users,
  FaChalkboardTeacher,
  FaGithub,
  FaXTwitter,
  SiThealgorithms,
};

type IconName = keyof typeof iconList;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const DynamicIcon = ({ name, size = 24, color, className = "" }: IconProps) => {
  const Icon = iconList[name];
  return (
    <Icon
      size={size}
      className={`${className} ${color ? "" : "text-accent-coral"}`}
      color={color} // color が指定されていれば適用、なければ className に "text-accent-coral" を付与
    />
  );
};

export type { IconName };
export default DynamicIcon;
