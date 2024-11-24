import { FaEnvelope, FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import {
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiDocker,
  SiGit,
  SiKotlin,
  SiAmazon,
  SiNodedotjs,
  SiTerraform,
  SiMicrosoftazure,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/76042279?v=4"
              alt="Matthew Carr"
              className="w-20 h-20 rounded-full object-center shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">
                Matthew Carr
              </h1>
              <h2 className="text-lg text-gray-600">Software Engineer</h2>
            </div>
          </div>

          <p className="text-gray-800">
            Software engineer and professional tea drinker.
          </p>
        </div>

        {/* Current Job Section */}
        <div className="bg-white rounded-lg shadow-md p-8 flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/100" // Replace with Boclips' logo
            alt="Boclips"
            className="w-24 h-24"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Senior Software Engineer at Boclips
            </h3>
            <p className="text-gray-600">
              Developing educational video platforms that connect educators with
              engaging content.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">⚡</span>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  name: 'Kotlin',
                  icon: <SiKotlin className="text-blue-700 w-6 h-6" />,
                },
                {
                  name: 'Java',
                  icon: <FaJava className="text-orange-700 w-6 h-6" />,
                },
                {
                  name: 'Spring Boot',
                  icon: <SiSpringboot className="text-green-600 w-6 h-6" />,
                },
                {
                  name: 'PostgreSQL',
                  icon: <SiPostgresql className="text-blue-600 w-6 h-6" />,
                },
                {
                  name: 'MySQL',
                  icon: <SiMysql className="text-orange-600 w-6 h-6" />,
                },
                {
                  name: 'MongoDB',
                  icon: <SiMongodb className="text-green-600 w-6 h-6" />,
                },
                {
                  name: 'Terraform',
                  icon: <SiTerraform className="text-purple-700 w-6 h-6" />,
                },
                {
                  name: 'JavaScript',
                  icon: <SiJavascript className="text-yellow-500 w-6 h-6" />,
                },
                {
                  name: 'TypeScript',
                  icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
                },
                {
                  name: 'React',
                  icon: <SiReact className="text-cyan-500 w-6 h-6" />,
                },
                {
                  name: 'Node.js',
                  icon: <SiNodedotjs className="text-green-500 w-6 h-6" />,
                },
                {
                  name: 'AWS',
                  icon: <SiAmazon className="text-orange-500 w-6 h-6" />,
                },
                {
                  name: 'Azure',
                  icon: <SiMicrosoftazure className="text-blue-500 w-6 h-6" />,
                },
                {
                  name: 'Docker',
                  icon: <SiDocker className="text-blue-600 w-6 h-6" />,
                },
                {
                  name: 'Git',
                  icon: <SiGit className="text-red-600 w-6 h-6" />,
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
                >
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus Section */}
          {/* <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🧑‍💻</span>
              Current Focus
            </h3>
            <p className="text-gray-600">
              Exploring advanced distributed systems, enhancing CI/CD pipelines,
              and mentoring junior engineers. Actively contributing to the
              open-source community and developing innovative solutions in
              ed-tech.
            </p>
          </div> */}
        </div>
      </div>
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8">
          <a
            href="https://github.com/matthew-a-carr"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-carr-17012284"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:carr.matty@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </main>
  );
}
