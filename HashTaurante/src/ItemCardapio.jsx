

export default function ItemCardapio(props){
    return <div className="container-item-cardapio">
        <img src={props.imagem} alt="" />
        <div className="info">
            <h2>{props.nome}</h2>
            <p className="desc">{props.descricao}</p>
            <p className="price">{props.preco}</p>
        </div>
    </div>
}