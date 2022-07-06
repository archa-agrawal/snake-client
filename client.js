const net = require("net");

const connect = () => {
  const conn = net.createConnection(50541, '165.227.47.243');
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write("Name: AA")
  })
  conn.on('data', (data) => console.log(data))

  return conn;

}

console.log("Connecting ...");
connect();

module.exports = connect;