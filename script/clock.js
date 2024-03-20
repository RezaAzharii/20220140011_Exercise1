function updateClock() {
    // Buat objek Date untuk mendapatkan waktu saat ini
    let now = new Date();
  
    // Ekstrak komponen jam, menit, dan detik dari objek Date
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format waktu agar selalu dua digit (misalnya: 05:03:09)
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
  
    // Tampilkan waktu dalam format hh:mm:ss pada elemen dengan ID hasil
    document.getElementById("hasil").textContent =
      hours + ":" + minutes + ":" + seconds;
  
    // Perbarui setiap detik
    setTimeout(updateClock, 1000);
  }
  
  function formatTime(time) {
    // Tambahkan angka 0 di depan waktu jika waktu hanya satu digit
    return time < 10 ? "0" + time : time;
  }
  
  // Panggil fungsi updateClock untuk pertama kali
  updateClock();