"use client";
import Image from "next/image";


const features = [
  {
    title: "Proven Expertise",
    description:
      "Our team brings years of experience and deep technical knowledge across multiple technologies and industries.",
    icon: "/assets/icons/expertise-icon.svg",
  },
  {
    title: "On-Time Delivery",
    description:
      "We pride ourselves on meeting deadlines and delivering projects on schedule without compromising quality.",
    icon: "/assets/icons/ontime-icon.svg",
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 customer support and dedicated project managers ensure smooth communication throughout your project.",
    icon: "/assets/icons/support-icon.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensure your solutions meet the highest standards.",
    icon: "/assets/icons/qa-icon.svg",
  },
  {
    title: "Cutting-Edge Tech",
    description:
      "We stay ahead of technology trends to deliver modern, scalable, and future-proof solutions.",
    icon: "/assets/icons/tech-icon.svg",
  },
  {
    title: "Long-term Partnership",
    description:
      "We build lasting relationships with our clients, providing ongoing support and continuous improvement.",
    icon: "/assets/icons/partnership-icon.svg",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-left ">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
      <Image src={icon} 
      alt={title}
        width={32}
        height={32} 
       className="w-6 h-6" />
    </div>
    <h5 className="text-lg font-semibold text-gray-900 mb-2">{title}</h5>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose LogZero Technologies?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-[Open_Sans]">
          We combine technical excellence with exceptional service to deliver
          solutions that drive real business results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
