"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { Plus } from "lucide-react";
import InvoiceItem from "./InvoiceItem";
import { Textarea } from "./ui/textarea";

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

const InvoiceForm = () => {
  const { setInvoiceDetails, subject, dueDate, to, notes } = useInvoiceStore();

  return (
    <form action="" className="mb-2 space-y-4">
      <Card className="flex gap-2">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 mt-3">
          <div className="flex justify-between items-center gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="invoiceNumber">Subject</Label>
              <Input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setInvoiceDetails({ subject: e.target.value })}
                placeholder="Enter invoice subject"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="invoiceDate">Due Date</Label>
              <Input
                type="date"
                id="invoiceDate"
                value={dueDate}
                onChange={(e) => setInvoiceDetails({ dueDate: e.target.value })}
                // {...register("dueDate")}
              />
            </div>
          </div>

          <div className="w-full"></div>
        </CardContent>
      </Card>

      <Card className="flex gap-2">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Billed To</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 mt-3">
          <div className="flex justify-between items-center gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="clientName">Name</Label>
              <Input
                type="text"
                id="clientName"
                placeholder="Client name"
                value={to.name}
                onChange={(e) =>
                  useInvoiceStore.setState((state) => ({
                    to: { ...state.to, name: e.target.value },
                  }))
                }
                // {...register("clientName")}
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="clientEmail">Email</Label>
              <Input
                type="email"
                id="clientEmail"
                placeholder="client@email.com"
                value={to.email}
                onChange={(e) =>
                  useInvoiceStore.setState((state) => ({
                    to: { ...state.to, email: e.target.value },
                  }))
                }
                // {...register("clientEmail")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex gap-2">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Invoice Items</CardTitle>

          <Button
            // onClick={addItem}
            size="sm"
            className="w-fit cursor-pointer"
          >
            Add Item
            <Plus className="w-4 h-4 me-2" />
          </Button>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 mt-3">
          {items.map((item, index) => (
            <InvoiceItem
              key={item.id}
              {...item}
              id={item.id.toString()}
              index={index}
              canRemove={items.length > 1}
            />
          ))}
        </CardContent>
      </Card>

      <Textarea
        placeholder="Write a note..."
        className="bg-white"
        onChange={(e) => useInvoiceStore.setState({ notes: e.target.value })}
      />
    </form>
  );
};

export default InvoiceForm;
