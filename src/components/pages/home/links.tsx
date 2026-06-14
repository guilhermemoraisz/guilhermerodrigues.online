interface HomeLinksProps {
  resumeLabel: string;
}

export function HomeLinks({ resumeLabel }: HomeLinksProps) {
  const links = [
    { label: "GitHub", url: "https://github.com/CndGui" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/guilhermemorais-dev/" },
    { label: resumeLabel, url: "/files/resume.pdf" },
  ];

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.url}>
            <div className="transform transition-transform hover:scale-105">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center rounded-md border px-4 py-2 font-semibold"
              >
                {link.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
