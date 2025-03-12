interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col gap-12 py-20 mx-auto max-w-7xl px-8">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-accent">{title}</h2>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
};

export default Section;
