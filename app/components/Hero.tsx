import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='bg-blue-900 text-gray-50 py-10 px-15 flex gap-15 rounded-2xl items-center'>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/58449038?v=4'
          alt='Profile Picture'
          className='h-50 rounded-full'
        />
      </div>
      <div>
        <span className='text-3xl mb-3 block'>Amazing Enyichi Agu</span>
        <p className='mb-5'>generic and easily forgettable developer bio</p>
        <div className='text-2xl flex gap-3'>
          <a href='#'>
            <FaGithub />
          </a>
          <a href='#'>
            <FaXTwitter />
          </a>
          <a href='#'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
