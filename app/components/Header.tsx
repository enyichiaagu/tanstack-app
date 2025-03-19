import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className='bg-gray-100 flex justify-between px-8 py-3 items-center'>
      <h1 className='text-2xl'>
        <Link to='/'>Portfolio</Link>
      </h1>
      <ul className='flex gap-5 text-blue-900'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
