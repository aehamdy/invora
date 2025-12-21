import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { InvoiceState, InvoiceListItem } from "@/types/invoice";

const initialState = {
  invoiceNumber: `INV-${new Date().getFullYear()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`,
  issueDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  status: "draft" as const,
  subject: "",
  notes: "",
  currency: "USD",

  from: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },

  to: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },

  items: [],
  subtotal: 0,
  taxRate: 0,
  taxAmount: 0,
  total: 0,
};

export const useInvoiceStore = create<InvoiceState>((set, get) => ({
  ...initialState,

  setInvoiceDetails: (details) =>
    set((state) => ({
      ...state,
      ...details,
    })),

  setFrom: (from) =>
    set((state) => ({
      from: { ...state.from, ...from },
    })),

  setTo: (to) =>
    set((state) => ({
      to: { ...state.to, ...to },
    })),

  addItem: (item: Omit<InvoiceListItem, "id" | "amount">) =>
    set((state) => {
      const newItem: InvoiceListItem = {
        ...item,
        id: uuidv4(),
        amount: item.quantity * item.rate,
      };

      const newItems = [...state.items, newItem];
      const subtotal = newItems.reduce((sum, item) => sum + item.amount, 0);
      const taxAmount = subtotal * (state.taxRate / 100);

      return {
        items: newItems,
        subtotal,
        taxAmount,
        total: subtotal + taxAmount,
      };
    }),

  updateItem: (id, updates) =>
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex === -1) return state;

      const updatedItem = {
        ...state.items[itemIndex],
        ...updates,
        amount:
          updates.quantity !== undefined || updates.rate !== undefined
            ? (updates.quantity ?? state.items[itemIndex].quantity) *
              (updates.rate ?? state.items[itemIndex].rate)
            : state.items[itemIndex].amount,
      };

      const newItems = [...state.items];
      newItems[itemIndex] = updatedItem;

      const subtotal = newItems.reduce((sum, item) => sum + item.amount, 0);
      const taxAmount = subtotal * (state.taxRate / 100);

      return {
        items: newItems,
        subtotal,
        taxAmount,
        total: subtotal + taxAmount,
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      const subtotal = newItems.reduce((sum, item) => sum + item.amount, 0);
      const taxAmount = subtotal * (state.taxRate / 100);

      return {
        items: newItems,
        subtotal,
        taxAmount,
        total: subtotal + taxAmount,
      };
    }),

  calculateTotals: () =>
    set((state) => {
      const subtotal = state.items.reduce((sum, item) => sum + item.amount, 0);
      const taxAmount = subtotal * (state.taxRate / 100);

      return {
        subtotal,
        taxAmount,
        total: subtotal + taxAmount,
      };
    }),

  resetInvoice: () => ({
    ...initialState,
    invoiceNumber: `INV-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`,
  }),
}));

export default useInvoiceStore;
