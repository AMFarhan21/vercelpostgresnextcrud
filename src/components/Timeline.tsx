import { getPosts } from "@/actions/actions";
import { Building2, Calendar } from "lucide-react";
import PostCard from "./PostCard";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
  },
];

type Posts = Awaited<ReturnType<typeof getPosts>>

interface TimelineProps {
  posts: Posts
}

export default function Timeline({ posts }: TimelineProps) {
  return (
    <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
      <div className="font-bold text-4xl justify-center flex">
              FEED
            </div>
      <div className="relative ml-3">

        {posts?.sort((a, b) => a.id.localeCompare(b.id)).reverse().map((post) => (
          <PostCard key={post.id} post={post} />
        )
        )}
      </div>
    </div>
  );
}
