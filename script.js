
    window.onscroll = function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {  // Jika halaman di-scroll lebih dari 50px
            navbar.classList.add('bg-light');
            navbar.classList.add('shadow');
        } else {  // Jika halaman berada di bagian paling atas
            navbar.classList.remove('bg-light');
            navbar.classList.remove('shadow');
        }
    };

    // Atur keadaan awal saat halaman pertama kali dimuat
    window.onload = function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY === 0) {
            navbar.classList.remove('bg-light');
            navbar.classList.remove('shadow');
        }
    };


