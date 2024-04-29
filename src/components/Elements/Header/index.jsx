import Button from "../Button/index";

const Header = (props) => {
  const { handleModalAdd } = props;
  return (
    <div className="flex justify-center ">
      <div className="bg-red-500s w-11/12 px-3 my-3">
        <div className="w-full bg-yellow-500s text-center text-3xl font-bold mb-5">
          Daftar List Member FSW-1
        </div>
        <div className="w-full text-end">
          {/* <!-- Modal toggle --> */}
          <Button onClick={handleModalAdd}>Add Member</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
