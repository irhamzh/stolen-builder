import { useOutletContext } from 'react-router-dom';

const SkillTree = () => {
  const obj = useOutletContext();
  return (
    <>
      <h4> THIS IS SKILL TREE PAGE </h4>
    </>
  );
};

export default SkillTree;
