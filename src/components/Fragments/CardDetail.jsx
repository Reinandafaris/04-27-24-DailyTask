import { useEffect, useState } from "react";
import logoImg from "../../assets/images/Group 7.png";
import { getMemberById } from "../../services/member.services";
import { Link } from "react-router-dom";
import Spinner from "../Elements/Spinner";

const CardDetail = (props) => {
  const { handleModalDelete, handleModalEdit } = props;
  const [memberDetail, setMemberDetail] = useState([]);

  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    getMemberById(id, (data) => {
      setMemberDetail(data);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg object-cover"
            src={logoImg}
            alt=""
          />
        </a>
        {memberDetail.length === 0 ? (
          <Spinner />
        ) : (
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {memberDetail.name}
              </h5>
            </a>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Umur : {memberDetail.umur} Tahun
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Bootcamp : {memberDetail.bootcamp}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Divisi : {memberDetail.divisi}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Makanan Kesukaan : {memberDetail.makanan}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Role :{" "}
              {memberDetail.role === "Admin" ? "Admin" : "Member"}
            </p>
            <div className="justify-between flex">
              <Link to="/">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Back
                </button>
              </Link>

              <button
                onClick={handleModalEdit}
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Update
              </button>
              <button
                onClick={handleModalDelete}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
