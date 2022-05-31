// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let start_num = 1;
let limit = 100;
let count = 0;
let sum = 0;
while (start_num <= limit) {
  if (start_num % 2 == 0) {
    sum = sum + start_num;
    count++;
    start_num++;
  }
}
let avg = sum / count;
console.log(avg);
