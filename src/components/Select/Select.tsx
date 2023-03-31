import { FC } from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (option: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={onChange} className="select_choice">
        {options.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </div>
  );
};
