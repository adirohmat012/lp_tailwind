const fs = require("fs");

const content = `
# Landing Page dengan Tailwind CSS

Project ini adalah landing page yang dibuat menggunakan **Tailwind CSS**, sebuah utility-first CSS framework yang memungkinkan pembuatan desain yang cepat, responsif, dan mudah dikustomisasi.

## Fitur

- Desain responsif dengan utilitas Tailwind CSS
- Mudah menyesuaikan tampilan menggunakan kelas-kelas utility
- Struktur file bersih dan modular
- Mendukung mode dark dan light (jika diimplementasikan)

## Cara Pakai

1. Clone atau download repository ini
2. Buka file \`index.html\` di browser untuk melihat tampilan landing page
3. Edit file HTML dan file konfigurasi Tailwind untuk menyesuaikan desain
4. Tailwind CSS sudah ter-include via CDN atau build tool (tergantung setup)

## Teknologi

- HTML5
- Tailwind CSS (via CDN atau build tools seperti PostCSS)
- JavaScript (opsional, untuk interaktivitas)

## Lisensi

MIT License
`;

fs.writeFile("README.md", content.trim(), (err) => {
  if (err) {
    console.error("Gagal membuat README.md:", err);
  } else {
    console.log("README.md berhasil dibuat!");
  }
});
