import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";
import Navbar from "./components/Elements/Navbar";
import CardListMember from "./components/Fragments/CardListMember";
import ModalLayouts from "./components/Layouts/ModalLayouts";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <CardListMember>
          <CardListMember.Header />
          <CardListMember.Body />
        </CardListMember>
        {/* <ModalLayouts />
        <Button>tombol</Button>
        <InputForm
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
        /> */}
      </div>
    </>
  );
}

export default App;
