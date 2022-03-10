const mysql = require('mysql');
import { createConnection } from 'typeorm';
const connection = () => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        insecureAuth: true
    });

    con.connect(function (err: any) {
        if (err) throw err;
        console.log("Connected!");
    });
}

export default connection;