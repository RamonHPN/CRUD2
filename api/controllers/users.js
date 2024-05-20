import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = 'SELECT * FROM usuarios';
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };
  
  export const addUser = (req, res) => {
    const q = 'INSERT INTO usuarios(nome, email, fone, data_nascimento) VALUES($1, $2, $3, $4)';
    
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, values, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json('Usuário criado com sucesso.');
    });
  };
  
  export const updateUser = (req, res) => {
    const q = 'UPDATE usuarios SET nome = $1, email = $2, fone = $3, data_nascimento = $4 WHERE id = $5';
    
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json('Usuário atualizado com sucesso.');
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = 'DELETE FROM usuarios WHERE id = $1';
    
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json('Usuário deletado com sucesso.');
    });
  };
// import { db } from "../db.js";

// export const getUsers = (_, res) => {
//   const q = "SELECT * FROM usuarios";

//   db.query(q, (err, data) => {
//     if (err) return res.json(err);

//     return res.status(200).json(data);
//   });
// };

// export const addUser = (req, res) => {
//   const q =
//     "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

//   const values = [
//     req.body.nome,
//     req.body.email,
//     req.body.fone,
//     req.body.data_nascimento,
//   ];

//   db.query(q, [values], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuário criado com sucesso.");
//   });
// };

// export const updateUser = (req, res) => {
//   const q =
//     "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

//   const values = [
//     req.body.nome,
//     req.body.email,
//     req.body.fone,
//     req.body.data_nascimento,
//   ];

//   db.query(q, [...values, req.params.id], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuário atualizado com sucesso.");
//   });
// };

// export const deleteUser = (req, res) => {
//   const q = "DELETE FROM usuarios WHERE `id` = ?";

//   db.query(q, [req.params.id], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuário deletado com sucesso.");
//   });
// };