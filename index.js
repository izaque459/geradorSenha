const { Command } = require("commander");

const programa = new Command();



function geradorSenha(tamanho) {
    const variosCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let senha = '';
    let senhaSet = new Set();
    while (senhaSet.size < tamanho) {
      let randomIndex = Math.floor(Math.random() * variosCaracteres.length);
      senhaSet.add(variosCaracteres[randomIndex]);
    }
    senha = Array.from(senhaSet).join('');
    return senha;
  }
  


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
        console.log(senha);
    });
  

programa.parse(process.argv);
