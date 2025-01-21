import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-accent/10 text-white p-4">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          AHMED ABDELMORDY ALLAM
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Senior Mobile Developer
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a href="mailto:3lam.ahmed@gmail.com" className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-full transition-colors">
            Contact Me
          </a>
          <a href="https://ahmed-allam.site/" target="_blank" rel="noopener noreferrer" className="border border-white hover:bg-white hover:text-primary px-6 py-2 rounded-full transition-colors">
            Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};