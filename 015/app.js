const EventEmmiter = require('events');
const myEmm = new EventEmmiter();
const logDataBaseConection = () => {
  console.log('DB connected');
};
myEmm.addListener('connected', logDataBaseConection);

myEmm.emit('connected');
// myEmm.removeListener('connected', logDataBaseConection);

myEmm.on('ms', hey => {
  console.log(hey);
});

myEmm.emit('ms', 'kill');
myEmm.once('off', () => {
  console.log('im one');
});
myEmm.emit('off');
myEmm.setMaxListeners(1);
console.log(myEmm.getMaxListeners());
// console.log(myEmm.listenerCount('msg'));
// console.log(myEmm.listenerCount('off'));
// console.log(myEmm.listeners('off'));
// myEmm.prependListener();

myEmm.on('error', () => console.log('Erorr'));
myEmm.emit('error');

const tar = new EventTarget();
const Itar = () => {
  console.log('black');
};
tar.addEventListener('connected', Itar);
tar.dispatchEvent(new Event('connected'));
