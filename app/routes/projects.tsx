import { createServerFn } from '@tanstack/react-start';
import { createFileRoute } from '@tanstack/react-router';
import ProjectCard from '../components/ProjectCard';

interface Projects {
  full_name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks: number;
}

const getProjects = createServerFn({
  method: 'GET',
}).handler(async () => {
  const res = await fetch(
    'https://api.github.com/users/enyichiaagu/repos?sort=updated&per_page=5',
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github+json',
      },
    }
  );
  return res.json();
});

export const Route = createFileRoute('/projects')({
  component: Projects,
  loader: () => getProjects(),
});

function Projects() {
  const projects: Projects[] = Route.useLoaderData();

  return (
    <>
      <h2 className='text-2xl'>Projects</h2>
      <div className='mt-2.5'>
        {projects.map(
          (
            { full_name, html_url, language, stargazers_count, forks },
            index
          ) => (
            <ProjectCard
              projectName={full_name}
              url={html_url}
              language={language}
              stars={stargazers_count}
              forks={forks}
              key={index}
            />
          )
        )}
      </div>
    </>
  );
}
