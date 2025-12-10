import InvoiceDetails from "./InvoiceDetails";
import ContactDetails from "./ContactDetails";
import ItemList from "./ItemList";

function InvoiceForm() {
  return (
    <div className="space-y-4">
      <InvoiceDetails />
      <ContactDetails />
      <ItemList />
    </div>
  );
}

export default InvoiceForm;
