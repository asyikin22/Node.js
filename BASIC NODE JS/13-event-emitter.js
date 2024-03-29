const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('order-pizza', (size, topping, customer) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping} for ${customer}`);
});

emitter.on('order-pizza', (size) => {
    if (size === "extra large") {
        console.log("Serving complementary 1L drink!")
    }
})

emitter.emit("order-pizza", "extra large", "topping", "Asyikin")

//emitter.on = used to register event listeners for a specific event
//emitter.emit = used to trigger the event

