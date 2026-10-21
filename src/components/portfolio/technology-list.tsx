export function TechnologyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] leading-5 text-muted-foreground">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
