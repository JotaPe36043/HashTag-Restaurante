import { useState } from "react";
import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import Navegacao from './navegacao.jsx';
import ItemCardapio from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio.js";

export default function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item, index) => (
          <ItemCardapio
            key={index}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
      <footer ></footer>
    </>
  );
}
