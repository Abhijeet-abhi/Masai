// Problem 2: Print the odd numbers from 0 till the given limit

let start_num = 1;
let end_num = 50;

while (end_num >= start_num) {
  if ((start_num % 2) != 0) {
    console.log(start_num);
  }
  start_num++;
}