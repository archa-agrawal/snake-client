const net = require("net");
const { IP, PORT } = require('./constants')

const connect = () => {
  const conn = net.createConnection(PORT, IP);
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: AA");
  })
  conn.on('data', (data) => console.log(data));

  return conn;
}

module.exports = connect;