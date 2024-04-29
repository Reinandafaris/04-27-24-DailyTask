import ModalAdd from "../Fragments/ModalAdd";

const ModalAdds = (props) => {
  const { showModalAdd, handleModalAdd, modRef } = props;
  return (
    <div
      className={`flex ${
        showModalAdd ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-full bg-black bg-opacity-50`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div
          ref={modRef}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Data Member
            </h3>
            <button
              onClick={handleModalAdd}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <ModalAdd />
        </div>
      </div>
    </div>
  );
};

export default ModalAdds;
