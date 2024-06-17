var nome = ''
console.log("Digite seu Nome e pressione enter");

process.stdin.on('data', function(data) {
     var nome = data.toString();
     process.stdout.write("Olá " + nome);
  
     process.exit();
});