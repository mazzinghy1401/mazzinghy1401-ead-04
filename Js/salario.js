class Salario {
  /**
   * Construtor da Classe
   * @param {number} pSalarioBruto Salario Bruto;
   */
  constructor(pSalarioBruto) {
    this._salarioBruto = undefined;
    this._descontoINSS = undefined;
    this._descontoIRPF = undefined;

    this._validarValor(pSalarioBruto);
    this._salarioBruto = pSalarioBruto;
    this.descontoINSS;
    this.descontoIRPF;
    Object.freeze(this);
  }

  _validarValor(valor) {
    if (typeof valor !== 'number' || valor < 0) {
      throw new Error('O operando dever ser um número, maior ou igual a 0!');
    }
  }
  get salarioBruto() {
    return this._salarioBruto;
  }
  get descontoINSS() {
    if (this._salarioBruto <= 1693.72) {
      this._descontoINSS = Number((this._salarioBruto * 0.08).toFixed(2));
      return this._descontoINSS;
    } else {
      if (this._salarioBruto <= 2822.9) {
        this._descontoINSS = Number((this._salarioBruto * 0.09).toFixed(2));
        return this._descontoINSS;
      } else {
        if (this._salarioBruto <= 5645.8) {
          this._descontoINSS = Number((this._salarioBruto * 0.11).toFixed(2));
          return this._descontoINSS;
        } else {
          this._descontoINSS = 621.04;
          return this._descontoINSS;
        }
      }
    }
  }
  get descontoIRPF() {
    let CalculoB = this._salarioBruto - this._descontoINSS;
    if (CalculoB <= 1903.98) {
      this._descontoIRPF = 0.0;
      return this._descontoIRPF;
    } else {
      if (CalculoB <= 2826.65) {
        this._descontoIRPF = Number((Calculobase * 0.075 - 142.8).toFixed(2));
        return this._descontoIRPF;
      } else {
        if (CalculoB <= 3751.05) {
          this._descontoIRPF = Number((CalculoB * 0.15 - 354.8).toFixed(2));
          return this._descontoIRPF;
        } else {
          if (CalculoB <= 4664.68) {
            this._descontoIRPF = Number((CalculoB * 0.225 - 636.13).toFixed(2));
            return this._descontoIRPF;
          } else {
            this._descontoIRPF = Number((CalculoB * 0.275 - 869.36).toFixed(2));
            return this._descontoIRPF;
          }
        }
      }
    }
  }

  get totalDescontos() {
    return this._descontoINSS + this._descontoIRPF;
  }
  get salarioLiquido() {
    return this._salarioBruto - this._descontoINSS - this._descontoIRPF;
  }
}
