import { ChevronDown } from "lucide-react";

const Select = ({ options, onChange }) => {
  return (
      <select
        onChange={onChange}
        className=" text-[var(--ifm-heading-color)] text-lg p-4 pr-8 rounded border-none focus:outline-none bg-[var(--ifm-background-color-subtle)] focus:ring focus:ring-[var(--ifm-color-primary)] flex-1 font-[PostnordRegular] h-14 w-full"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
  );
};

export default Select;
