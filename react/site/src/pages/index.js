import { Styled } from "./styled"

export default function IndexPrincipal() {
    return (
        <Styled>
            <div className="container-home">
                <div className="cabecalho-home">
                    <div className="img-cabecalho"> <img src="../images/logo.png" alt="" /> </div>
                    <div className="titulo-cabe"> CineMonk </div>
                </div>

                <div className="desc">
                    <div className="titulo-desc"> O que você quer fazer? </div>
                    <div className="botao-comprar"> <button className="botaozinho"> Comprar <br/> Ingresso </button> </div>
                </div>
            </div>
        </Styled>
    );
}