module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    invitationToken: DataTypes.STRING,
  });
  return Member;
};
