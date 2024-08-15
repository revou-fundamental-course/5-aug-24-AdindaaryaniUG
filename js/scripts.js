function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`isi inputan berat badan: ${inputWeight}`);
    console.log(`isi inputan tinggi badan: ${inputHeight}`);

    if (inputWeight == '' || inputHeight == '') {
        alert('Inputan Berat Badan atau Tinggi Badan Kosong!');
    } else if (inputWeight <= 0 || inputHeight <= 0) {
        alert('Masukkan nilai yang lebih besar dari nol.');
    } else {
        result(inputHeight, inputWeight);
        console.log('form submitted');
    }
}

function result(inputHeight, inputWeight) {
    let convertCmToM = inputHeight / 100;
    let bmi = inputWeight / Math.pow(convertCmToM, 2);
    bmi = bmi.toFixed(2);

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiInterpretation').textContent = interpretBMI(bmi);
    document.getElementById('bmiDescription').textContent = bmiDescription(bmi);
    document.getElementById('bmiResult').style.display = 'block';
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return 'Anda memiliki kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Berat badan Anda normal (ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'Anda memiliki berat badan berlebih';
    } else {
        return 'Anda mengalami kegemukan (Obesitas)';
    }
}

function bmiDescription(bmi) {
    if (bmi < 18.5) {
        return 'Hasil BMI Anda di bawah 18.5. Anda disarankan untuk konsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Hasil BMI Anda antara 18.5 dan 24.9. Anda memiliki berat badan ideal.';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'Hasil BMI Anda antara 25 dan 29.9. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan dan berolahraga.';
    } else {
        return 'Hasil BMI Anda 30 atau lebih. Anda disarankan untuk konsultasi dengan ahli gizi untuk menurunkan berat badan hingga batas normal.';
    }
}


//function downloadResult() {
    //const element = document.createElement('a');
    //const resultContent = document.getElementById('bmiResult').innerText;
    //const file = new Blob([resultContent], { type: 'text/plain' });
    //element.href = URL.createObjectURL(file);
    //element.download = "BMI_Result.txt";
    //document.body.appendChild(element);
    //element.click();
//}