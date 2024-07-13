const seedCountries = require('./country-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    console.log();
    console.log("Seeds: start");
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCountries();


    console.log("Seeds: done");
    console.log();
    process.exit(0);
}

seedAll();