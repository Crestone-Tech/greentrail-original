const { EventSeries } = require("../models/Event");

const eventSeriesData = [
  {
    event_series_name: "Yoga Class",
    event_id: 1,
    community_id: 1,
    site_id: null,
    date: null,
    day_of_week: "Mondays",
    time: "09:00",
    description: "Weekly yoga classes offered on Mondays at 9:00am.",
  },
];

const seedEventSeries = () => EventSeries.bulkCreate(eventSeriesData);

module.exports = seedEventSeries;
