import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Kevin Martin",
    role: "Team Member",
    image: "https://via.placeholder.com/300x300?text=Kevin",
    socials: ["twitter", "facebook", "pinterest", "instagram"],
  },
  {
    name: "Christine Eve",
    role: "Team Member",
    image: "https://via.placeholder.com/300x300?text=Christine",
    socials: ["twitter", "facebook", "pinterest", "instagram"],
  },
  {
    name: "Mike Hardson",
    role: "Team Member",
    image: "https://via.placeholder.com/300x300?text=Mike",
    socials: ["twitter", "facebook", "pinterest", "instagram"],
  },
  {
    name: "Jessica Brown",
    role: "Team Member",
    image: "https://via.placeholder.com/300x300?text=Jessica",
    socials: ["twitter", "facebook", "pinterest", "instagram"],
  },
];

const iconMap = {
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  pinterest: <FaPinterestP />,
  instagram: <FaInstagram />,
};

const MeetOurTeam = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-block">
            <img src="https://via.placeholder.com/40" alt="icon" />
          </div>
          <p className="text-sm tracking-wide text-green-600 uppercase">
            Professional People
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-64 w-full object-cover"
              />
              <div className="py-4 text-center">
                <p className="text-sm text-gray-500">{member.role}</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <ul className="mt-3 flex justify-center space-x-4 text-lg text-green-600">
                  {member.socials.map((platform, i) => (
                    <li key={i}>
                      <a href="#" aria-label={platform}>
                        {iconMap[platform]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
