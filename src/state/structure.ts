export default {
  categories: [
    { header: "Barnål", id: "needle", bottom: true },
    {
      header: "Løvtrær",
      id: "leaf",
      bottom: false,
      categories: [
        {
          header: "Enkle blad",
          bottom: false,
          id: "simple",
          categories: [
            { header: "Jevn bladkant", id: "smooth", bottom: true },
            { header: "Sagtannet bladkant", id: "sawtooth", bottom: true },
            { header: "Fliket bladkant", id: "pointy", bottom: true },
          ],
        },
        { header: "Samensatt", id: "multiple", bottom: true },
      ],
    },
  ],
};
