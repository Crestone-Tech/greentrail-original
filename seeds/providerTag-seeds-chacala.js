const ProviderTag = require("../models/ProviderTag");

const providerTagData = [
  // EAT tags
  {
    tag_id: 1,
    provider_id: 1,
  },
  {
    tag_id: 1,
    provider_id: 2,
  },
  {
    tag_id: 1,
    provider_id: 3,
  },
  {
    tag_id: 1,
    provider_id: 4,
  },
  {
    tag_id: 1,
    provider_id: 5,
  },
  {
    tag_id: 1,
    provider_id: 6,
  },
  {
    tag_id: 1,
    provider_id: 7,
  },
  {
    tag_id: 1,
    provider_id: 8,
  },
  {
    tag_id: 1,
    provider_id: 9,
  },
  {
    tag_id: 1,
    provider_id: 10,
  },
  {
    tag_id: 1,
    provider_id: 11,
  },
  {
    tag_id: 1,
    provider_id: 12,
  },
];

const seedProviderTag = () => ProviderTag.bulkCreate(providerTagData);

module.exports = seedProviderTag;
