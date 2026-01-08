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
    icon: <FaJava className="h-6 w-6" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="h-6 w-6" />,
  },
  {
    name: 'Kotlin',
    icon: <SiKotlin className="h-6 w-6" />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="h-6 w-6" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="h-6 w-6" />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="h-6 w-6" />,
  },
  {
    name: 'Snowflake',
    icon: <SiSnowflake className="h-6 w-6" />,
  },
  {
    name: 'Terraform',
    icon: <SiTerraform className="h-6 w-6" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className="h-6 w-6" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="h-6 w-6" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="h-6 w-6" />,
  },
  {
    name: 'Cypress',
    icon: <SiCypress className="h-6 w-6" />,
  },
  {
    name: 'Angular',
    icon: <SiAngular className="h-6 w-6" />,
  },
  {
    name: 'React',
    icon: <SiReact className="h-6 w-6" />,
  },
  {
    name: 'NextJS',
    icon: <RiNextjsFill className="h-6 w-6" />,
  },
  {
    name: 'AWS',
    icon: <SiAmazon className="h-6 w-6" />,
  },
  {
    name: 'Azure',
    icon: <FaMicrosoft className="h-6 w-6" />,
  },
  {
    name: 'GCP',
    icon: <SiGooglecloud className="h-6 w-6" />,
  },
];

const TechnicalSkills: FunctionComponent = () => (
  <>
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alt)] text-[color:var(--accent)]">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-[color:var(--fg)]">
            {skill.name}
          </span>
        </div>
      </div>
    ))}
  </>
);

export default TechnicalSkills;
