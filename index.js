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
  
  function checaSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./-=]).{12,24}$/;
    return regex.test(senha);
  }
  
  function geradorSenhaForte(tamanho){
    let senha = 'aaaaaaaaaaaa';
    while(!checaSenha(senha)){
        senha = geradorSenha(tamanho);
    }
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

        let senha = geradorSenhaForte(tamanhoSenha);

        console.log("Senha gerada: "+senha);
    });
  
programa
    .command('checaSenha <senha>')
    .description('Checa a senha, entre aspas simples, fornecida como inválida ou válida')
    .action((senha)=>{
        if(checaSenha(senha))
            console.log("Senha válida: "+senha);
        else
            console.log("Senha inválida: "+senha);

    });

programa.parse(process.argv);
