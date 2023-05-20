const size = 5; 

for (let i = 1; i <= size; i++) {
  let pattern = ' '.repeat(size - i);

  pattern += '*'.repeat(2 * i - 1);

  console.log(pattern);
}
