// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let start_num=1;
let limit= 30;

while(start_num<=limit){
  if(start_num%3 == 0){
    console.log(start_num);
  }
  start_num++;
}