import { HomeLinks } from "./links";

export function HomeDescription() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Hey, I'm Guilherme Rodrigues</h1>
      <div className="flex gap-8 max-[720px]:flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">A Web Developer based in Goias, Brazil.</p>
          <p className="opacity-60">
            Full Stack Developer specialized in React and TypeScript on the front-end, and
            NestJS/Spring Boot on the back-end. Focused on building modern, scalable applications
            with clean code.
          </p>
        </div>

        <HomeLinks />
      </div>
    </div>
  );
}
