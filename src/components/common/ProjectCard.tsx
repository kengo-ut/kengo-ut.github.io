import DynamicIcon from "@/components/common/DynamicIcon";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

interface ProjectCardProps {
  cardTitle: string;
  period: string;
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  children: React.ReactNode;
}

const ProjectCard = ({
  cardTitle,
  period,
  imageUrl,
  demoUrl,
  repoUrl,
  children,
}: ProjectCardProps) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col border">
      {/* Header */}
      <CardHeader className="flex flex-col gap-4">
        {imageUrl && (
          <div className="-mx-6 -mt-6 relative h-48 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
            />
            {/* Buttons */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
              {demoUrl && (
                <Button asChild variant="outline">
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <DynamicIcon name="FaYoutube" />
                  </Link>
                </Button>
              )}
              {repoUrl && (
                <Button asChild variant="outline">
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <DynamicIcon name="FaGithub" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
            <DynamicIcon name="Code" size={24} />
            {cardTitle}
          </CardTitle>
          <div className="ml-1 text-md flex items-center gap-2 text-muted-foreground">
            <DynamicIcon name="Calendar" size={16} />
            {period}
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      {children}
    </Card>
  );
};

export default ProjectCard;
