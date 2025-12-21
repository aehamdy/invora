"use client";
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
import useInvoiceStore from "@/store/useInvoiceStore";

export default function Home() {
  const { from } = useInvoiceStore();

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
            <Input
              id="senderName"
              placeholder="Your company's name"
              onChange={(e) =>
                useInvoiceStore.setState({
                  from: { ...from, name: e.target.value },
                })
              }
            />
          </div>

          <div>
            <Input
              type="email"
              id="senderEmail"
              placeholder="your-company@email.com"
              onChange={(e) =>
                useInvoiceStore.setState({
                  from: { ...from, email: e.target.value },
                })
              }
            />
          </div>

          <Select
            onValueChange={(value) =>
              useInvoiceStore.setState({ currency: value })
            }
          >
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
