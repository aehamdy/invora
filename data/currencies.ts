export type Currencies = {
  id: number;
  label: string;
  value: string;
};

export const currencies: Currencies[] = [
  {
    id: 1,
    label: "EGP - Egyptian Pounds",
    value: "egp",
  },
  { id: 2, label: "SAR - Saudi Riyal", value: "sar" },
  { id: 3, label: "AED - Emirate Dirham", value: "aed" },
  {
    id: 4,
    label: "USD - United States Dollar",
    value: "usd",
  },
];
