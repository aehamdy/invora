import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function InvoiceItem() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
      <div className="col-span-5 space-y-1">
        <Label>Description</Label>
        <Input placeholder="Item description" />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Quantity</Label>
        <Input type="number" min="1" />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Rate ($)</Label>
        <Input type="number" min="0" step="0.01" />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Amount</Label>
        <div className="flex items-center h-10 px-3 py-2 bg-gray-50 border rounded-md">
          $0.00
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Button
          variant="outline"
          size="icon"
          //   onClick={() => removeItem(index)}
          //   disabled={!canRemove}
          className="w-full cursor-pointer"
        >
          <Trash2 className="" />
        </Button>
      </div>
    </div>
  );
}

export default InvoiceItem;
