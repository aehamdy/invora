import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function BasicDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <Input id="invoiceNumber" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="invoiceDate">Invoice Number</Label>
          <Input id="invoiceDate" type="date" />
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicDetails;
