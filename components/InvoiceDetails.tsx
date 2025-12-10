import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

function InvoiceDetails() {
  return (
    <Card className="flex gap-2">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4 mt-3">
        <div className="flex justify-between items-center gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="invoiceNumber">Subject</Label>
            <Input id="invoiceNumber" />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="invoiceDate">Due Date</Label>
            <Input id="invoiceDate" type="date" />
          </div>
        </div>

        <div className="w-full"></div>
      </CardContent>
    </Card>
  );
}

export default InvoiceDetails;
