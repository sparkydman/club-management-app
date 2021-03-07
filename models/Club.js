module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('club', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Club.associate = (models) => {
    Club.belongsToMany(models.user, {
      through: models.member,
      foreignKey: 'clubId',
      onDelete: 'cascade',
    });
    Club.belongsTo(models.user, {
      foreignKey: 'admin',
      onDelete: 'cascade',
    });
  };

  return Club;
};
