"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sophia White",
    role: "Assistant Backend Developer",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cursus nibh mauris, nec turpis orci lectus maecenas.
          Suspendisse sed magna eget nibh in turpis.`,
    img: "/assets/img/Ellipse 69.png",
    side: "left",
    icon: "/assets/icons/icon-left.svg",
    quoteIcon: "/assets/icons/quotes.svg", 
  },
  {
    id: 2,
    name: "Sophia White",
    role: "Assistant Backend Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    img: "/assets/img/Ellipse 69.png",
    side: "right",
    icon: "/assets/icons/icon-left-c.svg",
    quoteIcon: "/assets/icons/quotes.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h5>
          <span className="inline-block bg-[#5BC2A7] text-white px-6 py-2 rounded-full font-semibold text-sm">
            Testimonial
          </span>
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          See Why Our Clients Trust Us
        </h2>
        <p className="text-lg text-gray-600 mt-2 mb-12 leading-relaxed">
          Discover how our solutions have helped clients achieve success. Hear
          their <br /> stories and experiences with our services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl shadow-md p-6 text-left"
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 ${
                  t.side === "left" ? "-left-7" : "-right-7"
                }`}
              >
                <Image
                  src={t.icon}
                  alt=""
                  width={44}
                  height={44}
                  className="pointer-events-none"
                />
              </div>

              <div className="absolute top-6 right-6">
                <Image
                  src={t.quoteIcon}
                  alt="quote"
                  width={36}
                  height={36}
                />
              </div>

              <div className="flex items-center mb-6">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-3"
                />
                <div>
                  <h6 className="font-semibold text-gray-900">{t.name}</h6>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}