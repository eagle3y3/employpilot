// import * as React from "react";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
// import { cn } from "lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { JOB_TYPE } from "@/constants";

// export function JobTypeCombobox() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   const continents = Array.from(
//     new Set(
//       JOB_TYPE.map((country) => country.continentGroup.toLowerCase()),
//     ),
//   );
//   const handleSelect = (currentValue: string) => {
//     console.log(currentValue);
//     if (continents.includes(currentValue)) {
//       setSelectedContinent((prevContinents) => {
//         if (prevContinents.includes(currentValue)) {
//           // Continent already selected, remove it
//           return prevContinents.filter(
//             (continent) => continent !== currentValue,
//           );
//         } else {
//           // Continent not selected, add it
//           return [...prevContinents, currentValue];
//         }
//       });
//     } else {
//       if (selectedCountries.includes(currentValue)) {
//         setSelectedCountries(
//           selectedCountries.filter((country) => country !== currentValue),
//         );
//       } else {
//         setSelectedCountries([...selectedCountries, currentValue]);
//       }
//     }

//     setValue(""); // Clear current country selection
//     setOpen(false);
//   };

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {selectedCountries.length > 0
//             ? `${selectedCountries.length} countries selected`
//             : "Select country..."}
//           <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className=" no-scrollbar max-h-60 w-[200px]  overflow-y-auto p-0">
//         <Command>
//           <CommandInput placeholder="Search country..." className="h-9" />
//           <CommandEmpty>No country found.</CommandEmpty>
//           <CommandGroup>
//             {continents.map((continent) => (
//               <CommandItem
//                 key={continent}
//                 value={continent}
//                 onSelect={handleSelect}
//               >
//                 {continent
//                   .split(" ")
//                   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                   .join(" ")}
//                 <CheckIcon
//                   className={cn(
//                     "ml-auto h-4 w-4",
//                     selectedContinent.includes(continent.toLowerCase())
//                       ? "opacity-100"
//                       : "opacity-0",
//                   )}
//                 />
//               </CommandItem>
//             ))}
//             {LOCATION_ITEMS.map((country) => (
//               <CommandItem
//                 key={country.name}
//                 value={country.name}
//                 onSelect={handleSelect}
//               >
//                 {country.name}
//                 <CheckIcon
//                   className={cn(
//                     "ml-auto h-4 w-4",
//                     selectedCountries.includes(country.name.toLowerCase())
//                       ? "opacity-100"
//                       : "opacity-0",
//                   )}
//                 />
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
