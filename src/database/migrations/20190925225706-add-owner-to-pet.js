module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("pets", "owner_id", {
      type: Sequelize.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("pets", "owner_id");
  },
};
