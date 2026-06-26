function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) password += characters[Math.floor(Math.random() * characters.length)];
  return password;
}
const length = parseInt(process.argv[2]) || 12;
console.log("Generated Password:", generatePassword(length));
