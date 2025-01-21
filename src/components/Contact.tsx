import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <a href="tel:+201113024425" className="flex flex-col items-center hover:text-accent transition-colors">
            <Phone className="w-8 h-8 mb-4" />
            <span>+201113024425</span>
          </a>
          <a href="mailto:3lam.ahmed@gmail.com" className="flex flex-col items-center hover:text-accent transition-colors">
            <Mail className="w-8 h-8 mb-4" />
            <span>3lam.ahmed@gmail.com</span>
          </a>
          <a href="https://ahmed-allam.site/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-accent transition-colors">
            <Globe className="w-8 h-8 mb-4" />
            <span>ahmed-allam.site</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};