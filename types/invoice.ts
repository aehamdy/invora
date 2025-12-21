export type InvoiceStatus = "draft" | "pending" | "paid" | "overdue";

export interface InvoiceListItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface InvoiceState {
  // Invoice Details
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  subject: string;
  notes: string;
  currency: string;

  // Contacts
  from: Contact;
  to: Contact;

  // Items
  items: InvoiceListItem[];

  // Summary
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;

  // Actions
  setInvoiceDetails: (
    details: Partial<
      Omit<
        InvoiceState,
        | "items"
        | "from"
        | "to"
        | "subtotal"
        | "taxAmount"
        | "total"
        | "calculateTotals"
        | keyof InvoiceState
      >
    >
  ) => void;
  setFrom: (from: Partial<Contact>) => void;
  setTo: (to: Partial<Contact>) => void;
  addItem: (item: Omit<InvoiceListItem, "id" | "amount">) => void;
  updateItem: (
    id: string,
    updates: Partial<Omit<InvoiceListItem, "id">>
  ) => void;
  removeItem: (id: string) => void;
  calculateTotals: () => void;
  resetInvoice: () => void;
}
