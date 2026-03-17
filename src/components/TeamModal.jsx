import { motion, AnimatePresence } from "framer-motion";

export default function TeamModal({ activeCategory, onClose, isMobile }) {
  if (!activeCategory) return null;

  // Executive Partners Data
  const executivePartners = activeCategory.title === "Executive Partners" ? [
    {
      src: activeCategory.photos[0].src,
      name: "Erika Antoinette Paala",
      role: "Executive Partner",
      specialty: "Social Media and Graphic Design Specialist",
      bio: "Erika helps brands stand out online through eye-catching visuals and engaging social media content. She combines creativity and strategy to build a strong and consistent brand presence across digital platforms.",
    },
    {
      src: activeCategory.photos[1].src,
      name: "Bernalyn Malabanan",
      role: "Executive Partner",
      specialty: "Project Management Specialist",
      bio: "Bernalyn ensures that projects run smoothly from start to finish. With a strong focus on organization, timelines, and communication, she keeps teams aligned and tasks moving forward efficiently.",
    },
    {
      src: activeCategory.photos[2].src,
      name: "Gennevie Glinogo",
      role: "Executive Partner",
      specialty: "Social Media and Graphic Design Specialist",
      bio: "Gennevie supports businesses in growing their online presence through creative graphics and well-planned social media content. She focuses on delivering visuals that attract attention and connect with the right audience.",
    },
    {
      src: activeCategory.photos[3].src,
      name: "Fatima Mendoza",
      role: "Executive Partner",
      specialty: "Customer Experience Specialist",
      bio: "Fatima is dedicated to delivering excellent customer support and building positive client relationships. She ensures that every customer interaction is handled with professionalism, empathy, and care.",
    },
    {
      src: activeCategory.photos[4].src,
      name: "Kriselda Dominique Yumul",
      role: "Executive Partner",
      specialty: "Marketing Strategy Specialist",
      bio: "Kriselda focuses on developing marketing strategies that help businesses attract and convert the right audience. She works closely with clients to create campaigns that support growth and brand visibility.",
    },
  ] : [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className={`bg-white rounded-xl w-full ${
            isMobile ? "max-w-md" : "max-w-6xl"
          } cursor-auto relative z-[100000]`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-3 text-xl font-bold"
            onClick={onClose}
          >
            ×
          </button>

          <div
            className="overflow-y-auto p-6"
            style={{
              maxHeight: isMobile
                ? "calc(100vh - 64px - 72px)"
                : "calc(100vh - 64px - 32px)",
            }}
          >
            {/* Leadership Team */}
            {activeCategory.leaders ? (
              <>
                <div className="text-center mb-10">
                  <h3 className="text-[24px] font-semibold text-primary mb-4">
                    Meet the Leadership Team
                  </h3>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto">
                    Our agency is built on strong leadership, clear vision, and
                    a commitment to excellence. At the core are the Founder and
                    Co Founder guiding operations.
                  </p>
                </div>

                <div
                  className={`grid gap-10 ${isMobile ? "grid-cols-1" : "grid-cols-2"} items-start`}
                >
                  {activeCategory.leaders.map((leader, i) => (
                    <div key={i} className="text-center">
                      <div className="w-full flex justify-center mb-2">
                        <img
                          src={leader.modalImage || leader.src}
                          alt={leader.name}
                          className={`rounded-lg ${isMobile ? "w-72 h-auto" : "w-80 h-[500px]"}`}
                          style={{ objectPosition: "top", objectFit: "contain" }}
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-primary mb-1">
                        {leader.name}
                      </h4>
                      <p className="text-accent text-sm font-medium mb-1">
                        {leader.role}
                      </p>
                      <p className="text-neutral-muted text-sm leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : executivePartners.length > 0 ? (
              <>
                {/* Executive Partners Intro */}
                <div className="text-center mb-10">
                  <h3 className="text-[24px] font-semibold text-primary mb-4">
                    Meet Our Executive Partners
                  </h3>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto">
                    Behind every successful business is a strong and reliable team. Our Executive Partners are highly skilled professionals who support our clients in different areas of business operations, marketing, customer experience, and creative services.
                  </p>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto mt-4">
                    Each Executive Partner brings their own expertise and dedication to helping businesses stay organized, grow their presence, and operate more efficiently. We work collaboratively with our clients to provide dependable support and solutions that allow business owners to focus on what matters most.
                  </p>
                </div>

                <div
                  className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
                >
                  {executivePartners.map((partner, i) => (
                    <div key={i} className="text-center">
                      <div className="w-full flex justify-center mb-2">
                        <img
                          src={partner.src}
                          alt={partner.name}
                          className={`rounded-lg ${isMobile ? "w-72 h-auto" : "w-80 h-[400px]"}`}
                          style={{ objectFit: "contain", objectPosition: "top" }}
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-primary mb-1">
                        {partner.name}
                      </h4>
                      <p className="text-accent text-sm font-medium mb-1">
                        {partner.role}
                      </p>
                      <p className="text-accent text-sm font-medium mb-2">
                        {partner.specialty}
                      </p>
                      <p className="text-neutral-muted text-sm leading-relaxed">
                        {partner.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // Default Photos Grid
              <div
                className={`grid gap-4 ${isMobile ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}
              >
                {activeCategory.photos.map((photo, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={photo.src}
                      alt={photo.name}
                      className={`w-full ${isMobile ? "h-32" : "h-40"} object-cover rounded`}
                    />
                    <p className="text-sm font-medium mt-1">{photo.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Text */}
            <div className="p-6 text-center mt-6">
              <h3 className="font-heading text-xl text-primary mb-2">
                {activeCategory.title}
              </h3>
              <p className="text-neutral-muted text-sm leading-relaxed">
                {activeCategory.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}