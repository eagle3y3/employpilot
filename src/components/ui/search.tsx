"use client";

import { Input } from "./input";

export default function Search({ placeholder }: { placeholder: string }) {
  const handleSearch = (term: string) => {
    console.log(term);
  };

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
