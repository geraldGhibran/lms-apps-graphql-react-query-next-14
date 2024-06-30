import React, { memo } from "react";

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  placeholder = "Search products",
}) => {
  return (
    <input
      type="text"
      className="outline-none dark:border-strokedark dark:bg-boxdark"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      placeholder={placeholder}
    />
  );
};

export default memo(SearchInput) ;
