import React, { Component } from "react";
import Caixa from "./Caixa";
import "../css/calendario.css";

class Calendario extends Component {
  constructor() {
    super();
    this.state = {
      mes: 0,
      mesAtual: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      mesDia: [6, 2, 2, 5, 7, 3, 5, 1, 4, 6, 2, 4],
    };
  }

  renderCaixa(value = "") {
    return <Caixa dia={value} />;
  }

  diasDaSemana() {
    return ["D", "S", "T", "Q", "Q", "S", "S"];
  }

  generateDias(n) {
    let vet = [];
    let cont = 0;
    for (let i = 0; ; i++) {
      if (i < this.state.mesDia[this.state.mes] - 1) {
        vet[i] = " ";
      } else {
        cont = cont + 1;
        vet[i] = cont;
      }

      if (cont == n) {
        break;
      }
    }

    return vet;
    //return Array.from({ length: n }, (_, i) => i + 1);
  }

  diasDoMes(mes) {
    //01/01/2021 -> Sexta

    let vet = [];

    if (mes === 1) {
      vet = this.generateDias(28);
    } else {
      if (
        mes == 0 ||
        mes == 2 ||
        mes == 4 ||
        mes == 6 ||
        mes == 7 ||
        mes == 9 ||
        mes == 11
      ) {
        vet = this.generateDias(31);
      } else {
        vet = this.generateDias(30);
      }
    }

    return vet;
  }

  handleButtonAnterior() {
    let value = this.state.mes;
    const vetorMes = this.state.mesAtual;
    const mesDia = this.state.mesDia;

    if (value == 0) {
      value = 11;
    } else {
      value = value - 1;
    }

    this.setState({
      mes: value,
      mesAtual: vetorMes,
      mesDia: mesDia,
    });
  }

  handleButtonProximo() {
    let value = this.state.mes;
    const vetorMes = this.state.mesAtual;
    const mesDia = this.state.mesDia;

    if (value == 11) {
      value = 0;
    } else {
      value = value + 1;
    }

    this.setState({
      mes: value,
      mesAtual: vetorMes,
      mesDia: mesDia,
    });
  }

  render() {
    return (
      <section className="calendario">
        <h1 className="calendario-cabecalho">Calendario</h1>
        <div className="calendario-title">
          <div className="calendario-cabeca">
            <button
              onClick={this.handleButtonAnterior.bind(this)}
              className="calendario-botao-anterior"
            >
              Anterior
            </button>
            <text className="calendario-mes">
              {this.state.mesAtual[this.state.mes]}
            </text>
            <button
              onClick={this.handleButtonProximo.bind(this)}
              className="calendario-botao-proximo"
            >
              Proximo
            </button>
          </div>

          <div className="calendario-linhas">
            {this.diasDaSemana().map((diasSemana, index) => {
              return this.renderCaixa(diasSemana);
            })}

            {this.diasDoMes(this.state.mes).map((dias, index) => {
              return this.renderCaixa(dias);
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Calendario;
