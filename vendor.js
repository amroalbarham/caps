'use strict';
require('dotenv').config();
const event = require('./events');
const faker = require('faker');
const uuid = require('uuid').v4;

const interval = setInterval(function () {
  // event.emit('pickup', order);
  let order = {
    sotoreName: process.env.STORE,
    customerName: faker.name.findName(),
    orderId: uuid(),
    address: faker.address.streetAddress(),
  }
  event.emit('pickup', order);
}, 5000);
// clearInterval(interval);
// setTimeout(()=>{
//   clearInterval(interval)
// },8000)
//try..


event.on('delivered', deliveredHandler);
function deliveredHandler(order) {
  console.log(`VENDOR : Thank you for delivereing ${order.orderId}`);
}