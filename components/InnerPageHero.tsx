type InnerPageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function InnerPageHero({ title, subtitle }: InnerPageHeroProps) {
  return (
    <section
      className="py-10 px-6 border-b border-gray-200"
      style={{
        background: "linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%)",
      }}
      aria-label="Page header"
    >
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-extrabold text-[#1e293b] m-0 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[1.1rem] text-[#64748b] mt-2 mb-0 leading-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
