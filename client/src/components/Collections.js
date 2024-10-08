import React from "react";

const Collections = () => {
  const collections = [
    {
      title: "Floral Essence",
      description: "A blend of nature's finest flowers.",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
    },
    {
      title: "Woody Allure",
      description: "Earthy notes that evoke tranquility.",
      imageUrl:
        "https://m.media-amazon.com/images/I/51tV0gy1r4L._AC_UF1000,1000_QL80_.jpg", // Replace with actual image URL
    },
    {
      title: "Citrus Fresh",
      description: "Bright and zesty fragrances.",
      imageUrl:
        "https://images-cdn.ubuy.co.in/65b3db2591df7f1029133e0d-fresh-as-citrus-eau-de-parfum-by.jpg", // Replace with actual image URL
    },
    {
      title: "Oriental Mystique",
      description: "Rich and exotic scents from the East.",
      imageUrl:
        "https://myop.in/cdn/shop/files/purple_mystique_157c687d-d1f0-4b6a-bce9-aa8db40162b8.webp?v=1718870939", // Replace with actual image URL
    },
  ];

  return (
    <section id="collections" className="wave-section">
      <div className="content">
        <h2>Collections</h2>
        <p>Discover our latest collections of perfumes.</p>
      </div>
      <div className="collection-cards">
        {collections.map((collection, index) => (
          <div className="card" key={index}>
            <img src={collection.imageUrl} alt={collection.title} />
            <div className="card-content">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="wave-svg">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#f8fafc"
            d="M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,96L1440,53.3L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Collections;
