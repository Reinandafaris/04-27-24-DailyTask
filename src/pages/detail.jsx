import { useRef, useState } from "react";
import Navbar from "../components/Elements/Navbar";
import CardDetail from "../components/Fragments/CardDetail";
import ModalDelete from "../components/Layouts/ModalDelete";
import ModalLayouts from "../components/Layouts/ModalLayouts";
import useClickOutside from "../hooks/useClickOutside";

const DeatilPage = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  let modEditRef = useRef();
  let modDelRef = useRef();

  const handleModalEdit = () => {
    setShowModalEdit(!showModalEdit);
  };

  const handleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  useClickOutside(modEditRef, () => setShowModalEdit(false));
  useClickOutside(modDelRef, () => setShowModalDelete(false));

  return (
    <div>
      <Navbar />
      <CardDetail
        handleModalDelete={handleModalDelete}
        handleModalEdit={handleModalEdit}
      />
      <ModalDelete
        modDelRef={modDelRef}
        showModalDelete={showModalDelete}
        handleModalDelete={handleModalDelete}
      />
      <ModalLayouts
        modEditRef={modEditRef}
        showModalEdit={showModalEdit}
        handleModalEdit={handleModalEdit}
      />
    </div>
  );
};

export default DeatilPage;
