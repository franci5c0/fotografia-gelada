//---------------IMPORTAÇÃO DE BIBLIOTECAS MYSQL2 E CONEXÃO COM DB---------------//

const mysql = require('mysql2');//importa o pacote mysql2 para conectar ao banco de dados


//---------------EXIBIÇÃO DE VARIÁVEIS DE AMBIENTE CARREGADAS---------------//

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME;', process.env.DB_NAME);
//depois pode apagar ou comentar

const db = mysql.createConnection({

    host:process.env.DB_HOST,//endereço do servidor de banco de dados
    user:process.env.DB_USER,//nome de usuário para acessar o banco de dados
    password:process.env.DB_PASS,//senha do usuário para acessar o banco de dados
    database:process.env.DB_NAME//nome do banco de dados a ser acessado

});


//---------------CONEXÃO COM O BANCO DE DADOS E EXPORTAÇÃO DA CONEXÃO---------------//

db.connect((err) => {
    if(err) {
    console.error('Erro ao conectar ao banco de dados:', err);//exibe mensagem de erro
    return;//retorna a resposta
    }
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`);//exibe mensagem de sucesso
})

module.exports = db;//exporta a conexão para ser usada em outros arquivos