import DynamicIcon from "@/components/common/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/lib/config";
import { CoreCompetency, ImageSlide, PersonalInfo } from "@/types";
import { fetchData } from "@/utils";
import { ChevronLeft, ChevronRight, FileText, MapPin } from "lucide-react";
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Matching Education style */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-navy">About</span>
          <span className="text-accent-coral"> Me</span>
        </h2>

        {/* Profile Header */}
        <Card className="w-full mb-12">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-xl font-bold mb-2 md:mb-0">{personalInfo.role}</CardTitle>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      className="bg-white/80 hover:bg-white text-navy rounded-full p-2 shadow-md transition-all transform hover:-translate-x-1"
                      aria-label="Previous image"
                      disabled={isTransitioning}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-white/80 hover:bg-white text-navy rounded-full p-2 shadow-md transition-all transform hover:translate-x-1"
                      aria-label="Next image"
                      disabled={isTransitioning}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Dots Indicator - Positioned inside the image */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 rounded-full px-3 py-2 backdrop-blur-sm">
                    {profileImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageTransition(index)}
                        disabled={isTransitioning}
                        className={`transition-all duration-300 ${
                          currentImage === index
                            ? "w-4 h-2 bg-[#FA7472] rounded-full"
                            : "w-2 h-2 bg-white rounded-full hover:bg-white/75"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="flex flex-col gap-4">
                <div className="prose prose-navy max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {personalInfo.selfIntroduction}
                  </p>
                </div>

                {/* Download Resume Button */}
                <Link href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-accent-coral text-navy hover:bg-accent-coral hover:text-white"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCompetencies.map((competency, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex items-center gap-2">
                  <DynamicIcon name={competency.icon} />
                  <CardTitle className="font-semibold">{competency.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {competency.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-gray-600">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
