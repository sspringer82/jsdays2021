class Bird {
  canFly: boolean = true;
}

class Fish {
  canSwim: boolean = true;
}

class Duck {
  canFly = true;
  canSwim = true;
}

const duck = {
  name: 'Donald',
  canFly: true,
  canSwim: true,
};

function foodChain(animal: Bird | Fish) {
  if (animal.hasOwnProperty('canSwim')) {
  } else if (animal instanceof Fish) {
  }
}
