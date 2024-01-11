"use client";

import { CountryCombobox } from "./countryCombobox";
import { Input } from "./input";
import { Label } from "./label";
import RemoteSwitch from "./remoteSwitch";
import { SalaryPopOver } from "./salaryPopover";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-3 pb-2">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <SalaryPopOver />
      </div>
      <div className="flex flex-row space-x-2">
        <CountryCombobox />
        <RemoteSwitch />
        <div></div>
      </div>
    </div>
  );
}
