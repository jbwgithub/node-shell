function pwd () {
  process.stdout.write(process.cwd()); // or __dirname
  process.stdout.write('\nprompt > ');
}

console.log("we are inside pwd.js");

module.exports = pwd;
