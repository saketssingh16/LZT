"use client";
import React from "react";
import Image from "next/image";

/* ------------------ Achievements Section ------------------ */

const rowOne = [
  {
    icon: "/assets/icons/check.svg",
    big: "1000+",
    title: "Projects Successfully Delivered",
    text: "From startups to large enterprises, we deliver solutions that drive business growth",
  },
  {
    icon: "/assets/icons/users.svg",
    big: "100+",
    title: "Skilled Web Developers",
    text: "Our team consists of experts in every aspect of web development and IT solutions",
  },
  {
    icon: "/assets/icons/award.svg",
    big: "99.9%",
    title: "Client Satisfaction Rate",
    text: "We maintain the highest standards of service quality and client satisfaction",
  },
  {
    icon: "/assets/icons/trend.svg",
    big: "24/7",
    title: "Support & Monitoring",
    text: "Round-the-clock support and monitoring to ensure your systems run smoothly",
  },
];

const rowTwo = [
  {
    big: "11+ Years",
    title: "Industry Experience",
    text: "Delivering innovative solutions since 2016",
  },
  {
    big: "50+ Countries",
    title: "Global Reach",
    text: "Serving clients worldwide across continents",
  },
  {
    big: "ISO 9001",
    title: "Quality Certified",
    text: "International quality management standards",
  },
];

/* ------------------ Get In Touch Section ------------------ */


const IconWrap = ({ src, alt }) => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
    <Image src={src} 
    alt={alt}
     width={40}
     height={40} />
  </div>
);

export default function CompanyPage() {
  return (
    <>
      <section className="bg-[#07352f] text-[#e8f2ee] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Our Achievements
            </h2>
            <p className="text-[#b9d2cc] text-base">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </header>

          {/* Row One */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 justify-between">
            {rowOne.map((item, i) => (
              <article
                key={`r1-${i}`}
                className="bg-[#0e3f38] border border-white/10 rounded-lg p-6 h-[271px] flex flex-col"
              >
                <div className="flex items-start flex-col gap-3">
                  <div>
                    <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[#6ed2b0]/70 shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xl font-extrabold">{item.big}</div>
                      <div className="text-xl font-semibold text-white mb-1">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-s text-[#c3d6d1] leading-snug mt-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row Two */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
            {rowTwo.map((item, i) => (
              <article
                key={`r2-${i}`}
                className="bg-[#0e3f38] border border-white/10 rounded-lg p-4 h-[150px] gap-4"
              >
                <div className="flex flex-col space-y-[8px]">
                  <div className="text-xl font-extrabold space-y-1.5">
                    {item.big}
                  </div>
                  <div className="text-xl font-semibold text-white mb-1 ">
                    {item.title}
                  </div>
                  <p className="text-s text-[#c3d6d1] leading-snug ">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-7">
            <a
              href="#contact"
              className="bg-[#6ed2b0] text-[#072e29] px-7 py-3 rounded-lg text-base font-bold max-w-[338px] flex items-center justify-center hover:brightness-95 transition"
            >
              Join Our Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-5">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900">
              Get In Touch
            </h2>
            <p className="mx-auto w-[616px] h-[50px] text-[#111827] font-normal">
              Ready to transform your business? Let’s discuss your project and
              explore how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left - Form */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-[20px] font-semibold text-slate-900">
                Schedule a Free Consultation
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your First Name"
                      className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your @email.com"
                      className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Phone Number{" "}
                      <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 95674 78449"
                      className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Project Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 6–8 weeks"
                      className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project and requirements..."
                    className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                  />
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-sm font-semibold text-black hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Submit Inquiry
                  </button>
                  <p className="mx-auto w-[616px] h-[50px] text-[#111827] font-normal leading-snug">
                    <span className="mt-0.5">🔒</span>
                    Your information is secure and will only be used to contact{" "}
                    <br />
                    <span className="pl-[118px]">you about your inquiry</span>
                  </p>
                </div>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-6 text-[20px] font-semibold text-slate-900">
                Contact Information
              </h3>
              <ul className="space-y-5 ">
                <li className="flex items-start gap-4 p-2  ">
                  <IconWrap src="/assets/icons/phone.svg" alt="Phone" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700">
                      Phone Number
                    </p>
                    <p className="truncate text-slate-800">+91 11 40789940</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <IconWrap src="/assets/icons/email.svg" alt="Mail" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <div className="space-y-0.5">
                      <p className="break-all text-slate-800">
                        info@logzerotechnologies.com
                      </p>
                      <p className="break-all text-slate-800">
                        sales@logzerotechnologies.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <IconWrap src="/assets/icons/address.svg" alt="Address" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700">
                      Address
                    </p>
                    <p className="text-slate-800">
                      Pegasus Tower, A-10, 8th Floor, Sector-68,
                      <br />
                      Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <IconWrap src="/assets/icons/businesshour.svg" alt="Business Hours" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700">
                      Business Hours
                    </p>
                    <div className="text-slate-800">
                      <p>Monday–Friday: 24x7 Open</p>
                      <p>Saturday: Closed</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


