import Image from 'next/image';
import Footer from './components/footer/Footer';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative container mx-auto px-6 pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-12">
              <img
                src="https://avatars.githubusercontent.com/u/76042279?v=4"
                alt="Matthew Carr"
                className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Matthew Carr</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Software Engineer</h2>
            <p className="text-xl text-gray-500 max-w-2xl ">
              Passionate about creating technology solutions that have a
              positive impact on people&apos;s lives.
            </p>
          </div>
        </div>
      </div>

      {/* Current Role Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <a
                href="https://benifex.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/benefex.jpeg"
                  alt="Benefex logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </a>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-600 whitespace-nowrap">
                  Senior Backend Engineer
                </h3>
                <p className="text-gray-500 text-lg">
                  Helping build the Rewards & Recognition platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            <TechnicalSkills />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center space-x-8">
            <Footer />
          </div>
        </div>
      </footer>
    </main>
  );
}
