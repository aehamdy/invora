import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InvoiceListItem } from "@/types/invoice";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { useCallback, useMemo } from "react";

interface InvoiceItemProps extends InvoiceListItem {
  index: number;
  canRemove: boolean;
  onRemove?: () => void;
}

function InvoiceItem({
  id,
  description,
  quantity,
  rate,
  amount,
  index,
  canRemove,
  onRemove,
}: InvoiceItemProps) {
  const { removeItem } = useInvoiceStore();

  const updateItem = useInvoiceStore((state) => state.updateItem);

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = parseFloat(e.target.value) || 0;
      updateItem(id, { quantity: newQuantity });
    },
    [id, updateItem]
  );

  const handleRateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newRate = parseFloat(e.target.value) || 0;
      updateItem(id, { rate: newRate });
    },
    [id, updateItem]
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateItem(id, { description: e.target.value });
    },
    [id, updateItem]
  );

  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }, [amount]);

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
      <div className="col-span-5 space-y-1">
        <Label>Description</Label>
        <Input
          placeholder="Item description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Rate ($)</Label>
        <Input
          type="number"
          min="0"
          step="0.01"
          value={rate}
          onChange={handleRateChange}
        />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Quantity</Label>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className="col-span-2 space-y-1">
        <Label>Amount</Label>
        <div className="flex items-center h-10 px-3 py-2 bg-gray-50 rounded-md">
          {formattedAmount}
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleRemoveItem(id)}
          disabled={!canRemove}
          className="w-full cursor-pointer"
        >
          <Trash2 className="" />
        </Button>
      </div>
    </div>
  );
}

export default InvoiceItem;
