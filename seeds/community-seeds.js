const Community = require('../models/Community');

const communityData = [
  {
    community_name: "Chacala",
    town_id: 1,
    community_center_site_id: 2,
  },
];

const seedCommunity = () => Community.bulkCreate(communityData);

module.exports = seedCommunity;