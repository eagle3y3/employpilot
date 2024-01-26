import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "./slider";

export function SalaryPopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Salary Expectation</Button>
      </PopoverTrigger>
      <PopoverContent className="mr-4 w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Salary</h4>
            <p className="text-sm text-muted-foreground">
              Set the minimum income
            </p>
          </div>
          <div className="h-9">
            <Slider min={5000} max={300000} step={5000} className="p-1" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
