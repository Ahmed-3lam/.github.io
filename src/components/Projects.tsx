import { motion } from "framer-motion";

const projects = [
  {
    title: "Abwaab – E Learning App",
    description: "E-learning platform with millions of users. Implemented payments, social core, notifications, and more using Clean Architecture and BLoC state management.",
    technologies: ["Flutter", "Clean Architecture", "BLoC", "Unit Testing"],
    links: {
      playStore: "#",
      appStore: "#"
    }
  },
  {
    title: "Da3m – Medical App",
    description: "Complete medical app with video consultations, appointments, and payment integration. Managed the entire development team.",
    technologies: ["Flutter", "Zoom SDK", "Fawry SDK", "Team Management"],
    links: {
      playStore: "#"
    }
  },
  {
    title: "Daftra-POS",
    description: "Leading POS app in the Middle East",
    technologies: ["Flutter", "iOS", "Android"],
    links: {
      playStore: "#",
      appStore: "#"
    }
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.playStore && (
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                    Play Store
                  </a>
                )}
                {project.links.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                    App Store
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};