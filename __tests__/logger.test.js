'use strict';




const event = require('../events');
require('../logger');

describe('logger tests',()=>{
    let consoleSpy;
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,'log').mockImplementation();
    })
    afterEach(()=>{
        consoleSpy.mockRestore(); 
    })
    test('pickup logger test',()=>{
        event.emit('pickup',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('delivered logger test',()=>{
        event.emit('delivered',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('in-transit logger test',()=>{
        event.emit('in-transit',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
})

