import DynamicIcon from "@/components/common/DynamicIcon";
import MiniCard from "@/components/common/MiniCard";
import Section from "@/components/common/Section";
import StandardCard from "@/components/common/StandardCard";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { CoreCompetency, ImageSlide, PersonalInfo } from "@/types";
import { fetchData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const urlPersonalInfo: string = `${apiUrl}?sheetName=About&cell=A1`;
const urlCoreCompetencies: string = `${apiUrl}?sheetName=About&cell=A2`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const profileImages: ImageSlide[] = [
  { src: `${BASE_PATH}/images/presentation.jpg`, alt: "Conference Presentation" },
  { src: `${BASE_PATH}/images/poster.jpg`, alt: "Research Work" },
  { src: `${BASE_PATH}/images/private.jpg`, alt: "Personal Life" },
];

const About = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    role: "",
    location: "",
    selfIntroduction: "",
    resumeLink: "",
  });
  const [coreCompetencies, setCoreCompetencies] = useState<CoreCompetency[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetchData(urlPersonalInfo, options).then((data) => {
      const content: PersonalInfo = JSON.parse(data.value);
      setPersonalInfo(content);
    });
    fetchData(urlCoreCompetencies, options).then((data) => {
      const content: CoreCompetency[] = JSON.parse(data.value);
      setCoreCompetencies(content);
    });
  }, []);

  const handleImageTransition = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage(newIndex);
    setTimeout(() => setIsTransitioning(false), 10); // Match transition duration
  };

  const nextImage = () => {
    const newIndex = (currentImage + 1) % profileImages.length;
    handleImageTransition(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImage - 1 + profileImages.length) % profileImages.length;
    handleImageTransition(newIndex);
  };

  return (
    <Section id="about" title="About Me">
      <StandardCard
        cardTitle={personalInfo.role}
        info={personalInfo.location}
        iconMain="User"
        iconSub="MapPin"
      >
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="relative w-full aspect-[3/2] group">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {/* Image Container with Transition */}
              <div
                className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: isTransitioning ? 0.5 : 1,
                }}
              >
                <Image
                  src={profileImages[currentImage].src}
                  alt={profileImages[currentImage].alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Navigation Buttons with Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-all transform hover:-translate-x-1"
                  aria-label="Previous image"
                  disabled={isTransitioning}
                >
                  <DynamicIcon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-all transform hover:translate-x-1"
                  aria-label="Next image"
                  disabled={isTransitioning}
                >
                  <DynamicIcon name="ChevronRight" size={20} />
                </button>
              </div>

              {/* Dots Indicator - Positioned inside the image */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-background/20 rounded-full px-3 py-2 backdrop-blur-sm">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageTransition(index)}
                    disabled={isTransitioning}
                    className={`transition-all duration-300 ${
                      currentImage === index
                        ? "w-4 h-2 bg-accent rounded-full"
                        : "w-2 h-2 bg-background rounded-full hover:bg-background/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col gap-4">
            <p className="whitespace-pre-line">{personalInfo.selfIntroduction}</p>

            {/* Download Resume Button */}
            <Button asChild variant="outline">
              <Link href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">
                <DynamicIcon name="FileText" />
                Download Resume
              </Link>
            </Button>
          </div>
        </CardContent>
      </StandardCard>

      {/* Core Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreCompetencies.map((competency, index) => (
          <MiniCard
            key={index}
            category={competency.category}
            iconName={competency.icon}
            skills={competency.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;
