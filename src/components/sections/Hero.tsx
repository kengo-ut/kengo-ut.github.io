import DynamicIcon from "@/components/common/DynamicIcon";
import { HeroInfo, NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

interface HeroProps {
  heroInfo: HeroInfo;
  navItems: NavItem[];
}

const Hero = ({ heroInfo, navItems }: HeroProps) => {
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
