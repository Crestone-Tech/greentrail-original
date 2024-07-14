const Tag = require("../models/Tag");

const tagData = [
  {
    tag_name: "eat",
  },
  {
    tag_name: "coffee",
  },
  {
    tag_name: "stay",
  },
  {
    tag_name: "explore",
  },
  {
    tag_name: "amenity",
  },
  {
    tag_name: "groceries",
  },
  {
    tag_name: "massage",
  },
  {
    tag_name: "learn",
  },
  {
    tag_name: "language_lessons",
  },
  {
    tag_name: "cooking_lessons",
  },
  {
    tag_name: "history",
  },
  {
    tag_name: "flora_and_fauna",
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
