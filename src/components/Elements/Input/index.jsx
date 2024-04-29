import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, placeholder, name, value, onChange } = props;
  return (
    <div className="grid gap-4 mb-4 grid-cols-2">
      <div className="col-span-2">
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputForm;
