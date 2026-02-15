const SkillsContainer = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {children}
      </div>
    </div>
  );
};

export default SkillsContainer;
