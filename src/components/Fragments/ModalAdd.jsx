import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { createMember } from "../../services/member.services";

const ModalAdd = () => {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [bootcamp, setBootcamp] = useState("");
  const [divisi, setDivisi] = useState("");
  const [makanan, setMakanan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nama,
      umur: umur,
      bootcamp: bootcamp,
      divisi: divisi,
      makanan: makanan,
    };

    createMember(data, (status, res) => {
      if (status) {
        window.location.reload();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-5">
      <div className="overflow-y-scroll h-[200px] scrollbar pe-5">
        <InputForm
          label="Nama"
          type="text"
          placeholder="Jhon Doe"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <InputForm
          label="Umur"
          type="number"
          placeholder="20"
          name="umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
        />
        <InputForm
          label="Bootcamp"
          type="text"
          placeholder="Binar Academy"
          name="bootcamp"
          value={bootcamp}
          onChange={(e) => setBootcamp(e.target.value)}
        />
        <InputForm
          label="Divisi"
          type="text"
          placeholder="Fullstack Web Developer"
          name="divisi"
          value={divisi}
          onChange={(e) => setDivisi(e.target.value)}
        />
        <InputForm
          label="Makanan Kesukaan"
          type="text"
          placeholder="Ayam Goreng"
          name="makanan"
          value={makanan}
          onChange={(e) => setMakanan(e.target.value)}
        />
      </div>
      <div className="flex justify-end me-5">
        <Button classname="mt-4">Submit</Button>
      </div>
    </form>
  );
};

export default ModalAdd;
