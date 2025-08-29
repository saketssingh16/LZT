import Image from "next/image";
import { Eye,  Target, Award, CheckCircle} from "lucide-react";


export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Your <br /> Digital Transformation
          </h1>
          <p className="mt-4 text-black-200 font-inter text-lg">
            Specializing in Web Development, Mobile App Development, Data
            Management, DevOps, and UI/UX Design
          </p>

          <div className="flex gap-8 mt-6 text-[#5BC2A7] font-semibold">
            <div>
              <p className="text-2xl">1000+</p>
              <p className="text-black font-inter text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl">100+</p>
              <p className="text-black font-inter text-sm">Expert Developer</p>
            </div>
            <div>
              <p className="text-2xl">10+</p>
              <p className="text-black font-inter text-sm">Industries Served</p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-[#5BC2A7] font-medium text-black px-6 py-3 rounded-lg shadow-md">
              Get Started Today →
            </button>
            <button className="flex items-center gap-2 border font-medium text-black border-gray px-6 py-3 rounded-lg">
               Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/img/hero-image.png"
            alt="Hero"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-6 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          About LogZero Technologies
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 font-inter">
          We are a leading IT solutions company dedicated to empowering
          businesses through innovative technology solutions and exceptional
          service delivery.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
              <Target className="text-blue-500 text-lg"></Target>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Our Mission</h3>
              <p className="text-gray-600">
                To deliver cutting-edge technology solutions that drive business
                growth and digital transformation for our clients worldwide.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
              <Eye className=""></Eye>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Vision</h3>
              <p className="text-gray-600 font-inter">
                To be the global leader in innovative IT solutions, recognized
                for excellence in service delivery and client satisfaction.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-full">
              <Award className="text-[#FFEDD5;] text-lg">💡</Award>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Our Values</h3>
              <p className="text-gray-600">
                Innovation, quality, integrity, and client success form the
                foundation of everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/img/about.png"
            alt="Mission"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-6 lg:px-20 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-blue-600 text-3xl">
            <Target className="text-blue-600 text-3xl mx-auto" />
          </div>
          <h4 className="mt-2 font-semibold">8+ Years Experience</h4>
          <p className="text-gray-600 text-sm">
            Delivering exceptional IT solutions since 2016
          </p>
        </div>
        <div>
          <div className="text-green-600 text-3xl">
         <Award className="text-green-600 text-3xl mx-auto" />
          </div>
          <h4 className="mt-2 font-semibold">ISO 9001 Certified</h4>
          <p className="text-gray-600 text-sm">
            Quality management system certification
          </p>
        </div>
        <div>
          <div className="text-orange-600 text-3xl">
            <Target className="text-orange-600 text-3xl mx-auto" />

          </div>
          <h4 className="mt-2 font-semibold">Industry Recognition</h4>
          <p className="text-gray-600 text-sm">
            Multiple awards for excellence in service delivery
          </p>
        </div>
      </div>
    </section>
  );
}
