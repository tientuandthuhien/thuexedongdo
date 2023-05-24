const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;
const config = {
    user: 'sa',
    password: 'cls@1234',
    server: '113.160.225.134',
    database: 'CLSK12MANAGEDB',
    options: {
      encrypt: false // True: Nếu sử dụng kết nối mã hóa
    }
  };
  
  sql.connect(config)
    .then(() => {
      console.log('Connected to SQL Server');
    })
    .catch((err) => {
      console.error('Error connecting to SQL Server:', err);
    });


app.get('/cars', (req, res) => {
    debugger;
    const query = 'SELECT * FROM clssystem.Users'; // Câu truy vấn SQL
  
    sql.query(query)
      .then((result) => {
        res.json(result.recordset); // Trả về kết quả truy vấn dưới dạng JSON
      })
      .catch((err) => {
        console.error('Error executing SQL query:', err);
        res.status(500).send('Internal Server Error');
      });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
      
  