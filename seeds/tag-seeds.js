const Tag = require("../models/Tag");

const tagData = [
  {
    tag_name: "eat",
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
