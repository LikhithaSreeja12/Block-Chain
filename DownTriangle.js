const size = 5; 

for (let i = size; i >= 1; i--) {
  let pattern = '';

  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }

  console.log(pattern);
}
