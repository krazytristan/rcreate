// src/components/Team.jsx
import { motion } from "framer-motion";
import { useState } from "react";

import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import team4 from "../assets/4.jpg";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Executive Virtual Assistant",
    image: team1,
    description:
      "Leads strategic operations, client systems, and executive-level support for scaling businesses.",
  },
  {
    name: "Michael Smith",
    role: "Operations Specialist",
    image: team2,
    description:
      "Focused on workflow optimization, project management systems, and operational efficiency.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing & Content Manager",
    image: team3,
    description:
      "Manages digital presence, content strategy, and marketing automation systems.",
  },
  {
    name: "David Lee",
    role: "Client Support Manager",
    image: team4,
    description:
      "Ensures seamless communication, onboarding systems, and client relationship management.",
  },
];

export default function Team() {

  const [paused, setPaused] = useState(false);

  return (
    <section
      id="team"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >

      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] text-primary leading-tight">
            Meet Our <span className="text-accent">Team</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 leading-relaxed">
            Behind every successful partnership is a team dedicated to
            organization, execution, and long-term operational support.
          </p>

        </div>

        {/* Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-background to-transparent z-10" />

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            animate={paused ? { x: "0%" } : { x: ["0%", "-50%"] }}
            transition={{
              repeat: paused ? 0 : Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-10 lg:gap-12 w-max cursor-grab active:cursor-grabbing"
          >

            {[...teamMembers, ...teamMembers].map((member, index) => (

              <div
                key={index}
                className="min-w-[260px] md:min-w-[300px] lg:min-w-[320px]"
              >

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft overflow-hidden"
                >

                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-8 text-center">

                    <h3 className="font-heading text-xl text-primary mb-1">
                      {member.name}
                    </h3>

                    <p className="text-accent text-sm font-medium mb-4">
                      {member.role}
                    </p>

                    <p className="text-neutral-muted text-sm leading-relaxed">
                      {member.description}
                    </p>

                  </div>

                </motion.div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}