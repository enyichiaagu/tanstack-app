import { FaCodeFork, FaRegStar } from 'react-icons/fa6';

interface ProjectCardProps {
  url: string;
  projectName: string;
  language: string;
  stars: number;
  forks: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <a
      className='px-6 py-4 rounded-md bg-green-50 shadow mb-5 block'
      href={props.url}
    >
      <div className='flex justify-between mb-2'>
        <span>{props.projectName}</span>
        <div className='flex gap-3'>
          <span>
            {props.stars} <FaRegStar className='inline' />
          </span>
          <span>
            {props.forks} <FaCodeFork className='inline' />
          </span>
        </div>
      </div>
      <div>
        <span className='text-sm bg-blue-800 text-gray-50 px-1 py-0.5'>
          {props.language}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
