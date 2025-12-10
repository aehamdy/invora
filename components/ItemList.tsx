"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import InvoiceItem from "./InvoiceItem";
import { Separator } from "./ui/separator";

export const items = [
  {
    id: 1,
    description: "Website Design",
    quantity: 1,
    rate: 500,
    amount: 500,
  },
  {
    id: 2,
    description: "Hosting (12+ months)",
    quantity: 1,
    rate: 120,
    amount: 120,
  },
];

function ItemList() {
  const addItem = () => {};

  return (
    <Card className="flex gap-2">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Invoice Items</CardTitle>

        <Button onClick={addItem} size="sm" className="w-fit cursor-pointer">
          Add Item
          <Plus className="w-4 h-4 me-2" />
        </Button>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4 mt-3">
        {items.map((item, index) => (
          <InvoiceItem
            key={item.id}
            item={item}
            index={index}
            canRemove={items.length > 1}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default ItemList;
