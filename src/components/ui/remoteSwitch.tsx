import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function RemoteSwitch() {
  return (
    <div className="flex items-center space-x-2 rounded-md border p-1">
      <Switch id="remote-mode" />
      <Label htmlFor="remote-mode">Remote Only</Label>
    </div>
  );
}
