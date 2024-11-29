import { FunctionComponent, ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
}

const SkillCard: FunctionComponent<SkillCardProps> = ({ icon }) => (
  <div
    className={`transform bg-gray-700 transition-all duration-300 hover:scale-105 rounded-xl p-2 shadow-lg hover:shadow-xl flex justify-center`}
  >
    {icon}
  </div>
);

export default SkillCard;
