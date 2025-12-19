import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

function InvoicePreview() {
  return (
    <section className="bg-[#eeeeee] rounded-3xl overflow-hidden">
      <Card className="flex gap-2 py-0 bg-[#eeeeee] shadow-none border-none">
        <CardHeader className="pt-4 font-semibold">Preview</CardHeader>
      </Card>

      <Separator />

      <Card className="w-9/10 mt-2 mx-auto">
        <CardHeader>
          <CardTitle>Company Name</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent>
          <div className="flex flex-col gap-6 font-medium text-sm text-gray-800">
            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Due Date</Label>
                <p className="">10 January 2025</p>
              </div>
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Subject</Label>
                <p className="">Electronic purchasing</p>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Billed To</Label>
                <p className="">Darlene robertson</p>
                <p className="">Darlene@email.com</p>
              </div>
              <div className="col-span-2">
                <Label className="font-medium text-gray-400">Currency</Label>
                <p className="">USD - United State Dollar</p>
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
            <span className="font-bold">*NOTES:</span>
            <p className="">Here comes the note</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default InvoicePreview;
