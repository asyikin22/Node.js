const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received use ${name} with id:${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here  `)
})

customEmitter.on('response', () => {
    console.log(`some more logic here  `)
})

customEmitter.emit('response', 'Asyikin', 20)

