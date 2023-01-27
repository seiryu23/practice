import './Navigate.css';
//
function Navigate() {
    GetMdcAdvic();
    return (
        <nav className="nav">
            <a>aaa</a>
        </nav>
    );
}

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

export default Navigate;
