interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12 text-accent">{title}</h2>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </section>
  );
};

export default Section;
