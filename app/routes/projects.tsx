import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  component: Projects,
});

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div>
        {/* Make the card clickable */}
        <div>
          <span>repository-name</span>
          <span>Stars</span>
          <span>Forks</span>
          <span>Languages</span>
        </div>
      </div>
    </>
  );
}
