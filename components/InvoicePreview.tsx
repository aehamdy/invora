"use client";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { useInvoiceStore } from "@/store/useInvoiceStore";

function InvoicePreview() {
  const { from, to, subject, dueDate, currency, notes } = useInvoiceStore();

  return (
    <section className="bg-[#eeeeee] rounded-3xl overflow-hidden">
      <Card className="flex gap-2 py-0 bg-[#eeeeee] shadow-none border-none">
        <CardHeader className="pt-4 font-semibold">Preview</CardHeader>
      </Card>

      <Separator />

      <Card className="w-9/10 mt-2 mx-auto">
        <CardHeader className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="font-bold">From:</span>
            <CardTitle>{from.name}</CardTitle>
          </div>
          <p>{from.email}</p>
        </CardHeader>

        <Separator />

        <CardContent>
          <div className="flex flex-col gap-6 font-medium text-sm text-gray-800">
            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Subject</Label>
                <p className="">{subject || "No subject provided"}</p>
              </div>
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Due Date</Label>
                <p className="">{dueDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Billed To</Label>
                <p className="">{to.name}</p>
                <p className="">{to.email}</p>
              </div>
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Currency</Label>
                <p>{currency.toUpperCase()}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <table className="w-full border-collapse">
              <thead className="bg-[#f7f7f7] border-b">
                <tr>
                  <th className="w-1/2 p-2.5 text-left font-medium">Item</th>
                  <th className="w-1/6 p-2.5 text-center font-medium">Qty</th>
                  <th className="w-1/6 p-2.5 text-center font-medium">Price</th>
                  <th className="w-1/6 p-2.5 text-right font-medium">Amount</th>
                </tr>
              </thead>

              <tbody>{/* Table rows will go here */}</tbody>
            </table>
          </div>

          <Separator />

          <div className="flex flex-col items-end gap-5 mt-4">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-8 ">
                <div className="">Sub Total</div>
                <div className="">$432.85</div>
              </div>

              <div className="flex items-center gap-8 ">
                <div className="">Discount -20%</div>
                <div className="">$86.57</div>
              </div>

              <div className="flex items-center gap-8 ">
                <div className="">Tax 10%</div>
                <div className="">$43.28</div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-8 font-medium text-gray-900">
                <div className="">Total</div>
                <div className="">$393.56</div>
              </div>

              <div className="flex items-center gap-8 font-medium text-gray-900">
                <div className="">Amount due</div>
                <div className="">$389.48</div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex items-center gap-1 mt-2">
            {notes && <span className="font-bold">*NOTES:</span>}
            <p className="">{notes}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default InvoicePreview;
