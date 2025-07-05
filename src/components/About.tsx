const About = () => {
  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.open("tel:+13235550192", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:serena@blakepsychology.com", "_self");
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-dark text-stone-700 mb-6">
            About Dr.Serena Blake
          </h2>
          <div className="w-19 h-px bg-slate-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-xl text-stone-700 leading-relaxed font-light">
              <p className="mb-8 text-lg">
                I believe that seeking therapy is one of the most courageous
                steps you can take toward healing and personal growth. My
                approach combines evidence-based therapeutic techniques with
                genuine compassion and understanding.
              </p>

              <p className="mb-8 text-lg">
                With over 8 years, 500+ sessions of clinical experience, I
                specialize in helping adults navigate anxiety, depression,
                relationship challenges, and trauma recovery. I hold a Doctor of
                Psychology (PsyD) degree and am licensed to practice in
                California.
              </p>

              <p className="mb-12 text-lg">
                My practice integrates cognitive-behavioral therapy,
                mindfulness-based approaches, and trauma-informed care to create
                a personalized treatment plan that honors your unique
                experiences and goals.Whether you meet me at Maplewood Drive
                office or connect virtually via Zoom, I am committed to creating
                a safe, supportive space for you to thrive.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow" onClick={handleLocationClick}>
                <h3 className="font-medium text-gray-800 mb-3 text-base">Office Location</h3>
                <p className="text-gray-600 text-sm font-light">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-gray-800 mb-3 text-base">Contact Information</h3>
                <p className="text-gray-600 text-sm font-light">
                  <span className="cursor-pointer hover:text-slate-600 transition-colors" onClick={handlePhoneClick}>
                    (323) 555-0192
                  </span>
                  <br />
                  <span className="cursor-pointer hover:text-slate-600 transition-colors" onClick={handleEmailClick}>
                    serena@blakepsychology.com
                  </span>
                </p>
              </div>
            </div> */}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/c2a705d8-f3ff-4f93-a285-74b036ae84ff.png"
                alt="Dr. Serena Blake in her office"
                className="shadow-xl w-full max-w-md mx-auto border border-gray-100"
              />
              {/* <div className="absolute -bottom-6 left-6 bg-white p-6 shadow-lg max-w-xs border border-gray-100">
                <p className="text-gray-600 italic font-light text-sm">
                  "Every individual has the capacity for healing and growth. My role is to provide 
                  the support and tools to help you discover your own strength."
                </p>
                <p className="text-slate-600 mt-3 font-medium text-sm">- Dr. Serena Blake</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
