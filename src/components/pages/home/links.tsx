export function HomeLinks() {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {SOCIAL_LINKS.map((link) => (
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

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/CndGui",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/CndGui/",
  },
  {
    label: "Resume",
    url: "/files/resume.pdf",
  },
];
