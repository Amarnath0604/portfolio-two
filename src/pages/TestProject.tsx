import { ProjectCards } from "@/components/ui/animated-project-cards"

interface Project {
  id: string
  title: string
  pricePerHour: string
  status: string
  categories: string[]
  description: string[]
  location: string
  timeAgo: string
  logoColor: string
  logoIcon: string
}

export function DemoProjects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Humworld Services",
      pricePerHour: "Web Developer",
      status: "Mar 2025 - Present",
      categories: ["Full-time"],
      description:
        ["This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs."],
      location: "Chennai",
      timeAgo: "2h ago",
      logoColor: "bg-orange-500",
      logoIcon: "🔄",
    },
    {
      id: "2",
      title: "Closerlook Digital",
      pricePerHour: "Web Developer",
      status: "May 2022 - Mar 2025",
      categories: ["Full-time"],
      description: ["Built and enhanced telehealth application using JavaScript and healthcare workflows.",
        "Integrated Amazon Chime SDK for secure real-time video consultations and appointments.", 
        "Optimized performance through code refactoring, debugging, and frontend development best practices.", 
        "Extended accessibility support across all components"],
      location: "Coimbatore",
      timeAgo: "5h ago",
      logoColor: "bg-gray-700",
      logoIcon: "⬇",
    },
    {
      id: "3",
      title: "Closerlook Digital",
      pricePerHour: "Web Developer Intern",
      status: "Oct 2021 - Apr 2022",
      categories: ["Remote", "Full-time"],
      description: ["Complete UI/UX design overhaul for modern web application with responsive design principles."],
      location: "Coimbatore",
      timeAgo: "1d ago",
      logoColor: "bg-blue-500",
      logoIcon: "✓",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#E8EAEC]">
    <div className="mt-10">
      <ProjectCards projects={projects as any} />
    </div>
    </div>
  )
}
