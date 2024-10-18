module.exports =(sequelize, DataTypes)=> {
    const postsComments = sequelize.define("postsComments", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:false            
        },

        commenti:{
            type: DataTypes.STRING,
            autoIncrement:false,
            allowNull: false,
            unique: false
        },

    })

    return postsComments;
}



    