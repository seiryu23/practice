import React, { useEffect, useState } from 'react';
import * as express from 'express';
import './Navigate.css';
import * as mysql from 'mysql2';

const app = express();
const port = 3000;

function Navigate() {
    const [data, setData] = useState(null);

    useEffect(() => {
        SQL();
    }, []);
    
    return (
        <nav className="nav">
            <a>{data}</a>
        </nav>
    );

    async function SQL()
    {
        app.get('/', (req, response) => response.send('Hello World!'));

        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
        
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Lbmz0204!',
            database: 'us_angular'
        });
        conn.connect(function(err) {
            if (err) throw err;
            console.log('Connected');
        });
        
        app.get('/', async (request, response) => {
            const sql = "select * from userinf";
            const result = await new Promise((resolve, reject) => {
                conn.query(sql, function (err, result, fields) {  
                    if (err) reject(err);
                    resolve(result);
                });
            });
            setData(JSON.stringify(result));
        });
    }
}

export default Navigate;