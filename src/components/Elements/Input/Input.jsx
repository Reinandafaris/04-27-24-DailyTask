const Input = (props) => {
  const { type, placeholder, name, value, onChange } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    />
  );
};

export default Input;
