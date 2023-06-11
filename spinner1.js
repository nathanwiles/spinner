const spinner = function() {
  const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; // array of spinner characters
  
  for (const line in spinnerArr) {
    let delay = 50 * line; // delay is the time increment * the line number
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArr[line]}   `);
    }, delay);
  }

};

spinner();