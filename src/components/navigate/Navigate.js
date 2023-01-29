import React from 'react';
import { response } from 'express';
import './Navigate.css';
//import 'mysql2';
//import 'express';
//
function Navigate() {
    SQL();
    return (
        <nav className="nav">
            <a>aaa</a>
        </nav>
    );
}

function SQL()
{
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, response) => response.send('Hello World!'));

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    /*
    const express = require('express');
    const app = express();
//    const port = 3000;
    var conn = require('mysql2').createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Lbmz0204!',
        database: 'us_angular'
    });
    conn.connect(function(err) {
        if (err) throw err;
        console.log('Connected');
    });
    
    app.get('/', (request, response) => {
        const sql = "select * from userinf"
        conn.query(sql, function (err, result, fields) {  
        if (err) throw err;
        response.send(result)
        });
    });
    */
}

/* 
// SQL Server使用時の処理
function GetMdcAdvic() {
    var Connection = require('tedious').Connection;  
    var config = {  
        server: '(local)',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', //update me
                password: 'itec'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'DEV_V6Uehata'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();
}
*/


export default Navigate;
