export default {
  ["/"]: {
    header: "Norske trær",
    id: "/",
    bottom: false,
    categories: [
      { name: "Barnål", id: "needle", bottom: true },
      { name: "Løvblad", id: "leaf", bottom: false },
    ],
  },
  ["/needle"]: { header: "Barnål", bottom: true, id: "needle" },
  ["/leaf"]: {
    header: "Løvblad",
    id: "leaf",
    bottom: false,
    categories: [
      { name: "Enkle", id: "simple", bottom: false },
      { name: "Samensatt", id: "multiple", bottom: true },
    ],
  },
  ["/leaf/simple"]: {
    header: "Enkle blad",
    bottom: false,
    id: "simple",
    categories: [
      { name: "Sagtannet bladkant", id: "sawtooth", bottom: true },
      { name: "Fliket bladkant", id: "pointy", bottom: true },
      { name: "Jevn bladkant", id: "smooth", bottom: true },
    ],
  },
  ["/leaf/multiple"]: { header: "Sammensatte blad", bottom: true, id: "multiple" },
  ["/leaf/simple/sawtooth"]: { header: "Sagtagget bladkant", id: "sawtooth", bottom: true },
  ["/leaf/simple/pointy"]: { header: "Fliket bladkant", id: "pointy", bottom: true },
  ["/leaf/simple/smooth"]: { header: "Jevn bladkant", id: "smooth", bottom: true },
};
