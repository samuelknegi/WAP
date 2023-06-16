const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  const imageStream = fs.createReadStream('./image');
  
  res.setHeader('Content-Type', 'image/jpeg');
  
  imageStream.pipe(res);
});

const port = 3000; // specify the desired server port
server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});


const dns = require('dns');
dns.resolve4('www.miu.edu', function(error, address) {
 if (error) throw error;
 console.log(address);
});