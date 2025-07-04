// seedCategories.js
const Category = require("./models/Category");

const seedCategories = async () => {
  const categories = [
    { name: "Technology" },
    { name: "Lifestyle" },
    { name: "Business" },
    { name: "Entertainment" },
    { name: "Sports" },
    { name: "Science" },
    { name: "Food" },
  ];

  try {
    const count = await Category.countDocuments();
    if (count === 0) {
      await Category.insertMany(categories);
      console.log("Categories seeded successfully");
    } else {
      console.log("Categories already exist, skipping seeding");
    }
  } catch (error) {
    console.error("Failed to seed categories:", error);
  }
};

module.exports = seedCategories;
