const Tag = require("../models/Tag");

const tagData = [
  {
    tag_name: "eat",
  },
  {
    tag_name: "stay",
  },
  {
    tag_name: "explore",
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
