const mercado = require('../config/mercado'); //importa uma conexão com o banco de dados

//função para selecionar todos os itens da tabela
const getAllTabelamercado = (req, res) => {
    mercado.query('SELECT * FROM tabelamercado', (err, results) => {

if(err){
    console.error('erro na seleção')
    res.status(500).send('erro na seleção');
    return;
    }   
    res.json(results);
    });
};



module.exports = {
getAllTabelamercado
}