interface SkillBoxProps {
  children?: React.ReactNode;
}

const SkillBox = ({ children }: SkillBoxProps) => {
  return (
    <span className='px-4 py-2 text-blue-800 bg-blue-50 rounded'>
      {children}
    </span>
  );
};

export default SkillBox;
