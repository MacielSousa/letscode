class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw 'informação não numérica';
        this._cor = 'red';
        this.base = base;
        this.altura = altura;
    }

    get cor() { return this._cor; }
    set cor(cor) { 
        if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
            throw 'O valor da propriedade cor deve ser "red", "green" ou "blue"';
        }
        this._cor = cor
     }

    calculaArea(){
        return this.base*this.altura;
    }
    
    duplicarAltura(){
        this.altura = this.altura * 2;
    }

    duplicarBase() {
        this.base = 2* this.base;
    }

    imprimir(){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`
    }
}




// const quadrado = new Quadrado(11, 12);
// quadrado.duplicarBase();
// quadrado.duplicarAltura();
// console.log(quadrado.calculaArea());

//  const divEle = document.querySelector('.resultado');
// console.log(divEle);
// divEle.innerHTML = `<div><p>${quadrado.calculaArea()}</p></div>`;
// divEle.innerHTML = `${quadrado.imprimir()}`

const quadrado = new Quadrado(3, 4);
console.log(quadrado.cor);
quadrado.cor = 'green';
console.log(quadrado.cor);