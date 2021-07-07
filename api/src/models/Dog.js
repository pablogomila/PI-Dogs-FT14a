const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  //! DEFINING BREED TABLE AT DB
  sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  },
    { timestamps: false }
  );

  //! DEFINING TEMPERAMENT TABLE AT DB
  sequelize.define('temperament', {
    name: {
      type: DataTypes.STRING
    },
  },
    { timestamps: false }
  );
};