import { FunctionComponent, ReactNode } from 'react';
import { FaJava, FaMicrosoft } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiAmazon,
  SiAngular,
  SiCypress,
  SiDocker,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSnowflake,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

const skills: { name: string; icon: ReactNode }[] = [
  {
    name: 'Java',
    icon: <FaJava className="w-8 h-8 text-red-600" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="w-8 h-8 text-emerald-600" />,
  },
  {
    name: 'Kotlin',
    icon: <SiKotlin className="w-8 h-8 text-purple-600" />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="w-8 h-8 text-amber-600" />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-8 h-8 text-emerald-700" />,
  },
  {
    name: 'Snowflake',
    icon: <SiSnowflake className="w-8 h-8 text-sky-500" />,
  },
  {
    name: 'Terraform',
    icon: <SiTerraform className="w-8 h-8 text-indigo-600" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-8 h-8 text-amber-400" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-8 h-8 text-blue-500" />,
  },
  {
    name: 'Cypress',
    icon: <SiCypress className="w-8 h-8 text-green-400" />,
  },
  {
    name: 'Angular',
    icon: <SiAngular className="w-8 h-8 text-rose-700" />,
  },
  {
    name: 'React',
    icon: <SiReact className="w-8 h-8 text-blue-400" />,
  },
  {
    name: 'NextJS',
    icon: <RiNextjsFill className="w-8 h-8" />,
  },
  {
    name: 'AWS',
    icon: <SiAmazon className="w-8 h-8 text-amber-500" />,
  },
  {
    name: 'Azure',
    icon: <FaMicrosoft className="w-8 h-8 text-cyan-800" />,
  },
  {
    name: 'GCP',
    icon: <SiGooglecloud className="w-8 h-8 text-yellow-500" />,
  },
];

const TechnicalSkills: FunctionComponent = () => (
  <>
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-all group"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl">{skill.icon}</div>
          <span className="text-sm text-gray-600 group-hover:text-blue-600">
            {skill.name}
          </span>
        </div>
      </div>
    ))}
  </>
);

export default TechnicalSkills;
