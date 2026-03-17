import { motion, AnimatePresence } from "framer-motion";

export default function TeamModal({ activeCategory, onClose, isMobile }) {
  if (!activeCategory) return null;

  // Internal Team Data
  const internalTeam = activeCategory.title === "Internal Team" ? activeCategory.leaders : [];

  // Executive Partners Data
  const executivePartners = activeCategory.title === "Executive Partners"
    ? [
        { src: activeCategory.photos[0].src, name: "Erika Antoinette Paala", role: "Executive Partner", specialty: "Social Media & Graphic Design Specialist", bio: "Erika helps brands stand out online with eye-catching visuals and engaging social media content." },
        { src: activeCategory.photos[1].src, name: "Bernalyn Malabanan", role: "Executive Partner", specialty: "Project Management Specialist", bio: "Bernalyn ensures projects run smoothly with strong organization, timelines, and communication." },
        { src: activeCategory.photos[2].src, name: "Gennevie Glinogo", role: "Executive Partner", specialty: "Social Media & Graphic Design Specialist", bio: "Gennevie supports businesses in growing their online presence through creative graphics and social media." },
        { src: activeCategory.photos[3].src, name: "Fatima Mendoza", role: "Executive Partner", specialty: "Customer Experience Specialist", bio: "Fatima delivers excellent customer support and builds positive client relationships." },
        { src: activeCategory.photos[4].src, name: "Kriselda Dominique Yumul", role: "Executive Partner", specialty: "Marketing Strategy Specialist", bio: "Kriselda develops marketing strategies that help businesses attract and convert the right audience." },
      ]
    : [];

  // Technical & Web Developers Data
  const webDevelopers = activeCategory.title === "Technical & Web Developers"
    ? [
        { src: activeCategory.photos[0].src, name: "Tristan Jorge Cuartero", role: "Founder of NEXTGEN 9 IT Solutions", specialty: "Full Stack Developer", bio: "Leads the technical direction and ensures web solutions align with client business goals." },
        { src: activeCategory.photos[1].src, name: "Rodolfo Guce III", role: "Co-Founder of NEXTGEN 9 IT Solutions", specialty: "Lead Programmer for Dev Team 1 / Full Stack Developer", bio: "Oversees Dev Team 1, manages development projects, and ensures high-quality code delivery." },
        { src: activeCategory.photos[2].src, name: "Ricky Dolor", role: "Frontend Developer", specialty: "UI/UX Implementation", bio: "Builds responsive and visually appealing front-end interfaces." },
        { src: activeCategory.photos[3].src, name: "Florencio John Fonte III", role: "Project Leader", specialty: "Web Development Team Lead", bio: "Coordinates web development projects and ensures timely delivery." },
        { src: activeCategory.photos[4].src, name: "John Mark Espiritu", role: "UI/UX Designer", specialty: "User Experience & Design", bio: "Creates intuitive and user-friendly designs for websites and applications." },
        { src: activeCategory.photos[5].src, name: "Charles Lois Neil Viñalon", role: "Chief Marketing Officer", specialty: "Marketing & Strategy", bio: "Oversees marketing integration with web projects and ensures brand consistency online." },
        { src: activeCategory.photos[6].src, name: "Bejay Allen Macatangay", role: "Chief Financial Officer", specialty: "Finance & Budgeting", bio: "Manages budgets and ensures efficient allocation of resources." },
        { src: activeCategory.photos[7].src, name: "Joseph Rendon Cubio", role: "Lead Programmer for Dev Team 2", specialty: "Full Stack Developer", bio: "Manages Dev Team 2 and codes backend solutions to ensure technical excellence." },
        { src: activeCategory.photos[8].src, name: "Marvin Paul Orozco", role: "Full Stack Developer", specialty: "Backend & Frontend Developer", bio: "Builds scalable web applications with robust backend and intuitive frontend." },
        { src: activeCategory.photos[9].src, name: "Kharlo Keizy Pitman", role: "Support Programmer", specialty: "Technical Assistance", bio: "Provides debugging and technical support for development projects." },
      ]
    : [];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500, damping: 30, mass: 0.5 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.3 } }),
  };

  const renderTeamGrid = (team) => (
    <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
      {team.map((member, i) => (
        <motion.div key={i} className="text-center" variants={fadeUpVariants} initial="hidden" animate="visible" custom={i + 2}>
          <div className="w-full flex justify-center mb-2">
            <img src={member.src} alt={member.name} className={`rounded-lg ${isMobile ? "w-72 h-auto" : "w-80 h-[400px]"}`} style={{ objectFit: "contain", objectPosition: "top" }} />
          </div>
          <h4 className="font-semibold text-lg text-primary mb-1">{member.name}</h4>
          <p className="text-accent text-sm font-medium mb-1">{member.role}</p>
          {member.specialty && <p className="text-accent text-sm font-medium mb-2">{member.specialty}</p>}
          {member.bio && <p className="text-neutral-muted text-sm leading-relaxed">{member.bio}</p>}
        </motion.div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.15 } }} exit={{ opacity: 0, transition: { duration: 0.15 } }}>
        <motion.div className={`bg-white rounded-xl w-full ${isMobile ? "max-w-md" : "max-w-6xl"} cursor-auto relative z-[100000]`} onClick={(e) => e.stopPropagation()} variants={modalVariants} initial="hidden" animate="visible" exit="exit">
          <motion.button className="absolute top-2 right-3 text-xl font-bold" onClick={onClose} variants={fadeUpVariants} initial="hidden" animate="visible" custom={0}>×</motion.button>
          <div className="overflow-y-auto p-6" style={{ maxHeight: isMobile ? "calc(100vh - 64px - 72px)" : "calc(100vh - 64px - 32px)" }}>
            {internalTeam.length > 0 && (
              <>
                <motion.div className="text-center mb-10" variants={fadeUpVariants} initial="hidden" animate="visible" custom={1}>
                  <h3 className="text-[24px] font-semibold text-primary mb-4">Meet Our Internal Team</h3>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto">Our Internal Team leads strategic operations, client systems, and executive-level support.</p>
                </motion.div>
                {renderTeamGrid(internalTeam)}
              </>
            )}
            {executivePartners.length > 0 && (
              <>
                <motion.div className="text-center mb-10" variants={fadeUpVariants} initial="hidden" animate="visible" custom={1}>
                  <h3 className="text-[24px] font-semibold text-primary mb-4">Meet Our Executive Partners</h3>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto">Behind every successful business is a strong and reliable team.</p>
                </motion.div>
                {renderTeamGrid(executivePartners)}
              </>
            )}
            {webDevelopers.length > 0 && (
              <>
                <motion.div className="text-center mb-10" variants={fadeUpVariants} initial="hidden" animate="visible" custom={1}>
                  <h3 className="text-[24px] font-semibold text-primary mb-4">Meet Our Web Development Team</h3>
                  <p className="text-[16px] text-neutral-muted leading-relaxed max-w-3xl mx-auto">Our Web Development Team builds websites, funnels, and landing pages that are visually appealing, functional, and aligned with clients’ business goals.</p>
                </motion.div>
                {renderTeamGrid(webDevelopers)}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}