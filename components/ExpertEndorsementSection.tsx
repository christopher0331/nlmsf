import Image from "next/image";

const ENDORSEMENTS = [
  {
    image: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-pollack.jpg",
    alt: "Dr. Raphael Pollock",
    name: "Dr. Raphael Pollock, M.D., Ph.D",
    title: "James Cancer Center, Ohio State Univ",
    quote:
      "The NLSMF provides a vital link between the community, including LMS patients, and the oncology researchers who work tirelessly to help develop a better understanding of this rare disease...",
    flip: false,
  },
  {
    image: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-Singh.jpg",
    alt: "Dr. Arun Singh",
    name: "Arun Singh, M.D.",
    title: "Associate Professor, Sarcoma Service",
    quote:
      "The National Leiomyosarcoma Foundation is an important organization that strives to gather a critical mass of patients, scientists, patient advocates and physicians to learn more about this rare disease...",
    flip: true,
  },
];

export default function ExpertEndorsementSection() {
  return (
    <section
      className="py-16 px-6 bg-[#fafafa] md:py-12 md:px-4"
      aria-label="Expert endorsements"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        {ENDORSEMENTS.map((expert, index) => (
          <div
            key={index}
            className={`flex items-center gap-8 bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#eee] max-md:flex-col max-md:text-center max-md:p-6 ${
              expert.flip ? "flex-row-reverse" : ""
            }`}
          >
            <div className="shrink-0 w-40 h-40 rounded-full overflow-hidden border-4 border-[#f0f0f0] max-md:w-[140px] max-md:h-[140px]">
              <Image
                src={expert.image}
                alt={expert.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover block"
                sizes="(min-width: 768px) 160px, 140px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[1.35rem] font-bold text-gray-800 mb-1.5 leading-snug">
                {expert.name}
              </h3>
              <p className="text-[0.95rem] text-gray-500 font-medium m-0 mb-4">
                {expert.title}
              </p>
              <blockquote className="m-0 text-[1.05rem] leading-relaxed text-gray-700 italic relative pl-8 border-l-4 border-[#5a4da0] max-md:pl-0 max-md:border-l-0 max-md:text-left">
                {expert.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
