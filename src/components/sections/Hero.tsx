import DynamicIcon from "@/components/common/DynamicIcon";
import { apiUrl } from "@/lib/config";
import { HeroInfo, NavItem } from "@/types";
import { fetchData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const urlNav: string = `${apiUrl}?sheetName=Hero&cell=A2`;
const options: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

const Hero = () => {
  const heroInfo: HeroInfo = {
    name: "Kengo Ikeuchi",
    greeting:
      "Passionate about machine learning and algorithms\n—solving complex problems with elegant and efficient code.",
  };
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    fetchData(urlNav, options).then((data) => {
      const content: NavItem[] = JSON.parse(data.value);
      setNavItems(content);
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${BASE_PATH}/images/profile.jpg`}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Gradients and Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/80" />

      {/* Content Container - Centered vertically, aligned left within max-width container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hi, I&apos;m <span className="text-accent">{heroInfo.name}</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/90 whitespace-pre-line">
              {heroInfo.greeting}
            </p>
            <div className="flex gap-4">
              <nav className="flex gap-7 text-5xl text-white">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <DynamicIcon
                      name={item.icon}
                      size={40}
                      className="hover:text-accent transition-colors"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
