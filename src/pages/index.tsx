import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  ApertureIcon,
  CodeIcon,
  Video,
  Palette,
  Sparkles,
  Clapperboard,
  Megaphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Companies worked with", value: "15+" },
];

const videoProjects = [
  {
    title: "Video 1",
    // description: "SAAS Product Animation",
    image: "/assets/videoProject/videoProject1.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "Video 2",
    // description: "Product Launch Video",
    image: "/assets/videoProject/videoProject2.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "Video 3",
    // description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/videoProject/videoProject3.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "Video 4",
    // description: "Robotics-focused technology company",
    image: "/assets/videoProject/videoProject4.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "Video 5",
    // description: "My personal website",
    image: "/assets/videoProject/videoProject5.webm",
    href: "https://depixstudio.com",
  },
];

const animationProjects = [
  {
    title: "2D Animation 1",
    // description: "SAAS Product Animation",
    image: "/assets/2D/2D1.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "2D Animation 2",
    // description: "Product Launch Video",
    image: "/assets/2D/2D2.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "2D Animation 3",
    // description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/2D/2D3.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "2D Animation 4",
    // description: "Robotics-focused technology company",
    image: "/assets/2D/2D4.webm",
    href: "https://depixstudio.com",
  },
  {
    title: "2D Animation 5",
    // description: "My personal website",
    image: "/assets/2D/2D5.webm",
    href: "https://depixstudio.com",
  },
];

const documentaryProjects = [
  {
    title: "Documentary 1",
    description: "Click for Full Video",
    image: "/assets/documentary/documentary1.webm",
    href: "https://drive.google.com/file/d/1HARcVoy0ZTkXp0_xDi56XvJe9Lbuz2qm/view?usp=drive_link",
  },
  {
    title: "Documentary 2",
    description: "Click for Full Video",
    image: "/assets/documentary/documentary2.webm",
    href: "https://drive.google.com/file/d/1Ri74RINJrpKc0EkT2S7yA0ujoHY8TnLQ/view?usp=drive_link",
  },
  {
    title: "Documentary 3",
    description: "Click for Full Video",
    image: "/assets/documentary/documentary3.webm",
    href: "https://drive.google.com/file/d/1wAh1JfTmMgeQwS08MU-WUCTYMBItMSOU/view?usp=drive_link",
  },
  {
    title: "Documentary 4",
    description: "Click for Full Video",
    image: "/assets/documentary/documentary4.webm",
    href: "https://drive.google.com/file/d/1MJQb3xhedXEVUxby6YBAqA8MMYykfO-3/view?usp=drive_link",
  },
  {
    title: "Documentary 5",
    description: "Click for Full Video",
    image: "/assets/documentary/documentary5.webm",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
];

const gamingProjects = [
  {
    title: "Gaming 1",
    // description: "SAAS Product Animation",
    image: "/assets/gaming/gaming1.webm",
    href: "https://drive.google.com/file/d/1HARcVoy0ZTkXp0_xDi56XvJe9Lbuz2qm/view?usp=drive_link",
  },
  {
    title: "Gaming 2",
    // description: "Product Launch Video",
    image: "/assets/gaming/gaming2.webm",
    href: "https://drive.google.com/file/d/1Ri74RINJrpKc0EkT2S7yA0ujoHY8TnLQ/view?usp=drive_link",
  },
  {
    title: "Gaming 3",
    // description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/gaming/gaming3.webm",
    href: "https://drive.google.com/file/d/1wAh1JfTmMgeQwS08MU-WUCTYMBItMSOU/view?usp=drive_link",
  },
  {
    title: "Gaming 4",
    // description: "Robotics-focused technology company",
    image: "/assets/gaming/gaming4.webm",
    href: "https://drive.google.com/file/d/1MJQb3xhedXEVUxby6YBAqA8MMYykfO-3/view?usp=drive_link",
  },
  {
    title: "Gaming 5",
    // description: "My personal website",
    image: "/assets/gaming/gaming5.webm",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "Gaming 6",
    // description: "My personal website",
    image: "/assets/gaming/gaming6.webm",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "Gaming 7",
    // description: "My personal website",
    image: "/assets/gaming/gaming7.webm",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "Gaming 8",
    // description: "My personal website",
    image: "/assets/gaming/gaming8.webm",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
];

const vlogProjects = [
  {
    title: "Vlog 1",
    description: "Click for Full Video",
    image: "/assets/vlog/vlog1.mp4",
    href: "https://drive.google.com/file/d/1S7K2UITlYxcwwMEayHdhElUkqBN-mOJ1/view?usp=drive_link",
  },
  {
    title: "Vlog 2",
    description: "Click for Full Video",
    image: "/assets/vlog/vlog2.mp4",
    href: "https://drive.google.com/file/d/1JjanzvCgfhAD7ymvzPxeXhLaqV4leIS8/view?usp=drive_link",
  },
  {
    title: "Vlog 3",
    description: "Click for Full Video",
    image: "/assets/vlog/vlog3.mp4",
    href: "https://drive.google.com/file/d/1jNgS2VZ1AjPAitIbb2hpkaboksHAQenl/view?usp=drive_link",
  },
  {
    title: "Vlog 4",
    description: "Click for Full Video",
    image: "/assets/vlog/vlog4.mp4",
    href: "https://drive.google.com/file/d/1XenK_NjNOuQIEKnbKE7O38l6FZT9Pdzr/view?usp=drive_link",
  },
];

const talkingHeadProjects = [
  {
    title: "talkingHead 1",
    // description: "SAAS Product Animation",
    image: "/assets/talkingHead/talkingHead1.mp4",
    href: "https://drive.google.com/file/d/1HARcVoy0ZTkXp0_xDi56XvJe9Lbuz2qm/view?usp=drive_link",
  },
  {
    title: "talkingHead 2",
    // description: "Product Launch Video",
    image: "/assets/talkingHead/talkingHead2.mp4",
    href: "https://drive.google.com/file/d/1Ri74RINJrpKc0EkT2S7yA0ujoHY8TnLQ/view?usp=drive_link",
  },
  {
    title: "talkingHead 3",
    // description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/talkingHead/talkingHead3.mp4",
    href: "https://drive.google.com/file/d/1wAh1JfTmMgeQwS08MU-WUCTYMBItMSOU/view?usp=drive_link",
  },
  {
    title: "talkingHead 4",
    // description: "Robotics-focused technology company",
    image: "/assets/talkingHead/talkingHead4.mp4",
    href: "https://drive.google.com/file/d/1MJQb3xhedXEVUxby6YBAqA8MMYykfO-3/view?usp=drive_link",
  },
  {
    title: "talkingHead 5",
    // description: "My personal website",
    image: "/assets/talkingHead/talkingHead5.mp4",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "talkingHead 6",
    // description: "My personal website",
    image: "/assets/talkingHead/talkingHead6.mp4",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "talkingHead 7",
    // description: "My personal website",
    image: "/assets/talkingHead/talkingHead7.mp4",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
  {
    title: "talkingHead 8",
    // description: "My personal website",
    image: "/assets/talkingHead/talkingHead8.mp4",
    href: "https://drive.google.com/file/d/1s77g63i1k8OsJEhrzu1jZ5XTR1PQiwiC/view?usp=drive_link",
  },
];

const mapProjects = [
  {
    title: "map 1",
    image: "/assets/mapAnimation/map1.mp4",
  },
  {
    title: "map 2",
    image: "/assets/mapAnimation/map2.mp4",
  },
  {
    title: "map 3",
    image: "/assets/mapAnimation/map3.mp4",
  },
  {
    title: "map 4",
    image: "/assets/mapAnimation/map4.mp4",
  },
];

const realEstateProjects = [
  {
    title: "realEstate 1",
    image: "/assets/realEstate/re1.mp4",
  },
  {
    title: "realEstate 2",
    image: "/assets/realEstate/re2.mp4",
  },
  {
    title: "realEstate 3",
    image: "/assets/realEstate/re3.mp4",
  },
  {
    title: "realEstate 4",
    image: "/assets/realEstate/re4.mp4",
  },
];

const skeletonProjects = [
  {
    title: "skeleton 1",
    image: "/assets/skeleton/skeleton1.mp4",
  },
  {
    title: "skeleton 2",
    image: "/assets/skeleton/skeleton2.mp4",
  },
  {
    title: "skeleton 3",
    image: "/assets/skeleton/skeleton3.mp4",
  },
  {
    title: "skeleton 4",
    image: "/assets/skeleton/skeleton4.mp4",
  },
];

const podcastProjects = [
  {
    title: "podcast 1",
    image: "/assets/podcast/Podcast1.mp4",
  },
  {
    title: "podcast 2",
    image: "/assets/podcast/Podcast2.mp4",
  },
  {
    title: "podcast 3",
    image: "/assets/podcast/Podcast3.mp4",
  },
  {
    title: "podcast 4",
    image: "/assets/podcast/Podcast4.mp4",
  },
];

const talkingHeadShortProjects = [
  {
    title: "talkingHeadShort 1",
    image: "/assets/talkingHeadShort/talkingHeadShort1.mp4",
  },
  {
    title: "talkingHeadShort 2",
    image: "/assets/talkingHeadShort/talkingHeadShort2.mp4",
  },
  {
    title: "talkingHeadShort 3",
    image: "/assets/talkingHeadShort/talkingHeadShort3.mp4",
  },
  {
    title: "talkingHeadShort 4",
    image: "/assets/talkingHeadShort/talkingHeadShort4.mp4",
  },
  {
    title: "talkingHeadShort 5",
    image: "/assets/talkingHeadShort/talkingHeadShort5.mp4",
  },
];

const commentaryProjects = [
  {
    title: "commentary 1",
    image: "/assets/commentary/commentary1.mp4",
  },
  {
    title: "commentary 2",
    image: "/assets/commentary/commentary2.mp4",
  },
  {
    title: "commentary 3",
    image: "/assets/commentary/commentary3.mp4",
  },
  {
    title: "commentary 4",
    image: "/assets/commentary/commentary4.mp4",
  },
  {
    title: "commentary 5",
    image: "/assets/commentary/commentary5.mp4",
  },
];

const robloxProjects = [
  {
    title: "roblox 1",
    image: "/assets/roblox/roblox1.mp4",
  },
  {
    title: "roblox 2",
    image: "/assets/roblox/roblox2.mp4",
  },
  {
    title: "roblox 3",
    image: "/assets/roblox/roblox3.mp4",
  },
  {
    title: "roblox 4",
    image: "/assets/roblox/roblox4.mp4",
  },
  {
    title: "roblox 5",
    image: "/assets/roblox/roblox5.mp4",
  },
];

const environmentProjects = [
  {
    title: "environment 1",
    image: "/assets/environment/environment1.mp4",
  },
  {
    title: "environment 2",
    image: "/assets/environment/environment2.mp4",
  },
  {
    title: "environment 3",
    image: "/assets/environment/environment3.mp4",
  },
  {
    title: "environment 4",
    image: "/assets/environment/environment4.mp4",
  },
  {
    title: "environment 5",
    image: "/assets/environment/environment5.mp4",
  },
];

const characterProjects = [
  {
    title: "character 1",
    image: "/assets/character/character1.mp4",
  },
  {
    title: "character 2",
    image: "/assets/character/character2.mp4",
  },
  {
    title: "character 3",
    image: "/assets/character/character3.mp4",
  },
  {
    title: "character 4",
    image: "/assets/character/character4.mp4",
  },
  {
    title: "character 5",
    image: "/assets/character/character5.mp4",
  },
];

const introOutroProjects = [
  {
    title: "introOutro 1",
    image: "/assets/introOutro/introOutro1.mp4",
  },
  {
    title: "introOutro 2",
    image: "/assets/introOutro/introOutro2.mp4",
  },
  {
    title: "introOutro 3",
    image: "/assets/introOutro/introOutro3.mp4",
  },
  {
    title: "introOutro 4",
    image: "/assets/introOutro/introOutro4.mp4",
  },
];

const bannerProjects = [
  {
    title: "banner 1",
    image: "/assets/banner/banner1.mp4",
  },
  {
    title: "banner 2",
    image: "/assets/banner/banner2.mp4",
  },
  {
    title: "banner 3",
    image: "/assets/banner/banner3.mp4",
  },
];

const thumbnailProjects = [
  {
    // title: "Thumbnail 1",
    image: "/assets/thumbnail/thumbnail1.jpg",
    href: "#",
  },
  {
    // title: "Thumbnail 2",
    image: "/assets/thumbnail/thumbnail2.png",
    href: "#",
  },
  {
    // title: "Thumbnail 3",
    image: "/assets/thumbnail/thumbnail3.jpg",
    href: "#",
  },
  {
    // title: "Thumbnail 4",
    image: "/assets/thumbnail/thumbnail4.jpg",
    href: "#",
  },
  {
    // title: "Thumbnail 5",
    image: "/assets/thumbnail/thumbnail5.jpg",
    href: "#",
  },
  {
    // title: "Thumbnail 6",
    image: "/assets/thumbnail/thumbnail6.webp",
    href: "#",
  },
  {
    // title: "Thumbnail 7",
    image: "/assets/thumbnail/thumbnail7.webp",
    href: "#",
  },
  {
    // title: "Thumbnail 7",
    image: "/assets/thumbnail/thumbnail8.webp",
    href: "#",
  },
];

const services = [
  {
    service: "YouTube Short & Long Form Editing",
    description: "Engaging edits with smooth cuts, transitions, and pacing.",
    icon: Video,
  },
  {
    service: "Advertisement Video Editing",
    description: "Short, high-impact edits with captions and effects for ads.",
    icon: Megaphone, // suggested icon for ads/marketing
  },
  {
    service: "Instagram Reels Editing",
    description:
      "Short, engaging videos with captions and visuals for Instagram.",
    icon: MonitorSmartphone,
  },
  {
    service: "Motion Graphics & Effects",
    description: "Dynamic transitions and visual effects to enhance videos.",
    icon: Sparkles,
  },
  {
    service: "Color Grading & Cinematic Editing",
    description: "Professional color grading for polished, cinematic videos.",
    icon: Palette,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>Video Editor</span>
              <span className={styles.pill}>Motion Desginer</span>
              <span className={styles.pill}>2D/3D Artist</span>
              <span className={styles.pill}>Animator</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Emma Smith
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Creative and detail oriented video editor, dedicated to
                producing high quality content that inspires, informs, and
                engages.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-2"
            >
              <Link
                href="https://discord.com/users/1430976728041259218"
                passHref
              >
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-1 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I am a professional video editor focused on creating high quality,
              engaging, and results driven content. With experience working with
              startups and growing brands, I specialize in producing videos that
              capture attention, maintain strong retention, and communicate
              messages effectively. My expertise includes fast paced editing,
              seamless transitions, precise cuts, sound design, color grading,
              and motion graphics. I deliver clean, polished edits while
              ensuring smooth communication and efficient collaboration
              throughout the entire process.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Editing */}
        <section id="videoEditing" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-10 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4">
            <span className="text-gradient clash-grotesk text-xl font-semibold tracking-tighter">
              ✨ Video Editing
            </span>
            <h2 className="clash-grotesk text-gradient mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              SHORT FORM CONTENT CREATION
            </h2>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Roblox Short Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging Roblox short videos with eye-catching visuals,
              helping content stand out and connect with the audience. Here are
              some of my favorite projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {robloxProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Commentary Short Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging commentary short videos with eye-catching
              visuals, helping content stand out and connect with the audience.
              Here are some of my favorite projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {commentaryProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Talking Head Short Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging talking-head podcast short videos with
              eye-catching visuals, helping content stand out and connect with
              the audience. Here are some of my favorite projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {talkingHeadShortProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Skeleton Animation Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging real estate animations that showcase properties
              in a visually appealing way, helping buyers and clients better
              visualize spaces, features, and locations. Here are some of my
              favorite real estate animation projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {skeletonProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Podcast Short Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging graphic designs for podcast short videos, using
              eye-catching visuals to make content stand out and connect with
              the audience. Here are some of my favorite projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {podcastProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Real Estate Animation Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging real estate animations that showcase properties
              in a visually appealing way, helping buyers and clients better
              visualize spaces, features, and locations. Here are some of my
              favorite real estate animation projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {realEstateProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Map Animation Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I design visually compelling map animations that bring geography
              and stories to life, helping audiences easily understand
              locations, routes, and global insights. Here are some of my
              favorite map animation projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {mapProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="clash-grotesk text-gradient mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              LONG FORM CONTENT CREATION
            </h2>
            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              IRL Vlog Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging, high impact IRL vlog videos that tell authentic
              stories and enhance digital media presence. My focus is on strong
              storytelling, smooth pacing, and maintaining audience engagement
              throughout the content.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {vlogProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".mp4") ? (
                              <video
                                src={project.image}
                                muted
                                controls
                                preload="metadata"
                                onLoadedData={(e) => {
                                  const video = e.currentTarget;
                                  video.currentTime = 0.5;
                                }}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-0 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Talking Head Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging, high impact talking head videos that highlight
              expertise, capture audience attention, and strengthen digital
              media presence. My focus is on clean edits, strong pacing, and
              maximizing viewer retention.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {talkingHeadProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {/* <Link href={project.href} target="_blank" passHref> */}
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                          {/* </Link> */}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {/* {project.description} */}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Faceless Documentary Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging, high impact faceless documentary videos that
              deliver compelling storytelling and strengthen digital media
              presence. My focus is on clear narrative flow, strong visuals, and
              audience retention across long form content.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {documentaryProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                muted
                                controls
                                preload="metadata"
                                onLoadedData={(e) => {
                                  const video = e.currentTarget;
                                  video.currentTime = 0.5;
                                }}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-0 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              SAAS Product Launch Video
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging motion design and animations for videos,
              websites, and digital media, focusing on visually compelling and
              interactive storytelling. This includes SaaS product launch videos
              and other high impact brand content designed to capture attention
              and communicate ideas clearly.
            </p>
            {/* Carousel */}
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {videoProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {/* <Link href={project.href} target="_blank" passHref> */}
                          {project.image.endsWith(".webm") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                          {/* </Link> */}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {/* {project.description} */}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              2D Animation
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create visually engaging and high impact 2D animations for
              digital media that strengthen brand identity and boost audience
              engagement. My work focuses on clear storytelling, smooth motion,
              and visually appealing design across various platforms.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {animationProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {/* <Link href={project.href} target="_blank" passHref> */}
                          {project.image.endsWith(".webm") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                          {/* </Link> */}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {/* {project.description} */}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              Gaming Videos
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create engaging, high impact gaming videos that showcase
              gameplay, captivate audiences, and enhance digital media presence.
              My focus is on dynamic editing, strong pacing, and maximizing
              viewer engagement throughout the content.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {gamingProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {/* <Link href={project.href} target="_blank" passHref> */}
                          {project.image.endsWith(".webm") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                          {/* </Link> */}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {/* {project.description} */}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="clash-grotesk text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              2D & 3D INTRO/OUTRO
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create high-impact 2D & 3D intro/outro videos that captivate
              audiences, enhance branding, and elevate digital media presence.
              Here are some of my favorite intro/outro projects.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {introOutroProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {/* <Link href={project.href} target="_blank" passHref> */}
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                          {/* </Link> */}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {/* {project.description} */}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="clash-grotesk text-gradient mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              3D PROJECTS
            </h2>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              3D Environment Model
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create high quality 3D models for environments, focusing on
              visually compelling design and realistic detail. My work helps
              bring ideas to life through immersive visuals that enhance
              storytelling and elevate digital content.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {environmentProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>

            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              3D Character Model
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create high quality 3D models for characters, focusing on
              visually compelling design and realistic detail. My work helps
              bring ideas to life through immersive visuals that enhance
              storytelling and elevate digital content.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {characterProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/4">
                      <Card id="title">
                        <CardHeader className="p-6">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="h-[500px] w-[280px] rounded-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
            
            <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight tracking-tighter xl:text-4xl">
              2D Animated Banner For Social Media
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I create high impact 2D animated banners for platforms like
              Discord and other social media, designed to capture attention and
              strengthen brand identity. My work focuses on eye catching
              visuals, smooth motion, and optimized designs tailored for digital
              platforms.
            </p>
            <div className="mt-4">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {bannerProjects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          {project.image.endsWith(".mp4") ? (
                            <video
                              src={project.image}
                              muted
                              controls
                              preload="metadata"
                              onLoadedData={(e) => {
                                const video = e.currentTarget;
                                video.currentTime = 0.5;
                              }}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter"></CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-2 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-10">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="https://discord.com/users/1430976728041259218" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
