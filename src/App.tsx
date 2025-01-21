import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ahmed Abdelmordy Allam</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Senior Mobile Developer</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:+201113024425" className="flex items-center gap-2">
                <Phone size={16} /> +201113024425
              </a>
              <a href="mailto:3lam.ahmed@gmail.com" className="flex items-center gap-2">
                <Mail size={16} /> 3lam.ahmed@gmail.com
              </a>
              <a href="https://ahmed-allam.site/" className="flex items-center gap-2">
                <ExternalLink size={16} /> ahmed-allam.site
              </a>
              <a href="https://github.com/Ahmed-3lam" className="flex items-center gap-2">
                <Github size={16} /> github.com/Ahmed-3lam
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Mobile Developer at Izam (Daftra-POS)</h3>
                <p className="text-gray-600">1/2024 - Present</p>
                <p className="mt-2">Developing POS Apps</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Flutter Developer at Abwaab</h3>
                <p className="text-gray-600">3/2022 - 1/2024</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Developing E-learning app</li>
                  <li>Micro-Service & Agile Environment</li>
                  <li>Worked on Payments, Social Core, Notifications features</li>
                  <li>Code review and bug fixing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Abwaab – E Learning App</h3>
                <p className="text-gray-600 mb-2">Millions of users</p>
                <ul className="list-disc ml-6">
                  <li>Clean Architecture, BLoC state management</li>
                  <li>Unit test & Widget test</li>
                  <li>Available on PlayStore & AppStore</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Da3m – Medical App</h3>
                <ul className="list-disc ml-6">
                  <li>Full app development & team management</li>
                  <li>Integrated Zoom SDK and Fawry payments</li>
                  <li>Available on PlayStore</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Flutter</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cubit', 'BLoC', 'Provider', 'GetX', 'Clean Architecture', 'Firebase', 'REST API', 'GraphQL'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Native iOS & Android</h3>
                <div className="flex flex-wrap gap-2">
                  {['Swift', 'SwiftUI', 'Kotlin', 'Java', 'MVVM', 'Jetpack Compose'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Bachelor of Petroleum Engineering</h3>
              <p className="text-gray-600">Suez University | 2013 - 2018</p>
              <p>Grade: Very Good</p>
              <p>Graduation Project Grade: Excellent</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/Ahmed-3lam" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="mailto:3lam.ahmed@gmail.com" className="hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Ahmed Allam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;