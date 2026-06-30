import { AnimatedHikeCard, Stat } from "@/components/card-25";
import { Clock, Zap, Mountain } from "lucide-react";

export default function BeSpokeDesignsProject() {
  const hikeProps = {
    title: "BeSpoke Designs",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ],
    stats: [
      {
        icon: <Clock className="h-4 w-4" />,
        label: "10+ Projects",
      },
      {
        icon: <Mountain className="h-4 w-4" />,
        label: "20+ Happy Clients",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: "100+ Designs",
      },
    ] as Stat[],
    description:
      "Hiking on a mountain blends physical challenge with natural beauty, offering sweeping views and a profound sense of accomplishment.",
    href: "#",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <AnimatedHikeCard {...hikeProps} />
    </div>
  );
}

export function SsrInfraProject() {
  const hikeProps = {
    title: "SSR Infra",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ],
    stats: [
      {
        icon: <Clock className="h-4 w-4" />,
        label: "20+ Projects",
      },
      {
        icon: <Mountain className="h-4 w-4" />,
        label: "50+ Happy Clients",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: "100+ Designs",
      },
    ] as Stat[],
    description:
      "Hiking on a mountain blends physical challenge with natural beauty, offering sweeping views and a profound sense of accomplishment.",
    href: "#",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <AnimatedHikeCard {...hikeProps} />
    </div>
  );
}

export function Zap6Project() {
  const hikeProps = {
    title: "Zap6 Autotronics",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ],
    stats: [
      {
        icon: <Clock className="h-4 w-4" />,
        label: "20+ Projects",
      },
      {
        icon: <Mountain className="h-4 w-4" />,
        label: "50+ Happy Clients",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: "100+ Designs",
      },
    ] as Stat[],
    description:
      "Hiking on a mountain blends physical challenge with natural beauty, offering sweeping views and a profound sense of accomplishment.",
    href: "#",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <AnimatedHikeCard {...hikeProps} />
    </div>
  );
}

export function CountriesDeck() {
  const hikeProps = {
    title: "SSR Infra",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ],
    stats: [
      {
        icon: <Clock className="h-4 w-4" />,
        label: "20+ Projects",
      },
      {
        icon: <Mountain className="h-4 w-4" />,
        label: "50+ Happy Clients",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: "100+ Designs",
      },
    ] as Stat[],
    description:
      "Hiking on a mountain blends physical challenge with natural beauty, offering sweeping views and a profound sense of accomplishment.",
    href: "#",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <AnimatedHikeCard {...hikeProps} />
    </div>
  );
}