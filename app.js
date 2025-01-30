import React, { useState } from "react";
import "./styles.css";

function App() {
  const [fornecedores, setFornecedores] = useState([]);
  const [novoFornecedor, setNovoFornecedor] = useState({ nome: "", email: "" });

  const handleChange = (e) => {
    setNovoFornecedor({ ...novoFornecedor, [e.target.name]: e.target.value });
  };

  const adicionarFornecedor = (e) => {
    e.preventDefault();
    if (novoFornecedor.nome && novoFornecedor.email) {
      setFornecedores([...fornecedores, novoFornecedor]);
      setNovoFornecedor({ nome: "", email: "" });
    }
  };

  const removerFornecedor = (index) => {
    setFornecedores(fornecedores.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Cadastro de Fornecedores</h1>
      <form onSubmit={adicionarFornecedor} className="form">
        <input
          type="text"
          name="nome"
          value={novoFornecedor.nome}
          onChange={handleChange}
          placeholder="Nome do fornecedor"
          required
        />
        <input
          type="email"
          name="email"
          value={novoFornecedor.email}
          onChange={handleChange}
          placeholder="E-mail do fornecedor"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="lista">
        {fornecedores.map((fornecedor, index) => (
          <li key={index} className="item">
            {fornecedor.nome} - {fornecedor.email}
            <button onClick={() => removerFornecedor(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
