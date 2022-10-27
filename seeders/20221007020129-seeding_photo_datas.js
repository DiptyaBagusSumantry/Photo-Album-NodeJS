'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Jadul',
      caption: 'diambil ketika sedang duduk',
      image_url: 'https://photojadul.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Kenangan',
      caption: 'diambil ketika sedang berdiri',
      image_url: 'https://photokengangan.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
