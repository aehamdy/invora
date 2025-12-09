import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function ContactDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">From</h3>

          <div className="flex flex-col gap-2">
            <Label htmlFor="senderName">Name</Label>
            <Input id="senderName" placeholder="Your name or company" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="senderEmail">Email</Label>
            <Input id="senderEmail" type="email" placeholder="your@email.com" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-medium">To</h3>

          <div className="flex flex-col gap-2">
            <Label htmlFor="clientName">Name</Label>
            <Input id="clientName" placeholder="Client name or company" />
          </div>

          <div className="flex flex-col gap-2">
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
