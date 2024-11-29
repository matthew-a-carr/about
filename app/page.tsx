import Image from 'next/image';
import Footer from './components/footer/Footer';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-700 text-white">
      {/* About me Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        <div className="relative z-20 text-center p-8">
          <div className="mb-8 relative">
            <Image
              src="https://avatars.githubusercontent.com/u/76042279?v=4"
              alt="Matthew Carr"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-200 text-transparent bg-clip-text">
            Matthew Carr
          </h1>
          <h2 className="text-2xl text-gray-300 mb-5">Software Engineer</h2>
          <p className="text-xl text-gray-400">
            Passionate about creating technology solutions that have a positive
            impact on people&apos;s lives.
          </p>
        </div>
      </div>

      {/* Current Role Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-6">
            <Image
              src="./boclips_logo.svg"
              alt="Boclips logo"
              width={80}
              height={80}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-200 text-transparent bg-clip-text text-balance	">
                Senior Software Engineer at Boclips
              </h3>
              <p className="text-gray-400 mt-2">
                Developing educational video platforms that connect educators
                with engaging content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 px-8 bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-200 text-transparent bg-clip-text">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            <TechnicalSkills />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center space-x-8">
            <Footer />
          </div>
        </div>
      </footer>
    </main>
  );
}
