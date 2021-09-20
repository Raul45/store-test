
const {
  Model
} = require('sequelize');
export default (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };
      // eslint-disable-next-line no-restricted-syntax
    
      return attributes;
    }
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};