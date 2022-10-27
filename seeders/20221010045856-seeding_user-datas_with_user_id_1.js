'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Pertama milik UserId 1',
      caption: 'Ini foto pertama milik userID  1',
      image_url: 'https://photo.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    {
      title: 'Foto kedua milik UserId 1',
      caption: 'Ini foto kedua milik userID  1',
      image_url: 'https://photo.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto ketiga milik UserId 1',
      caption: 'Ini foto ketiga milik userID  1',
      image_url: 'https://photo.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
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
