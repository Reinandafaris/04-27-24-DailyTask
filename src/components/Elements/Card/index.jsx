const Card = (props) => {
  const { index, name, onClick } = props;
  return (
    <div className="flex justify-center">
      <div className="w-11/12 px-3">
        <div
          onClick={onClick}
          className="flex items-center justify-between w-full h-20 my-3 hover:text-white cursor-pointer shadow-lg  bg-blue-700 hover:bg-blue-800  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 font-medium text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700"
        >
          <div className="w-8 h-8 md:w-14 md:h-14 rounded-full items-center flex justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="md:text-2xl font-bold">{index + 1}</h1>
          </div>
          <h1 className="md:text-3xl font-bold">{name}</h1>
          <p className="text-[10px] md:text-base">klik for detail</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
