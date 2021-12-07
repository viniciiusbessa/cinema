import styled from "styled-components"
const Styled = styled.div`

.container-data{
    background-image: url('../images/background.png');
    background-repeat: no-repeat;
    height: 900px;
    padding-top: 50px;
}

.cabe{
    display: flex;
    flex-direction: row;
    margin-left: 230px;
    margin-top: 20px;
}

.img-cabe img{
    width: 80px;
}


.tit-cabe{
    color: #F0A124;
    font-size: 50px;
    margin-left: 25px;
}

.descricao{
    color: white;
    font-size: 35px;
    margin-left: 350px;
    margin-bottom: 50px;
}

.datas{
    display: flex;
    flex-direction: row;
    margin-top: 200px;
    margin-left: 250px;
}

.botao-grande{
    padding-right: 25px;
    margin-left: 50px;
    
}

.botao-grande button{
    width: 320px;
    height: 320px;
    border-radius: 30px;
    border: none;
    font-size: 30px;
    background-color: #C60A0A;
    color: white;
}

.botao-pequeno-cima button{
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    background-color: #AA0A0A;
    color: white;
}

.botao-pequeno-baixo button{
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    background-color: #AA0A0A;
    color: white;
}


.botao1{
    margin: 10px;
}

`;
export {Styled};