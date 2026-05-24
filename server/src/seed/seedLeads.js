require("dotenv").config({ path: "./.env" });

const mongoose = require("mongoose");

const { faker } = require("@faker-js/faker");

const Lead = require("../models/lead.model");

const connectDB = require("../config/db");

const statuses = [
  "new",
  "contacted",
  "qualified",
  "lost",
];

const seedLeads = async () => {
  try {
    await connectDB();

    await Lead.deleteMany();

    const leads = [];

    for (let i = 0; i < 20; i++) {
      leads.push({
        name: faker.person.fullName(),

        email: faker.internet.email(),

        phone: faker.phone.number(),

        status:
          statuses[
            Math.floor(Math.random() * statuses.length)
          ],

        notes: [
          {
            text: faker.lorem.sentence(),
          },
        ],
      });
    }

    await Lead.insertMany(leads);

    console.log("20 Leads Seeded");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedLeads();