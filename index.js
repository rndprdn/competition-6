const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];

const left = array.filter((item, index) => index < 5 || (index > 9 && index < 15));

const center = array.filter((item, index) => (index >= 5 && index <= 9) || index > 14);

const formattedCenter = [...center.slice(0, 5).reverse(), ...center.slice(5).reverse()]

const right = [...left.slice(0, 5), ...center.slice(0, 5).reverse()]

for (let i = 0; i < array.length / 2; i++) {
  console.log(`${left[i]} -> ${formattedCenter[i]} -> ${right[i]}`)
}
