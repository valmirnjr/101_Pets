import Sequelize, { Model } from "sequelize";

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        species: Sequelize.STRING,
        age: Sequelize.FLOAT({
          precision: 1,
        }),
        weight: Sequelize.INTEGER,
        breed: Sequelize.STRING,
        found: Sequelize.BOOLEAN,
        lost: Sequelize.BOOLEAN,
        for_adotion: Sequelize.BOOLEAN,
        adopted: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Pet;
