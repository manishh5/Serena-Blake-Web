const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      subtitle: "Anxiety & Stress Management ",
      description:
        "Work through anxiety, depression, and stress using evidence-based approaches including cognitive-behavioral therapy and mindfulness techniques. We'll develop personalized coping strategies to help you regain control and find balance.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.9XHepuOBbSZt2SdWWeJJEAHaFL?r=0&w=1200&h=840&rs=1&pid=ImgDetMain&o=7&rm=3",
      fee: "$200 per session",
    },
    {
      title: "Couples Therapy",
      subtitle: "Relationship Counseling",
      description:
        "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection. Whether addressing current challenges or preventing future issues, we'll work together to build a healthier partnership.",
      image:
        "https://www.bing.com/images/blob?bcid=S-7pdm1OkKcItRnSIoEPfdm4xRcl.....8U",
      fee: "$220 per session",
    },
    {
      title: "Trauma Therapy",
      subtitle: "Trauma Recovery",
      description:
        "Heal from traumatic experiences using specialized approaches including EMDR and somatic therapy. We'll work at your pace to process difficult memories and develop resilience in a safe, supportive environment.",
      image:
        "https://melbournetherapycentre.com.au/wp-content/uploads/man-ptsd-trauma-sad-upset-talking-with-counsellor.jpg",
      fee: "$240 per session",
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-dark text-stone-700 mb-6">
            Areas of Expertise
          </h2>
          <div className="w-19 h-px bg-slate-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-medium text-stone-700 mb-2">
                  {service.title}
                </h3>
                <h4 className="text-sm font-medium text-stone-500 mb-4 tracking-wide">
                  {service.subtitle}
                </h4>

                <p className="text-stone-700 leading-relaxed mb-8 font-light text-medium">
                  {service.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-black">
                    {service.fee}
                  </span>
                  <button
                    onClick={() => handleLearnMore(service.title)}
                    className="text-slate-600 hover:text-slate-800 font-medium transition-colors text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800 p-10 max-w-10xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-light text-white mb-6">
              Insurance & Payment Options
            </h3>
            <p className="text-white font-light leading-relaxed">
              While I am not in-network with insurance providers, I provide
              detailed superbills for out-of-network reimbursement. Many clients
              receive partial to full reimbursement from their insurance
              company. Payment is accepted via cash, check, or card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
