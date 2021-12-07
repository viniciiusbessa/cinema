import { Styled } from "./styled"

export default function IndexData() {
    return(
        <Styled>
            <div className="container-data">
                <div className="cabe">
                    <div className="img-cabe"> <img src="../images/logo.png" alt=""/> </div>
                    <div className="tit-cabe"> CineMonk </div>
                </div>

                <div className="desc-data">
                    <div className="descricao"> Escolha a data que você deseja comprar o ingresso.</div>

                    <div className="datas">
                        <div className="botao-grande"> 
                            <button className="bt-maior"> Hoje <br/> 04 <br/> Maio </button>
                        </div>
                        <div className="botoes-menores">
                            <div className="botao-pequeno-cima"> 
                                <button className="botao1"> Sábado <br/> 05 <br/> Maio </button>
                                <button className="botao1"> Domingo <br/> 06 <br/> Maio </button>
                                <button className="botao1"> Segunda <br/> 07 <br/> Maio </button>
                            </div>
                            <div className="botao-pequeno-baixo">
                                <button className="botao1"> Terça <br/> 08 <br/> Maio </button>
                                <button className="botao1"> Quarta <br/> 09 <br/> Maio </button>
                                <button className="botao1"> Quinta <br/> 10 <br/> Maio </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Styled>
    );
}