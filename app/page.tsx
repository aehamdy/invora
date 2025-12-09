import InvoiceForm from "@/components/InvoiceForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex flex-col p-3">
        <h1 className="font-bold text-2xl">
          <span className="text-cyan-600">Invora</span> Generator
        </h1>
        <p className="text-gray-500">Create professional invoices quickly</p>
      </header>

      <InvoiceForm />
    </div>
  );
}
