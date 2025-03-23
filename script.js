document.addEventListener("DOMContentLoaded", () => {
    let produkList = [
        { id: 1, nama: "Laptop", harga: 12000000 },
        { id: 2, nama: "Smartphone", harga: 5000000 },
        { id: 3, nama: "Tablet", harga: 7000000 },
        { id: 4, nama: "Headphone", harga: 1500000 },
        { id: 5, nama: "Smartwatch", harga: 3000000 }
    ];

    const listElement = document.getElementById("produkList");
    const btnTambah = document.getElementById("btnTambah");
    const namaProdukInput = document.getElementById("namaProduk");
    const hargaProdukInput = document.getElementById("hargaProduk");

    function tampilkanProduk() {
        listElement.innerHTML = "";
        produkList.forEach(({ id, nama, harga }) => {
            const li = document.createElement("li");
            li.innerHTML = `${nama} - Rp${harga} <button data-id="${id}">Hapus</button>`;
            listElement.appendChild(li);
        });
    }

    function tambahProduk() {
        const nama = namaProdukInput.value;
        const harga = hargaProdukInput.value;

        if (nama && harga) {
            let id = produkList.length ? produkList[produkList.length - 1].id + 1 : 1;
            produkList = [...produkList, { id, nama, harga: Number(harga) }];
            tampilkanProduk();
            namaProdukInput.value = "";
            hargaProdukInput.value = "";
        } else {
            alert("Masukkan nama dan harga produk!");
        }
    }

    function hapusProduk(id) {
        produkList = produkList.filter(produk => produk.id !== id);
        tampilkanProduk();
    }

    listElement.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const id = Number(event.target.getAttribute("data-id"));
            hapusProduk(id);
        }
    });

    btnTambah.addEventListener("click", tambahProduk);
    tampilkanProduk();
});
