"use client";
import Image from "next/image";

const caseStudies = [
  {
    title: "Foodie Express - Web Design",
    subtitle: "Restaurant Chain",
    challenge:
      "Client needed a comprehensive food delivery platform to compete with major players in the market.",
    solution:
      "Developed a feature rich web app with real-time tracking, multiple payment options, and AI-powered recommendations.",
    results: [
      { value: "50K+", label: "Active Users" ,icon: "/assets/icons/users-icon.svg" },
      { value: "300%", label: "Order Increase" ,icon: "/assets/icons/increase-icon.svg" },
      { value: "4.8", label: "App Store Rating" ,icon: "/assets/icons/star-icon.svg" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    image: "/assets/img/foodie-express.png",
    width: 564,
    height: 383,
  },
  {
    title: "Health Tracker Pro - Website Creation",
    subtitle: "Healthcare Startup",
    challenge:
      "Creating a HIPAA-compliant health monitoring app with complex data visualization.",
    solution:
      "Built a secure, intuitive website with advanced analytics, wearable integration, and telemedicine features.",
    results: [
      { value: "25K+", label: "Patients", icon:"/assets/icons/users-icon.svg"  },
      { value: "85%", label: "Engagement Rate", icon: "/assets/icons/increase-icon.svg" },
      { value: "4.9", label: "App Store Rating", icon: "/assets/icons/star-icon.svg" },
    ],
    technologies: ["Flutter", "Firebase", "Google Fit API", "HealthKit"],
    image: "/assets/img/health-tracker.png",
    width: 564,
    height: 323,
  },
];

export default function SucessStory() {
  return (
    <section className="py-10 px-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Success Story
          </h2>
          <p className="text-[#555] max-w-[700px] mx-auto mb-10">
            Real projects, real results. See how we’ve helped businesses
            transform their ideas into successful mobile applications that drive
            growth and user engagement.
          </p>
        </div>

        {caseStudies.map((study, index) => (
          <div
            className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
              index === 1 ? "lg:flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="flex-shrink-0 max-w-[564px] w-full">
              <Image
                src={study.image}
                alt={study.title}
                width={study.width}
                height={study.height}
                className="rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-auto"
              />
            </div>

            <div
              className={`flex-1 ${
                index === 0 ? "text-left" : "text-left"
              }`}
            >
              <h3 className="text-[1.4rem] font-semibold">{study.title}</h3>
              <span className="text-[#1ea97c] font-medium block mb-5">
                {study.subtitle}
              </span>

              <div className="space-y-5">
                <p className="leading-relaxed">
                  <strong className="block">Challenge</strong>
                  {study.challenge}
                </p>
                <p className="leading-relaxed">
                  <strong className="block">Solution</strong>
                  {study.solution}
                </p>
                   <p className="leading-relaxed">
                  <strong className="block">Result</strong>
                  {}
                </p>
              </div>

             <div className="flex gap-10 my-5">
  {study.results.map((res, i) => (
    <div key={i} className="flex flex-col items-center text-center">
      <Image
        src={res.icon}
        alt={res.label}
        width={32} 
        height={32} 
        className="mb-2" 
         />
        <h4 className="text-[1.3rem] font-bold">{res.value}</h4>
        <p className="text-sm text-gray-600">{res.label}</p>
        </div>
         ))}
        </div>

              <div>
                <p className="font-medium mb-2.5">Technologies Used</p>
                <div
                  className={`flex flex-wrap gap-2.5`}
                >
                  {study.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#f0f0f0] py-[6px] px-[14px] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/"
                className={`inline-block mt-5 text-[#1ea97c] font-medium no-underline hover:underline `}
              >
                Read Full Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
