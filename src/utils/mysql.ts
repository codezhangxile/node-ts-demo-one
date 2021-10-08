import { Sequelize } from 'sequelize'

const connect = new Sequelize('node-ts-demo-one','root','root',{host: 'localhost',dialect:'mysql',define: {
        timestamps: false
    },dialectOptions:{
        dateStrings:true,
        typeCast:true
    }
})

export  default  connect