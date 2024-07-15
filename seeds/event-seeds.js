const {Event} = require("../models/Event");

const eventData = [
  {
    event_name: "Dia de Los Muertos",
    date: "2024-11-01",
    community_id: 1,
    site_id: null,
    category: "Annual Festivals",
    description:
      "Día de los Muertos acknowledges the symbiotic relationship between life and death. El día de Los Muertos is celebrated on November 1st and November 2nd, in which the spirits of the dead are believed to return home and spend time with their relatives on these two days. To welcome them, the family build altars in their honor. These altars have a series of different components that vary from one culture to another that mostly include yellow marigolds, candles, photos of the deceased ones, papel picado or cut tissue-paper designs, as well as food and beverages offerings for the dead.",
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
