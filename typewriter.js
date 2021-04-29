const sentence = "hello there from lighthouse labs";
let timeout = 50;
for (let i = 0; i < sentence.length; i++) {
  timeout += 50;
  setTimeout(()=> {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, timeout);
}