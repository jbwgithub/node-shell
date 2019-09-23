function pwd () {
  process.stdout.write(process.cwd()); // or __dirname
  process.stdout.write('\nprompt > ');
}

module.exports = pwd;
