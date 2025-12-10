import InvoiceForm from "@/components/InvoiceForm";
import InvoicePreview from "@/components/InvoicePreview";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencies } from "@/data/currencies";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <header className="flex justify-between p-3">
        <div className="flex items-center gap-1">
          <h1 className="flex gap-2 font-bold text-2xl text-cyan-600">
            Invora
          </h1>
          <span className="font-normal">|</span>
          <p className="font-normal text-sm text-gray-400">
            Create professional invoices quickly
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Input id="senderName" placeholder="Your company's name" />
          </div>

          <div>
            <Input
              id="senderEmail"
              type="email"
              placeholder="your-company@email.com"
            />
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.id} value={currency.value}>
                  {currency.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-6 mx-3">
        <InvoiceForm />
        <InvoicePreview />
      </section>
    </div>
  );
}
