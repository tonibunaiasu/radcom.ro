export function PartnersCarousel() {
  const partners = [
    { name: "2K Telecom", logo: "/partners/2k-telecom.jpg" },
    { name: "IMI Mobile", logo: "/partners/imi-mobile.jpg" },
    { name: "Telemedia România", logo: "/partners/telemedia.jpg" },
    { name: "Orange România", logo: "/partners/orange.png" },
    { name: "Vodafone România", logo: "/partners/vodafone.jpg" },
    { name: "STB București", logo: "/partners/stb.jpeg" },
  ];

  return (
    <div className="w-full overflow-hidden bg-secondary py-8">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex animate-scroll">
        {/* First set of logos */}
        {partners.map((partner, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center mx-12 md:mx-16 lg:mx-20 flex-shrink-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {partners.map((partner, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center mx-12 md:mx-16 lg:mx-20 flex-shrink-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
