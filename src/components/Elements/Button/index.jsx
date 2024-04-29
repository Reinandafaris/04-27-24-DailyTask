const Button = (props) => {
  const { children, classname, type, onClick } = props;
  return (
    <button
      className={`${classname} text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
