import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center py-20">
        <div className="mb-12">
          <video
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            src="/lovable-uploads/ocean-2.mp4"
            className="absolute top-20 left-0 w-screen h-screen object-cover"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-5xl font-bold text-center drop-shadow-lg mt-20">
              <h1 className="text-white text-6xl md:text-7xl font-Bold mb-6 leading-tight">
                Dr. Serena Blake
              </h1>

              <h2 className="text-2xl md:text-3xl text-white-600 mb-4 font-normal">
                Licensed Clinical Psychologist, PsyD
              </h2>

              <p className="text-xl text-white-500 mb-12 max-w-2xl mx-auto font-light">
                Providing compassionate, evidence-based therapy to help you
                navigate life's challenges
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button
                  onClick={scrollToContact}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium shadow-md transition-all duration-200"
                >
                  Schedule Consultation
                </Button>
                <p className="text-white-400 text-sm font-light">
                  In-person & telehealth sessions available
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-3xl font-light text-600 mb-2">8+</h3>
                  <p className="text-600 text-sm font-medium tracking-wide">
                    Years of Experience
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-light text-600 mb-2">500+</h3>
                  <p className="text-600 text-sm font-medium tracking-wide">
                    Clients Served
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-light text-600 mb-2">CA</h3>
                  <p className="text-600 text-sm font-medium tracking-wide">
                    Licensed in California
                  </p>
                </div>
              </div>
            </h1>
          </div>

          {/* Optional: Overlay for darkening */}
          <div className="absolute inset-0 bg-black/50 z-0 mt-20 h-[90%]" />

          <div className="absolute flex gap-3 -top-2 left-6 z-20">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="h-16 w-auto mt-4"
            />
            {/* <span className="text-3xl font-semibold  text-[#75430E]">
              Dr. Serena Blake, PsyD
            </span> */}
            <img
              src="/lovable-uploads/name.png"
              alt="Logo"
              className="h-40 w-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
