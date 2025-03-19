import { createFileRoute } from '@tanstack/react-router';
import { FaCodeFork, FaRegStar } from 'react-icons/fa6';

export const Route = createFileRoute('/projects')({
  component: Projects,
});

function Projects() {
  return (
    <>
      <h2 className='text-2xl'>Projects</h2>
      <div className='mt-2.5'>
        {/* Make the card clickable */}
        <div className='px-6 py-4 rounded-md bg-green-50 shadow'>
          <div className='flex justify-between mb-2'>
            <span>repository-name</span>
            <div className='flex gap-3'>
              <span>
                0 <FaRegStar className='inline' />
              </span>
              <span>
                0 <FaCodeFork className='inline' />
              </span>
            </div>
          </div>
          <div>
            <span className='text-sm bg-blue-800 text-gray-50 px-1 py-0.5'>
              PHP
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
