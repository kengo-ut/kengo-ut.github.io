import DynamicIcon from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { ProjectInfo } from "@/types";
import { fetchData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const urlProjects: string = `${apiUrl}?sheetName=Projects&cell=A1`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    fetchData(urlProjects, options).then((data) => {
      const content: ProjectInfo[] = JSON.parse(data.value);
      setProjects(content);
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">Featured</span>
          <span className="text-accent-coral"> Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="w-full h-full flex flex-col">
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}

              {/* Header */}
              <CardHeader>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="Code" className="h-6 w-6 flex-shrink-0 text-accent-coral" />
                  <CardTitle className="text-xl font-bold text-navy">{project.title}</CardTitle>
                </div>
                <div className="text-gray-600 mt-2">{project.period}</div>
              </CardHeader>

              {/* Project Info */}
              <CardContent className="text-gray-600 flex-grow">
                {/* Description */}
                <p className="mb-4">{project.description}</p>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-navy mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <DynamicIcon
                            name="CheckCircle"
                            color="accent-coral"
                            className="h-5 w-5 mr-2 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-navy mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-6">
                  {project.demoUrl && (
                    <Button
                      asChild
                      variant="default"
                      className="bg-accent-coral hover:bg-accent-coral/90"
                    >
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <DynamicIcon name="ExternalLink" className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button asChild variant="outline">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <DynamicIcon name="FaGithub" className="mr-2 h-4 w-4" />
                        Repository
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
