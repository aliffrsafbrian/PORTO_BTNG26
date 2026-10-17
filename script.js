// Tombol Ubah Teks
      const btnUbahTeks = document.getElementById("btnUbahTeks");
      const deskripsi = document.getElementById("deskripsi");
      const teksAwal =
        "Saya membangun antarmuka web yang bersih, responsif, dan berfokus pada pengalaman pengguna. Senang belajar teknologi baru dan berbagi ilmu dengan komunitas.";
      const teksBaru =
        "Saya percaya website yang baik adalah website yang bisa diakses semua orang. Fokus saya: performa, aksesibilitas, dan pengalaman pengguna yang menyenangkan.";
      let tampilTeksBaru = false;

      btnUbahTeks.addEventListener("click", () => {
        deskripsi.textContent = tampilTeksBaru ? teksAwal : teksBaru;
        btnUbahTeks.textContent = tampilTeksBaru
          ? "Ubah Teks"
          : "Kembalikan Teks";
        tampilTeksBaru = !tampilTeksBaru;
      });

      // Tombol Ganti Tema
      const btnGantiTema = document.getElementById("btnGantiTema");
      btnGantiTema.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        btnGantiTema.textContent = isLight ? "Tema Gelap" : "Ganti Tema";
      });