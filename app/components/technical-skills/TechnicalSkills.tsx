import { FunctionComponent, ReactNode } from 'react';
import { FaJava } from 'react-icons/fa';

import {
  SiAmazon,
  SiDocker,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

interface SkillCardProps {
  icon: ReactNode;
}

const skills: { name: string; icon: ReactNode }[] = [
  {
    name: 'Kotlin',
    icon: <SiKotlin className="w-8 h-8 text-purple-600" />,
  },
  {
    name: 'Java',
    icon: <FaJava className="w-8 h-8 text-red-600" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="w-8 h-8 text-emerald-600" />,
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
    name: 'Terraform',
    icon: <SiTerraform className="w-8 h-8 text-indigo-600" />,
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
    name: 'React',
    icon: <SiReact className="w-8 h-8 text-blue-400" />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="w-8 h-8 text-emerald-600" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: 'AWS',
    icon: <SiAmazon className="w-8 h-8 text-amber-500" />,
  },
  {
    name: 'Azure',
    icon: <SiMicrosoftazure className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: 'GCP',
    icon: <SiGooglecloud className="w-8 h-8 text-yellow-500" />,
  },
];

const SkillCard: FunctionComponent<SkillCardProps> = ({ icon }) => (
  <div
    className={`transform bg-gray-700 transition-all duration-300 hover:scale-105 rounded-xl p-2 shadow-lg hover:shadow-xl flex justify-center`}
  >
    {icon}
  </div>
);

const TechnicalSkills: FunctionComponent = () => (
  <>
    {skills.map((skill) => (
      <SkillCard key={skill.name} {...skill} />
    ))}
  </>
);

export default TechnicalSkills;
