const userEmail = "daniel.abrams@gmail.com";
const devidedEmail= userEmail.split('@');
devidedEmail.splice(1, 1, 'changed.com');
const newUserEmail = devidedEmail.join('@')

console.log(newUserEmail);

