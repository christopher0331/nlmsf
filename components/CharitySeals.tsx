import Image from "next/image";

type CharitySealsProps = {
  className?: string;
};

export default function CharitySeals({ className = "" }: CharitySealsProps) {
  return (
    <div
      className={`flex flex-row flex-wrap justify-center items-center gap-10 pt-8 ${className}`.trim()}
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-[12em] max-w-full md:w-[10em]"
        aria-label="GuideStar"
      >
        <Image
          src="https://media.nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
          alt="GuideStar Seal"
          width={240}
          height={240}
          className="w-full h-auto block object-contain"
          sizes="(min-width: 768px) 10rem, 12rem"
        />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-[25em] max-w-full md:w-[20em]"
        aria-label="Charity Navigator"
      >
        <Image
          src="/images/charityNavigator.png"
          alt="Charity Navigator"
          width={800}
          height={400}
          className="w-full h-auto block object-contain"
          sizes="(min-width: 768px) 20rem, 25rem"
        />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-[12em] max-w-full md:w-[10em]"
        aria-label="Top Rated"
      >
        <Image
          src="https://media.nlmsf.org/wp-content/uploads/2021/03/Top-rated-Seal.jpg"
          alt="Top Rated Seal"
          width={240}
          height={240}
          className="w-full h-auto block object-contain"
          sizes="(min-width: 768px) 10rem, 12rem"
        />
      </a>
    </div>
  );
}
