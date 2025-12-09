import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import ItemList from "./ItemList";
import TaxAndTotals from "./TaxAndTotals";

function InvoiceForm() {
  return (
    <div>
      <BasicDetails />
      <ContactDetails />
      <ItemList />
      <TaxAndTotals />
    </div>
  );
}

export default InvoiceForm;
