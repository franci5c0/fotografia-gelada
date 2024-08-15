//importando a biblioteca do mysql
const mysql = require('mysql2')

//exibindo as variáveis do ambiente
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

//conectando com o mysql
const mercado = mysql.createConnection({
host:process.env.DB_HOST, //endereço do servidor do banco de dados
user:process.env.DB_USER, //usuário do banco de dados
password:process.env.DB_PASS, //senha do banco de dados
name:process.env.DB_NAME //nome do banco de dados
});


mercado.connect((err) => {
if (err){
    console.log('Erro ao conectar com o database', err);
}
}
)

