module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    Message.belongsTo(models.club, {
      foreignKey: 'clubId',
      onDelete: 'cascade',
    });
  };

  return Message;
};
