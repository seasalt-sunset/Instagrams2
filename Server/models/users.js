module.exports = (sequelize, DataTypes) => {
const users = sequelize.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
})

    users.associate = (models) => {
        users.hasMany(models.posts, {foreignKey: 'userId'});
        models.posts.belongsTo(users, { foreignKey: 'userId'});
        users.hasMany(models.postsLikes, {foreignKey: 'userId'});
        models.postsLikes.belongsTo(users, { foreignKey: 'userId'});
        users.hasMany(models.postsComments, {foreignKey: "userId"});
        models.postsComments.belongsTo(users, {foreignKey: "userId"});

    }

return users;  
}