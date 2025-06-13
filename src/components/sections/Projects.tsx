import DynamicIcon from "@/components/common/DynamicIcon";
import ProjectCard from "@/components/common/ProjectCard";
import Section from "@/components/common/Section";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProjectInfo } from "@/types";

interface ProjectsProps {
  projects: ProjectInfo[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            cardTitle={project.title}
            period={project.period}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          >
            {/* Project Info */}
            <CardContent className="flex flex-col gap-4">
              {/* Description */}
              <p>{project.description}</p>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">Key Features</h4>
                  <ul className="flex flex-col gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <DynamicIcon name="CheckCircle" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>

            <Separator className="mb-4" />

            {/* Technologies Used */}
            <CardFooter className="flex flex-col items-start gap-4">
              <h4 className="text-lg font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </ProjectCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
