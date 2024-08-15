// Mengambil nilai input dari form
function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`isi inputan berat badan: ${inputWeight}`);
    console.log(`isi inputan tinggi badan: ${inputHeight}`);

    // Mengecek jika input berat badan atau tinggi badan kosong
    if (inputWeight == '' || inputHeight == '') {
    // Menampilkan pesan peringatan jika ada input yang kosong
        alert('Inputan Berat Badan atau Tinggi Badan Kosong!');
    // Mengecek jika nilai input lebih kecil atau sama dengan nol
    } else if (inputWeight <= 0 || inputHeight <= 0) {
    // Menampilkan pesan peringatan jika nilai input tidak valid
        alert('Masukkan nilai yang lebih besar dari nol.');
    } else {
        // Memanggil fungsi result dengan parameter tinggi dan berat badan
        result(inputHeight, inputWeight);
        // Menampilkan pesan di konsol bahwa form berhasil di-submit
        console.log('form submitted');
    }
}

function result(inputHeight, inputWeight) {
    // Mengonversi tinggi badan dari cm ke meter
    let convertCmToM = inputHeight / 100;
    // Menghitung nilai BMI
    let bmi = inputWeight / Math.pow(convertCmToM, 2);
    // Membulatkan nilai BMI hingga dua angka di belakang koma
    bmi = bmi.toFixed(2);

    // Menampilkan nilai BMI di halaman
    document.getElementById('bmiValue').textContent = bmi;
    // Menampilkan interpretasi BMI berdasarkan nilai yang 
    document.getElementById('bmiInterpretation').textContent = interpretBMI(bmi);
    // Menampilkan deskripsi BMI yang relevan
    document.getElementById('bmiDescription').textContent = bmiDescription(bmi);
    // Menampilkan elemen hasil BMI yang sebelumnya disembunyikan
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
        return 'BMI Anda antara 18.5 - 24.9. Berat badan Anda berada dalam kategori normal. Pertahankan pola makan sehat dan olahraga teratur.';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'Hasil BMI Anda antara 25 dan 29.9. Anda berada dalam kategori kelebihan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan dan berolahraga.';
    } else {
        return 'Hasil BMI Anda 30 atau lebih. Anda berada dalam kategori kegemukan. Anda disarankan untuk konsultasi dengan ahli gizi untuk menurunkan berat badan hingga batas normal.';
    }
}

// Mengatur ulang hasil BMI (Reset)
function resetForm() {
    document.getElementById('bmiValue').reset();
    document.getElementById('bmiResult').style.display = 'none';
    document.getElementById('bmiInterpretation').textContent = '';
    document.getElementById('bmiDescription').textContent = '';
}