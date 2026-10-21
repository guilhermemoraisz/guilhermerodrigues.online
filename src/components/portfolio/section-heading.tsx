export function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <h2 id={id} className="editorial-label flex items-baseline gap-3 pt-1">
      <span aria-hidden="true" className="text-muted-foreground">{number}</span>
      {title}
    </h2>
  );
}
