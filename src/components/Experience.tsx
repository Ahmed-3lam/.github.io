import { motion } from "framer-motion";

const experiences = [
  {
    company: "Izam (Daftra-POS)",
    role: "Mobile Developer",
    period: "1/2024 - Present",
    description: "Developing POS Apps",
  },
  {
    company: "Abwaab",
    role: "Flutter Developer",
    period: "3/2022 - 1/2024",
    description: "Developing E-learning app in Micro-Service & Agile Environment. Worked on Payments, Social Core, Notifications, and more.",
  },
  {
    company: "ITI & DEPI",
    role: "Flutter & Dart Instructor",
    period: "6/2023 - Present",
    description: "Trained over 300 students in Flutter development",
  },
  // Add more experiences as needed
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-white" id="experience">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-accent"
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                <div className="text-gray-600 mb-2">{exp.role}</div>
                <div className="text-sm text-accent mb-2">{exp.period}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};