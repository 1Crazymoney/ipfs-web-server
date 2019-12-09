/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

module.exports = {
  port: process.env.PORT || 3210,
  BCHADDR: `bitcoincash:qpyrsf8uf3qr7m23h4hdhjlj2cmxet6q5g0mjhdrqu`,
  stateFileName: `state.json`,
  ipfsPort1: 4002,
  ipfsPort2: 4003
}
