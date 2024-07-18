const Community = require("../models/Community");

const communityData = [
  {
    community_name: "Chacala",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi scelerisque, rutrum libero eu, bibendum quam. Mauris eu arcu orci. Sed viverra sodales nisi, a varius urna pharetra sit amet. Donec rutrum volutpat urna eu hendrerit. Aenean nec viverra diam, in dictum arcu. Sed dictum lectus nec justo accumsan malesuada. Morbi eu dapibus odio.",
    town_id: 1,
    community_center_site_id: 2,
  },
];

const seedCommunity = () => Community.bulkCreate(communityData);

module.exports = seedCommunity;
