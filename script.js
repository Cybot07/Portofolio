const tombol = document.getElementById("klikSaya");
const hasil = document.getElementById("hasilKlik");

tombol.addEventListener("click", () => {
    if (hasil.style.display === "none") {
        hasil.style.display = "block";
        hasil.textContent = "Sabar bre, sertifikatnya belum discan 😅";
        hasil.style.color = "#00ff80";
        tombol.textContent = "Opened";
    } else {
        hasil.style.display = "none";
        tombol.textContent = "Closed";
    }
});
