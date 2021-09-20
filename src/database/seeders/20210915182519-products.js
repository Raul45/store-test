'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      code: "PANTS",
      name: "Pants",
      price: 5.0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
      code: "TSHIRT",
      name: "T-Shirt",
      price: 20.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: "HAT",
      name: "Hat",
      price: 7.50,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
