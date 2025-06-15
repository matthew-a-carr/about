import Image from 'next/image';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import StickyHeader from './components/sticky-header/StickyHeader';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';
// import StravaActivity from './components/strava-activity/StravaActivity'; // Temporarily disabled
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Sticky Header */}
      <StickyHeader />
      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Hero Section - Modern with animated gradient */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient-x"></div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Matthew Carr
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">
                  Senior Software Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Passionate about creating technology solutions that have a
                positive impact on people&apos;s lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="#about"
                  className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  Learn More <FaArrowDown className="animate-bounce" />
                </a>
              </div>

              <div className="mt-12 flex gap-6">
                <a
                  href="https://github.com/matthew-a-carr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-carr-17012284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:carr.matty@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-white p-2 w-64 h-64 mx-auto">
                <img
                  src="https://avatars.githubusercontent.com/u/76042279?v=4"
                  alt="Matthew Carr"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="absolute -z-10 w-72 h-72 rounded-full bg-blue-200 opacity-30 blur-3xl top-1/3 -right-10"></div>
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-indigo-200 opacity-30 blur-3xl -bottom-10 -left-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-blue-600 absolute top-0 left-0 w-20 h-20 -z-10 -translate-x-6 -translate-y-6"></div>
                <Image
                  src="/coding_illustration.svg"
                  alt="Coding illustration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="bg-indigo-600 absolute bottom-0 right-0 w-20 h-20 -z-10 translate-x-6 translate-y-6"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 text-lg mb-6">
                Hey there! I&apos;ve been coding for over 10 years now, mostly
                building backend stuff that keeps websites and apps running
                smoothly. I get a real kick out of solving those head-scratching
                problems that make most people want to throw their laptops out
                the window.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                I&apos;ve bounced between fintech, e-commerce, and a bunch of
                other industries. The tech changes, but the constant is me
                staying up too late trying to figure out why that one function
                isn&apos;t working right.
              </p>
              <p className="text-gray-700 text-lg">
                When I&apos;m not glued to my screen, I try to remember what
                sunlight feels like. I also enjoy helping junior devs avoid
                making the same mistakes I did (though they usually find
                creative new ones).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here&apos;s where I&apos;ve been spending my weekdays.
              Surprisingly, not all of it was debugging production issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="flex items-start gap-4">
                <Image
                  src="/benefex.jpeg"
                  alt="Benifex logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">Senior Backend Engineer</h3>
                  <p className="text-blue-600 mb-2">Benifex</p>
                  <p className="text-gray-600 mb-4">Jan 2025 - Present</p>
                  <p className="text-gray-700">
                    Building cool stuff that helps companies give their
                    employees virtual high-fives. I wrestle with microservices
                    all day and somehow make them play nice together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              {' '}
              <div className="flex items-start gap-4">
                <Image
                  src="/panaseer_logo_new.svg"
                  alt="Panaseer logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">Technical Lead</h3>
                  <p className="text-blue-600 mb-2">Panaseer</p>
                  <p className="text-gray-600 mb-4">Oct 2021 - Nov 2024</p>
                  <p className="text-gray-700">
                    Herded cats (engineers) to build a cybersecurity platform.
                    Spent half my time convincing people that security is
                    important, the other half actually building it. Daily
                    standups were my cardio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/matthew-carr-17012284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View Full Resume on LinkedIn <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section with improved design */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I bring a comprehensive toolkit of technologies that allow me to
              build complete, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            <TechnicalSkills />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the key projects I&apos;ve worked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Image
                    src="/file.svg"
                    alt="Project illustration"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Highways England API
                </h3>
                <p className="text-gray-600 mb-4">
                  Technical documentation API that powers the Standards for
                  Highways website (DMRB and MCHW documents).
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Java
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Spring Boot
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Azure/Docker
                  </span>
                </div>
                <a
                  href="https://www.standardsforhighways.co.uk/dmrb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View site →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Image
                    src="/globe.svg"
                    alt="Project illustration"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Rewards & Recognition Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Employee recognition platform that helps organisations
                  celebrate success and strengthen company culture.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Java
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Spring Boot
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    GCP/Kubernetes
                  </span>
                </div>
                <a
                  href="https://benifex.com/reward-recognition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/matthew-a-carr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View More Projects on GitHub <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">
              Let&apos;s Work Together
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Whether you&apos;re looking for a senior engineer for your team or
              need help with a challenging project, I&apos;m always open to
              discussing new opportunities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Current Focus
                    </h4>
                    <p className="text-gray-600">
                      I&apos;m currently working on building the world&apos;s
                      best Rewards and Recognition platform at Benifex.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Connect
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/matthew-a-carr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/matthew-carr-17012284"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="text-center p-4 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 rotate-12">
                      <FaEnvelope className="w-full h-full text-blue-600" />
                    </div>
                    <h5 className="text-blue-600 font-semibold mb-3">
                      Say Hello!
                    </h5>
                    <p className="text-gray-800 mb-5">
                      Got a challenging project or just want to chat about tech?
                      I&apos;m all ears!
                    </p>
                    <a
                      href="mailto:carr.matty@gmail.com"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with improved styling */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Matthew Carr</h3>
              <p className="text-gray-400">Senior Software Engineer</p>
            </div>

            <div className="flex space-x-8 items-center">
              <Footer />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Matthew Carr. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
