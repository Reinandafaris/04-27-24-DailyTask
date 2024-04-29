import { useRef, useState } from "react";
import Card from "../components/Elements/Card";
import Header from "../components/Elements/Header";
import Navbar from "../components/Elements/Navbar";
import { useDataMember } from "../hooks/useDataMember";
import ModalAdds from "../components/Layouts/ModalAdds";
import Spinner from "../components/Elements/Spinner";
import useClickOutside from "../hooks/useClickOutside";

const HomePage = () => {
  const { memberList } = useDataMember();
  const [showModalAdd, setShowModalAdd] = useState(false);
  let modRef = useRef();

  const handleRoute = (id) => {
    window.location.href = `/detail/${id}`;
  };

  const handleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  };

  useClickOutside(modRef, () => setShowModalAdd(false));

  return (
    <div className="pb-8">
      <Navbar />
      <Header handleModalAdd={handleModalAdd} />
      {memberList.length === 0 ? (
        <Spinner />
      ) : (
        memberList.length > 0 &&
        memberList.map((item, index) => {
          return (
            <Card
              key={item._id}
              index={index}
              name={item.name}
              email={item.email}
              onClick={() => handleRoute(item._id)}
            />
          );
        })
      )}
      <ModalAdds
        modRef={modRef}
        showModalAdd={showModalAdd}
        handleModalAdd={handleModalAdd}
      />
    </div>
  );
};

export default HomePage;
