import "./index.css";

 const Select = ({ options, value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      {options.map((item, index) => {
        const optionValue = typeof item === "string" ? item : item.value;
        const optionLabel = typeof item === "string" ? item : item.label;

        return (
          <option key={index} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
};

export default Select;