import Image from "next/image";

const defaultLogos = [
  { id: 1, src: "/assets/img/logo-staylearning.png", alt: "Stay Learning" },
  { id: 2, src: "/assets/img/logo-emax.png", alt: "Company 2" },
  { id: 3, src: "/assets/img/logo-solutions.png", alt: "Solutions" },
  { id: 4, src: "/assets/img/logo-prakash.png", alt: "Prakash" },
  { id: 5, src: "/assets/img/logo-resource.png", alt: "Resource Centre" },
];

export default function Trusted ({ logos = defaultLogos }) {
  return (
    <section className="bg-[#003d31] py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8 text-white">
            <h4 className="text-[24px] md:text-[28px] font-normal leading-[1.4] text-center text-white mb-2">
            Trusted by Leading Companies
          </h4>
          <p className="text-base opacity-85">
            We've partnered with industry leaders across various sectors
          </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3
        justify-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="bg-white rounded-[10px] flex items-center justify-center h-36 w-full max-w-[230px] p-4 shadow-sm">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="max-w-[85%] max-h-[75%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


