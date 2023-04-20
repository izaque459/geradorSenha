const { Command } = require("commander");

const programa = new Command();

programa
    .version('1.0.0')
    .description('Gerador de senhas entre 12 e 24 caracteres');

programa
  .option('-t, --tamanho <number>', 'define um tamanho para a senha (padrao 12)', parseInt);
  

programa.parse(process.argv);