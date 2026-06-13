import type { Messages } from "@/lib/i18n";
import { HomeLinks } from "./links";

interface HomeDescriptionProps {
  messages: Messages;
}

export function HomeDescription({ messages }: HomeDescriptionProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">{messages.hero.title}</h1>
      <div className="flex gap-8 max-[720px]:flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">{messages.hero.subtitle}</p>
          <p className="opacity-60">{messages.hero.bio}</p>
        </div>

        <HomeLinks resumeLabel={messages.links.resume} />
      </div>
    </div>
  );
}
