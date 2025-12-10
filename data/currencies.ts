export type Currencies = {
  id: number;
  label: string;
  value: string;
};

export const currencies: Currencies[] = [
  {
    id: 1,
    label: "USD",
    value: "usd",
  },
  {
    id: 2,
    label: "EGP",
    value: "egp",
  },
  { id: 3, label: "SAR", value: "sar" },
];
