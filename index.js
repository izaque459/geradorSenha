const { Command } = require("commander");

const programa = new Command();

programa
    .version('1.0.0')
    .description('Gerador de senhas entre 12 e 24 caracteres');

programa
  .option('-t, --tamanho <number>', 'define um tamanho para a senha (padrao 12)', parseInt)
  .action(()=>{
        let tamanhoSenha = programa.opts().tamanho || 12;

        if (tamanhoSenha < 12) {
            tamanhoSenha = 12;
        } else if (tamanhoSenha > 24) {
            tamanhoSenha = 24;
        }

        let senha = geradorSenha(tamanhoSenha);
        console.log(tamanhoSenha);
    });
  

programa.parse(process.argv);
