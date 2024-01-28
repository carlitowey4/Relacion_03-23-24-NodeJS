function multiplicar (base){
        let resultado = [];
  
        for(let i = 1; i<=10; i++){
            resultado.push(i * base);
        }
  
        return resultado;
};

module.exports = {multiplicar};