"use client";
import {
  BsGlobe,
  BsPhone,
  BsDatabase,
  BsServer,
  BsPalette,
  BsCheckCircle,
} from "react-icons/bs";

const services = [
  {
    icon: <BsGlobe size={28} className="text-blue-500" />,
    title: "Web Development Services",
    description:
      "Custom web solutions tailored to your business needs with responsive design and SEO optimization.",
    technologies: ["React", "Node.js", "Django", "WordPress"],
    features: [
      "Responsive Design",
      "SEO Optimization",
      "E-commerce Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <BsPhone size={28} className="text-emerald-600" />,
    title: "Mobile App Development",
    description:
      "Native and hybrid mobile applications for iOS and Android with seamless performance.",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
    features: [
      "Cross-platform",
      "User-friendly UI",
      "Performance Optimized",
      "App Store Deployment",
    ],
  },
  {
    icon: <BsDatabase size={28} className="text-green-500" />,
    title: "Data Management Services",
    description:
      "Robust data solutions ensuring accuracy, accessibility, and real-time analytics.",
    technologies: ["SQL", "NoSQL", "Hadoop", "Cloud Storage"],
    features: [
      "Data Warehousing",
      "Real-time Analytics",
      "Data Governance",
      "Migration Services",
    ],
  },
  {
    icon: <BsServer size={28} className="text-purple-500" />,
    title: "DevOps & Server Management",
    description:
      "Streamlining development and operations for faster, more reliable delivery.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure"],
    features: [
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "24/7 Monitoring",
      "Cloud Migration",
    ],
  },
  {
    icon: <BsPalette size={28} className="text-orange-500" />,
    title: "UI/UX Design & Development",
    description:
      "Designing intuitive interfaces and providing expert developers for hire.",
    technologies: ["Figma", "Adobe XD", "React", "Vue.js"],
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Front-end Development",
    ],
  },
  {
    icon: <BsCheckCircle size={28} className="text-orange-500" />,
    title: "Testing & QA",
    description:
      "Ensuring software quality through thorough testing and quality assurance.",
    technologies: ["Selenium", "Jest", "Cypress", "Postman"],
    features: [
      "Automated Testing",
      "Manual Testing",
      "Bug Tracking",
      "Performance Testing",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
          Our Services
        </h2>
        <p className="text-center text-[#111827] text-[15px] mb-10">
          Comprehensive IT solutions designed to accelerate your business growth
          <br />
          and digital transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-6 rounded-xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 flex flex-col h-full"
            >
              <div className="mb-3">{service.icon}</div>

              <h5 className="font-semibold text-lg text-slate-900">
                {service.title}
              </h5>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>

              <h6 className="font-semibold mt-4 text-sm text-slate-800">
                Technologies:
              </h6>
              <div className="flex flex-wrap gap-2 mt-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium border border-gray-400 rounded-full bg-gray-100 text-gray-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h6 className="font-semibold mt-4 text-sm text-slate-800">
                Key Features:
              </h6>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <button className="w-full bg-[#5BC2A7] text-black font-medium px-4 py-2 rounded-lg ">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
