const cond = 'true';

if (cond === true) {
  console.log('cond is true');
} else if (cond === false) {
  console.log('cond is false');
} else {
  console.log('cond is something else');
}

switch (cond) {
  case true:
    console.log('cond is true');
    break;
  case false:
    console.log('cond is false');
    break;
  default:
    console.log('cond is something else');
    break;
}

// while (true) {}

// do {} while (true);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

const a = [1, 2, 3];
for (let i in a) {
  console.log(i);
}
const b = [1, 2, 3];
for (let i of b) {
  console.log(i);
}
const c = [1, 2, 3];
c.forEach((e) => console.log(e));

const o = {
  name: 'Klaus',
  age: 42,
};
Object.keys(o).forEach((e) => console.log(e));
Object.entries(o).forEach((e) => console.log(e));
