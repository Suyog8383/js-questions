// let arr = [9, 8, 4, 9, 5, 1, 2, 7, 1, 4];
// function numberForm(arr) {
//   let result = [];
//   let final = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//     count++;
//     if (count === 3) {
//       final.push(result);
//       result = [];
//       count = 0;
//     } else if (count === 4) {
//       final.push(result);
//       result = [];
//     }
//   }
//   return `#+91-(${final[0]})-(${final[1]})-(${final[2]})`;
// }
// console.log(numberForm(arr));

let arr = [9, 8, 4, 9, 5, 1, 2, 7, 1, 4];
function numberForm(arr) {
  let result = [];
  let final = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    count++;
    if (count === 3) {
      final.push(result);
      result = [];
      count = 0;
    } else if (count === 4) {
      final.push(result);
      result = [];
    }
  }
  return `#+91-(${final[0]})-(${final[1]})-(${final[2]})`;
}
console.log(numberForm(arr));
