let stored_username = "abhijeet";
let stored_password = "12345";

let username = "abhijeet";
let password = "12345";

if (stored_username == username) {
  if (stored_password == password) {
    console.log("user can login");
  }
  else {
    console.log("password is wrong");
  }
} 
else {
  console.log("username or password is incorrect");
}