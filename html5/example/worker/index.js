console.log('main');

const worker = new Worker('worker.js', { type: 'module' });

worker.postMessage('hallo Worker');

worker.onmessage = (e) => {
  console.log(e.data);
};
