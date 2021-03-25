self.onmessage = (e) => {
  console.log(e.data);
  self.postMessage('Hallo Chef');
};
