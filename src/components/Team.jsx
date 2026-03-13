// src/components/Team.jsx
import { motion } from "framer-motion";
import { useState } from "react";

import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import team4 from "../assets/4.jpg";
import team5 from "../assets/5.jpg";
import team6 from "../assets/6.jpg";
import team7 from "../assets/7.jpg";
import team8 from "../assets/8.jpg";
import team9 from "../assets/9.jpg";
import team10 from "../assets/10.jpg";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Executive Virtual Assistant",
    image: team1,
    description:
      "Leads strategic operations, client systems, and executive-level support.",
  },
  {
    name: "Michael Smith",
    role: "Operations Specialist",
    image: team2,
    description:
      "Focused on workflow optimization and operational efficiency.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing & Content Manager",
    image: team3,
    description:
      "Manages digital presence, content strategy, and marketing automation.",
  },
  {
    name: "David Lee",
    role: "Client Support Manager",
    image: team4,
    description:
      "Ensures seamless communication and client onboarding systems.",
  },
  {
    name: "Emma Wilson",
    role: "Executive Assistant",
    image: team5,
    description:
      "Handles executive coordination and leadership scheduling.",
  },
  {
    name: "Daniel Brown",
    role: "Automation Specialist",
    image: team6,
    description:
      "Builds automation workflows and CRM systems.",
  },
  {
    name: "Sophia Taylor",
    role: "Social Media Manager",
    image: team7,
    description:
      "Creates content calendars and manages brand visibility.",
  },
  {
    name: "Lucas Anderson",
    role: "Project Coordinator",
    image: team8,
    description:
      "Ensures team execution and task accountability.",
  },
  {
    name: "Olivia Martinez",
    role: "Client Success Specialist",
    image: team9,
    description:
      "Maintains client relationships and operational continuity.",
  },
  {
    name: "Noah Garcia",
    role: "Web Support Specialist",
    image: team10,
    description:
      "Maintains websites, funnels, and landing pages.",
  },
];

export default function Team() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="team"
      className="relative pt-12 md:pt-20 lg:pt-28 pb-20 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] text-primary leading-tight">
            Meet Our <span className="text-accent">Team</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 leading-relaxed">
            Behind every successful partnership is a team dedicated to
            organization, execution, and operational support.
          </p>

        </div>

        {/* Edge fade */}
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
            dragConstraints={{ left: -400, right: 0 }}
            dragElastic={0.2}
            animate={paused ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{
              repeat: paused ? 0 : Infinity,
              duration: 45,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-10 lg:gap-12 w-max cursor-grab active:cursor-grabbing"
          >

            {[...teamMembers, ...teamMembers].map((member, index) => (

              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px]"
              >

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft overflow-hidden"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
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