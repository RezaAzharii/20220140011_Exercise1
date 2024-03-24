let currentIndex = 0; // Indeks saat ini dari kartu pertama dalam set yang ditampilkan
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showNextSet() {
    // Sembunyikan set kartu saat ini
    hideCurrentSet();

    // Perbarui currentIndex untuk menunjuk ke set kartu berikutnya
    currentIndex += 3;

    // Jika currentIndex melebihi panjang array kartu, kembali ke awal
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    // Tampilkan set kartu berikutnya
    displayCurrentSet();
}

function showPrevSet() {
    // Sembunyikan set kartu saat ini
    hideCurrentSet();

    // Perbarui currentIndex untuk menunjuk ke set kartu sebelumnya
    currentIndex -= 3;

    // Jika currentIndex menjadi negatif, kembali ke akhir array kartu
    if (currentIndex < 0) {
        currentIndex = Math.max(cards.length - 3, 0);
    }

    // Tampilkan set kartu sebelumnya
    displayCurrentSet();
}

function hideCurrentSet() {
    // Sembunyikan kartu dalam set saat ini
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (cards[i]) {
            cards[i].classList.add('hidden');
        }
    }
}

function displayCurrentSet() {
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (cards[i]) {
            cards[i].classList.remove('hidden');
        }
    }
}


for (let i = 3; i < cards.length; i++) {
    cards[i].classList.add('hidden');
}


nextBtn.addEventListener('click', showNextSet);
prevBtn.addEventListener('click', showPrevSet);
