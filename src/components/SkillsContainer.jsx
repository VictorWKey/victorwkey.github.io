const CustomComponent = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center sm:items-start mb-3 px-2">
      <h1 className="text-primary text-2xl font-semibold py-4">{title}</h1>
      <div className="w-full pb-4 rounded-md flex flex-wrap gap-2 mt-2 justify-center sm:justify-start items-center">
        {children}
      </div>
    </div>
  );
};

export default CustomComponent;
