const net = require("net");

const connect = () => {
  const conn = net.createConnection(50541, '165.227.47.243');
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;

}

console.log("Connecting ...");
connect();

module.exports = connect;