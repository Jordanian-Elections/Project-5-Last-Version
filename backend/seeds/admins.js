const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("admins")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("admins").insert([
        {
          id: 1,
          name: "Areej Omar Abumuhfouz",
          email: "Areej@gmail.com",
          password: await bcrypt.hash("Areej123", 10),
          role: "super",
          is_active: true,
        },
        {
          id: 2,
          name: "Othman Daoud",
          email: "Othman@gmail.com",
          password: await bcrypt.hash("Othman123", 10),
          role: "admin",
          is_active: true,
        },
        {
          id: 3,
          name: "Tasneem Abuarqop",
          email: "Tasneem@gmail.com",
          password: await bcrypt.hash("Tasneem123", 10),
          role: "admin",
          is_active: true,
        },
        {
          id: 4,
          name: "AbedAlmajeed",
          email: "AbedAlmajeed@gmail.com",
          password: await bcrypt.hash("AbedAlmajeed123", 10),
          role: "admin",
          is_active: true,
        },
        {
          id: 5,
          name: "Omar",
          email: "Omar@gmail.com",
          password: await bcrypt.hash("Omar123", 10),
          role: "admin",
          is_active: true,
        },
        {
          id: 6,
          name: "Layla Hassan",
          email: "Layla@gmail.com",
          password: await bcrypt.hash("Layla123", 10),
          role: "admin",
          is_active: true,
        },
      ]);
    });
};
