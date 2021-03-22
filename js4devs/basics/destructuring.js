const a = [1, 2, 3];

const b = a[0];
const c = a[1];

const [d, e] = a;
const [, f] = a;
const [g, , h] = a;

const o = {
  name: 'Klaus',
  age: 42,
  address: {
    street: 'Sesamstraße',
  },
};
Object.entries(o).forEach(([key, value]) => console.log(key, value));

const {
  name,
  age,
  address: { street },
} = o;

console.log('Name: ', name);
console.log('Age: ', age);
console.log('Street: ', street);
