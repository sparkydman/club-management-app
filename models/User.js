const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          arg: true,
          msg: 'Enter a valid email',
        },
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          arg: true,
          msg: 'First name is required',
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          arg: true,
          msg: 'Last name is required',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          arg: true,
          msg: 'Password is required',
        },
      },
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.club, {
      through: models.member,
      foreignKey: 'userId',
      allowNull: true,
      onDelete: 'cascade',
    });
  };
  User.afterValidate('hashPasswordAfterHook', async (user) => {
    const hashPassword = await bcrypt.hash(user.password, 12);
    user.password = hashPassword;
  });
  return User;
};
