'use srtict';

const event = require('./events');

event.on('pickup', pickupHandler);
function pickupHandler(order) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${order.orderId}`);
    event.emit('in-transit', order);
  }, 1000);
  setTimeout(() => {
    console.log(`VENDOR : delivered order ${order.orderId}`);
    event.emit('delivered', order);
  }, 3000)
}

module.exports=pickupHandler;