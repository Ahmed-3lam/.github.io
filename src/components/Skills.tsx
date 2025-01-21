import { motion } from "framer-motion";

const skills = {
  "Flutter": [
    "Cubit-BLoC–Provider-Getx",
    "Dependency Injection-Repository",
    "Clean Architecture",
    "Http–Dio",
    "Firebase–Rest Api–Socket-GraphQl"
  ],
  "Native iOS": [
    "SwiftUI & StoryBoard",
    "Alamofire-CocoaPods",
    "Location & Maps",
    "MVC"
  ],
  "Native Android": [
    "Kotlin & Java",
    "Retrofit",
    "JetPack Compose",
    "MVVM"
  ],
  "Others": [
    "Matlab, C#, JavaScript, HTML, CSS, Node.js",
    "Postman-Github",
    "Adobe XD–Figma–Photoshop–Illustrator",
    "Advanced Excel"
  ]
};

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="skills">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};