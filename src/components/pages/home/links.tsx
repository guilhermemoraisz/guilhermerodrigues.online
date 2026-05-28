export function HomeLinks() {
  const socialLinks = [
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

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {socialLinks.map((link) => (
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
