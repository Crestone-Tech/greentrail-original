const seedCountries = require('./country-seeds');
const seedProvinces = require("./province-seeds");

const sequelize = require('../config/connection');

const seedAll = async () => {
    console.log();
    console.log("Seeds: start");
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCountries();
    console.log("\n----- COUNTRIES SEEDED -----\n");

    await seedProvinces();
    console.log("\n----- PROVIDENCES SEEDED -----\n");

    console.log("Seeds: done");
    console.log();
    process.exit(0);
}

seedAll();