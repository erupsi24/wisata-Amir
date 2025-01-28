document.addEventListener("DOMContentLoaded", () => {
    // Fungsi untuk menampilkan hanya satu bagian berdasarkan ID
    function showSection(sectionId) {
        // Sembunyikan semua bagian
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Tampilkan bagian yang sesuai
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Menambahkan efek gambar pada galeri
    const images = document.querySelectorAll(".gallery img"); // Pilih semua gambar dalam galeri
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("show"); // Tambahkan kelas "show" ke gambar
        }, index * 300); // Beri jeda waktu 300ms untuk setiap gambar
    });

    // Menambahkan fungsi ke global scope agar bisa dipanggil di onclick
    window.showSection = showSection;

    // Tampilkan bagian Home secara default saat halaman dimuat
    showSection('');
});

document.addEventListener("DOMContentLoaded", () => {
    // Tampilkan bagian galeri
    const gallerySection = document.getElementById("gallery");
    gallerySection.style.display = "block";

    // Ambil semua iframe-container
    const iframeContainers = document.querySelectorAll(".iframe-container");

    // Tambahkan animasi secara berurutan
    iframeContainers.forEach((container, index) => {
        setTimeout(() => {
            container.style.animationDelay = `${index * 0.5}s`; // Delay antar video
            container.style.opacity = "1"; // Tampilkan
        }, index * 500); // Jeda antara iframe
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Pilih bagian about
    const aboutSection = document.getElementById('about');

    // Fungsi untuk memeriksa jika bagian sudah di-scroll ke layar
    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            aboutSection.classList.add('show'); // Menambahkan kelas 'show' untuk animasi
        }
    }

    // Periksa visibilitas saat halaman di-scroll
    window.addEventListener('scroll', checkVisibility);

    // Jalankan sekali untuk cek visibility saat halaman dimuat
    checkVisibility();
});

// Fungsi untuk menampilkan bagian yang dipilih dan menyembunyikan bagian lain
function showSection(sectionId) {
    // Menyembunyikan semua bagian
    document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Menampilkan bagian yang dipilih
    document.getElementById(sectionId).style.display = 'block';
    
    // Jika Anda ingin menambahkan animasi (misalnya fade-in) untuk bagian About
    if (sectionId === 'about') {
        setTimeout(function() {
            document.getElementById('about').classList.add('show');
        }, 300); // Delay sebelum menambahkan kelas 'show' untuk animasi
    }
}


