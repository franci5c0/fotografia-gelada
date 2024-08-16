//---------------------------------------IMPORTAÇÃO DAS BIBLIOTECAS---------------------------------------//

//importar bibliotecas
const dotenv = require('dotenv');//importa o pacote cors para permitir requisições de diferentes origens
const express = require('express');//importa o framework express
const cors = require('cors');//importa o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser');//importa o pacote body-parser para analisar o corpo das requisições HTTP

//---------------------------------------CONFIGURAÇÃO DE VARIÁVEIS---------------------------------------//

//configurar as variáveis de ambiente
dotenv.config();//carrega as variáveis definidas no arquivo.env para process.env


//const fotografia = require('./config/fotografia');//importa a conexão com o banco de dados


//inicializa uma nova aplicação express
const app = express();//inicializa uma nova aplicação express


//configurando o CORS e o body-parser
app.use(cors());//habilita o CORS para todas as rotas
app.use(bodyParser.json());//configura o body-parser para analisar requisições JSON


//---------------------------------------INICIALIZAÇÃO DO SERVIDOR---------------------------------------//

//rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send('O servidor tá aberto');//define uma rota inicial para testar o servidor
});


//-----------------------------------CONFIGURAÇÃO DE EXECUÇÃO DO SERVIDOR--------------------------------//

const PORT = process.env.PORT || 3000;//define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}); //escreve uma mensagem informando que o servidor está rodando

