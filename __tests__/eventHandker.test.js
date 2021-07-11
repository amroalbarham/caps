'use strict';



const uuid = require('uuid').v4;
const faker = require('faker');
const event = require('../events');

let store=(process.env.STORE|| 'caps');
require('../driver');
require('../vendor');


setTimeout = jest.fn();
describe('event handler tests', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })
  afterEach(() => {
    consoleSpy.mockRestore();
  })
  let order = {
    orderId: uuid(),
    storeName: store,
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  test('pick up handler test', () => {
    event.emit('pickup', order)
    expect(setTimeout).toHaveBeenCalled();
  })
  test('delivered handler test', () => {
    event.emit('delivered', order)
    expect(consoleSpy).toHaveBeenCalled();
  })
  test('in-transit handler test', () => {
    event.emit('intransit', order)
    expect(setTimeout).toHaveBeenCalled();
  })
})