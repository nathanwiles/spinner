const spinner = function(speed) {
  const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; // array of spinner characters

  for (const line in spinnerArr) {
    let delay = speed * line; // delay is the speed * the line number
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArr[line]}   `);
    }, delay);
  }

}

spinner(100);