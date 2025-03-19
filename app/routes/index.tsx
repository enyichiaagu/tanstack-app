// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero';
import SkillBox from '../components/SkillBox';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <div className='mt-10'>
        <h2 className='text-2xl'>Languages</h2>
        <div className='mt-2.5 flex gap-3'>
          <SkillBox>HTML</SkillBox>
          <SkillBox>CSS</SkillBox>
          <SkillBox>JavaScript</SkillBox>
          <SkillBox>TypeScript</SkillBox>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-2xl'>Tools</h2>
        <div className='mt-2.5 flex gap-3'>
          <SkillBox>React</SkillBox>
          <SkillBox>GraphQL</SkillBox>
          <SkillBox>Node.js</SkillBox>
          <SkillBox>Socket.io</SkillBox>
          <SkillBox>Next.js/Remix</SkillBox>
        </div>
      </div>
    </>
  );
}
