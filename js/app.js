function showSection(section) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(sec => {
      if (sec.id === `${section}-segitiga`) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }
  
  function hitungLuas(event) {
    event.preventDefault();
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const hasilLuas = document.getElementById('hasil-luas');
  
    if (alas && tinggi) {
      const luas = 0.5 * alas * tinggi;
      hasilLuas.textContent = `Luas Segitiga: ${luas}`;
    } else {
      hasilLuas.textContent = 'Harap masukkan nilai alas dan tinggi.';
    }
  }
  
  function hitungKeliling(event) {
    event.preventDefault();
    const sisiA = document.getElementById('sisi-a').value;
    const sisiB = document.getElementById('sisi-b').value;
    const sisiC = document.getElementById('sisi-c').value;
    const hasilKeliling = document.getElementById('hasil-keliling');
  
    if (sisiA && sisiB && sisiC) {
      const keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
      hasilKeliling.textContent = `Keliling Segitiga: ${keliling}`;
    } else {
      hasilKeliling.textContent = 'Harap masukkan nilai ketiga sisi.';
    }
  }
  