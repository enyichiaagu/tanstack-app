// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <>
      <div>
        <div></div>
        <div>
          <span>Amazing Enyichi Agu</span>
          <p>Just vibing || Full Stack Engineer</p>
          <div>
            <span>GitHub</span>
            <span>X</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Languages</h2>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>
      </div>
      <div>
        <h2>Tools</h2>
        <div>
          <span>React</span>
          <span>GraphQL</span>
          <span>Node.js</span>
          <span>Socket.io</span>
          <span>Next.js/Remix</span>
        </div>
      </div>
    </>
  );
}
