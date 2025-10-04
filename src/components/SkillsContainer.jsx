const CustomComponent = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {children}
      </div>
    </div>
  );
};

export default CustomComponent;
