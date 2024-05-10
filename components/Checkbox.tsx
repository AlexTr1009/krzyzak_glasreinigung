import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  const backgroundColor = checked ? 'bg-primary' : 'bg-primaryGray opacity-70';
  const checkmarkColor = checked ? 'text-black' : 'text-white';

  return (
    <label className="cursor-pointer select-none">
      <input
        type="checkbox"
        className="absolute opacity-0"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 border-gray-500 ${backgroundColor}`}
      >
        {checked && (
          <svg
            className={`w-4 h-4 fill-current ${checkmarkColor}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;

