// data.js - Module for business data
export const companyData = {
  name: "The Creator Crate",
  services: {
    rentals: [
      {
        id: 1,
        name: "DSLR Camera Rental",
        description: "High-quality DSLR cameras for professional photography.",
        price: "$50/day",
        image: "imgs/camera.jpg"
      },
      {
        id: 2,
        name: "Lens Kit Rental",
        description: "Wide range of lenses from wide-angle to telephoto.",
        price: "$30/day",
        image: "imgs/lens.jpg"
      }
    ],
    photobooth: {
      name: "Photobooth Service",
      description: "Fun and interactive photobooth for events.",
      price: "$200/event",
      features: ["Props included", "Instant prints", "Digital delivery"],
      image: "imgs/lowlight.jpg"
    }
  },
  contact: {
    email: "info@visionrentals.com",
    phone: "(123) 456-7890"
  }
};