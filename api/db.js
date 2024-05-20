//import { Client } from 'pg';
import pkg from 'pg';
const { Client } = pkg;
export const db = new Client({
    host: "localhost",
    user: "postgres", // Usuário do PostgreSQL
    password: "Ramon123", // Senha do PostgreSQL
    database: "cadastro2", // Nome do banco de dados
    port: 5432 // Porta padrão do PostgreSQL
});

// db.connect(err => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err.stack);
//     } else {
//         console.log('Conectado ao banco de dados PostgreSQL.');
//     }
// });
// import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Ramon123",
//     database: "cadastro"
// })
// db.connect(err => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err.stack);
//     } else {
//         console.log('Conectado ao banco de dados MySQL.');
//     }
// });