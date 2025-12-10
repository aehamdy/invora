import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

function ContactDetails() {
  return (
    <Card className="flex gap-2">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Billed To</CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4 mt-3">
        <div className="flex justify-between items-center gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="clientName">Name</Label>
            <Input id="clientName" placeholder="Client name" />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="clientEmail">Email</Label>
            <Input
              id="clientEmail"
              type="email"
              placeholder="client@email.com"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactDetails;
