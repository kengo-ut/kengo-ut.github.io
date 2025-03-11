import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
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
  User,
  UserCircle,
  Users,
} from "lucide-react";
import { FaChalkboardTeacher, FaYoutube } from "react-icons/fa";
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
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
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
  User,
  UserCircle,
  Users,
  FaChalkboardTeacher,
  FaGithub,
  FaXTwitter,
  FaYoutube,
  SiThealgorithms,
};

type IconName = keyof typeof iconList;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const DynamicIcon = ({ name, size = 24, className }: IconProps) => {
  const Icon = iconList[name];
  return <Icon size={size} className={`${className} flex-shrink-0`} />;
};

export type { IconName };
export default DynamicIcon;
