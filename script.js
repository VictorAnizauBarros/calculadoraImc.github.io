const btnCalcular = document.querySelector('#calculate');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const valueElement = document.querySelector('#value');
const descriptionElement = document.querySelector('#description');

btnCalcular.addEventListener('click', function(event) {
    event.preventDefault();

    // Obter os valores de peso e altura
    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);

    // Verificar se os valores são válidos (números positivos)
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcular o IMC
    const bmi = (weight / (height * height)).toFixed(2);

    // Determinar a descrição com base no IMC
    let description = '';
    //Setar cor do bmi. 
    if(bmi<18.5 || bmi>=30){
        value.className = 'attention';
    }

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Parabéns! Seu peso está normal.';
        value.className = 'normal'
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Atenção! Você está acima do peso.';
        value.className = 'intermediate'
    } else {
        description = 'Cuidado! Você está obeso.';
    }

    // Mostrar resultados na interface
    valueElement.textContent = bmi.replace('.',',');
    descriptionElement.textContent = description;
    
    // Mostrar as informações
    document.querySelector('#infos').classList.remove('hidden');
});
