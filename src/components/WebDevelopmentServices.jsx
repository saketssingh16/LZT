"use client"
import Image from "next/image";

export default function WebDevelopment() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 py-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Web Development <br className="hidden sm:block" /> Service
            </h1>

            <p className="mt-3 text-gray-700 text-lg font-normal">
              Truly committed to the success of your <br /> web development
              project.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed max-w-[48ch] font-normal">
              Whether you're building a billion-dollar SaaS or a sleek
              e-commerce site, we deliver websites that outperform industry
              standards—every time.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-[#5BC2A7] px-5 py-3 text-black font-medium shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#5BC2A7]/40">
                Request a Strategy Session
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300/40">
                See Our Work
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/img/Subtract.svg"
              alt="Team working on laptop"
              width={540}
              height={380}
              priority
              className="w-full max-w-[540px] h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-900">
            What We Do – Powerful Web Development Capabilities
          </h3>

          <div className="mx-auto mt-8 rounded-2xl  p-4 md:p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <Image
                    src="/assets/icons/web.svg"
                    alt="Custom Dev"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Custom Web Development
                </h4>
                <p className="mt-2 text-gray-600">
                  Forget cookie-cutter. Get tailored websites that solve real
                  business challenges.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                  <Image
                    src="/assets/icons/mobile.svg"
                    alt="Mobile Design"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Mobile-First & Responsive Design
                </h4>
                <p className="mt-2 text-gray-600">
                  Design that looks and works great on every device. 70% of
                  traffic is mobile.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <Image
                    src="/assets/icons/e-commerce.svg"
                    alt="E-Commerce"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  E-Commerce Development
                </h4>
                <p className="mt-2 text-gray-600">
                  From Shopify to Magento and custom builds, we design solutions
                  that scale.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                  <Image
                    src="/assets/icons/webapp.svg"
                    alt="Web Apps"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Web Applications
                </h4>
                <p className="mt-2 text-gray-600">
                  SaaS, secure, enterprise-grade apps that help users and boost
                  efficiency.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-100">
                  <Image
                    src="/assets/icons/seo.svg"
                    alt="SEO"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  SEO-Ready & Speed-Optimized
                </h4>
                <p className="mt-2 text-gray-600">
                  Technical SEO + blazing speed = websites that rank higher.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100">
                  <Image
                    src="/assets/icons/crm.svg"
                    alt="CRM"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  CRM, ERP & SaaS Integration
                </h4>
                <p className="mt-2 text-gray-600">
                  Custom enterprise-grade systems that fuel your operations and
                  growth.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-100">
                  <Image
                    src="/assets/icons/market.svg"
                    alt="Marketplace"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Marketplace Development
                </h4>
                <p className="mt-2 text-gray-600">
                  Build multi-vendor platforms, B2B portals, and digital
                  marketplaces from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
