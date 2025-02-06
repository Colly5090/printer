import { create } from "zustand";

const useCardsStore = create((set) => ({
  cards: [
    {
      id: 1,
      title: "13×19 Bevania White",
      price: 20.0,
      stock: 4899,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "Image 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Image 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 2,
      title: "13×19 Chrome Coat",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "Custom 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 3,
      title: "Document Printing Black",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "photocopy black 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "photocopy black 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 4,
      title: "Document Printing Colored",
      price: 10.0,
      stock: 123,
      images: [
        {
          id: 1,
          src: "/media/photocopycoloured.jpeg",
          alt: "photocopy coloured 1",
        },
        {
          id: 2,
          src: "/media/photocopycoloured2.jpg",
          alt: "photocopy coloured 2",
        },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 5,
      title: "Embroidery",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "Custom 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 6,
      title: "Photocopy Black",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "first black printer" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 7,
      title: "Photocopy Coloured",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "Custom 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 8,
      title: "1×1 3pcs",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack2.jpg", alt: "Custom 1" },
        { id: 2, src: "/media/photocopyBlack.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    {
      id: 9,
      title: "Rush ID",
      price: 10.0,
      stock: 123,
      images: [
        { id: 1, src: "/media/photocopyBlack.jpg", alt: "Custom 1" },
        { id: 2, src: "/media/photocopyBlack2.jpg", alt: "Custom 2" },
      ],
      description:
        "Need to meet deadlines for your projects, homework, research and presentations? We can print your documents in any sizes. Visit the nearest E3 Printhub Branch.",
    },
    // Add more cards here if needed
  ],

  // Function to fetch all cards
  fetchCards: () => set((state) => ({ cards: state.cards })),

  // Function to get a specific card by ID
  getCardById: (id) =>
    set((state) => state.cards.find((card) => card.id === id)),
}));

export default useCardsStore;
