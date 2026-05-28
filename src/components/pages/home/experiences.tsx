import Image from "next/image";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  image: string;
}

export function HomeExperiences() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-lg">Experiences</p>

      <div className="flex flex-col gap-4">
        {EXPERIENCES_DATA.map((exp) => (
          <div
            key={exp.company}
            className="flex items-center gap-4 border-text/20 border-b px-4 py-2"
          >
            <Image
              unoptimized
              src={exp.image}
              alt={exp.company}
              width={56}
              height={56}
              className="rounded-md"
            />
            <div>
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-text/70">{exp.company}</p>
              <p className="text-sm text-text/50">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const EXPERIENCES_DATA: Experience[] = [
  {
    company: "CI&T",
    role: "Developer",
    duration: "Apr 2026 - Present",
    image: "/images/cit.png",
  },
  {
    company: "Puc GO",
    role: "Student",
    duration: "Oct 2024 - Present",
    image: "/images/puc-go.png",
  },
  {
    company: "Screen Network",
    role: "Software Engineer",
    duration: "Jan 2018 - Jan 2019",
    image: "/images/screen-network.png",
  },
];
