const kuromoji = require('kuromoji');

const builder = kuromoji.builder({
  dicPath: 'node_modules/kuromoji/dict'
});

builder.build((err, tokenizer) => {
  if (err) throw err;

  let tokens = tokenizer.tokenize('これはサンプルです。');
  console.log(tokens);
});
