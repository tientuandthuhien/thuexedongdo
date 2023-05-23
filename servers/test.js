const axios = require('axios');

const apiUrl = 'http://localhost:3000'; // Đường dẫn của backend server

// app.get('/cars', (req, res) => {
//     const query = 'SELECT * FROM clssystem.Users'; // Câu truy vấn SQL
  
//     sql.query(query)
//       .then((result) => {
//         res.json(result.recordset); // Trả về kết quả truy vấn dưới dạng JSON
//       })
//       .catch((err) => {
//         console.error('Error executing SQL query:', err);
//         res.status(500).send('Internal Server Error');
//       });
//   });



  // Hàm gọi API lấy danh sách xe
async function getCars() {
    try {
      const response = await axios.get(`${apiUrl}/cars`);
      console.log(response.data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  }


// Gọi các API test
getCars();
  