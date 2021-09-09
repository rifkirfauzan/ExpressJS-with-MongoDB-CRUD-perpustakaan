const Perpustakaan = require("../models/perpustakaan");
module.exports = {
    viewPerpustakaan: async (req,res) => {
        try{
            const perpustakaan = await Perpustakaan.find();
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus};
            res.render("index", {
                perpustakaan,
                alert,
                title: "Aplikasi perpustakaan",
            });
        }catch (error){
            res.redirect("/perpustakaan");
        }
    },
    addPerpustakaan: async (req, res) => {
        try {
            const { judul_buku, penulis, penerbit, jumlah_buku } = req.body;
            await Perpustakaan.create({ judul_buku, penulis, penerbit, jumlah_buku });
            req.flash("alertMessage", "Data Perpus berhasil ditambahkan");
            req.flash("alertStatus", "success");
            res.redirect("/perpustakaan"); 
        }catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/perpustakaan");
        }
    },
    editPerpustakaan: async (req, res) => {
        try {
            const { id, judul_buku, penulis, penerbit, jumlah_buku } = req.body;
            const perpustakaan = await Perpustakaan.findOne({ _id: id });
            perpustakaan.judul_buku = judul_buku;
            perpustakaan.penulis = penulis;
            perpustakaan.penerbit = penerbit;
            perpustakaan.jumlah_buku = jumlah_buku;
            await perpustakaan.save();
            req.flash("alertMessage", "Data Perpus berhasil diedit");
            req.flash("alertStatus", "success");
            res.redirect("/perpustakaan");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/perpustakaan");
        }
    },
    
    deletePerpustakaan: async (req, res) => {
        try {
            const { id } = req.params;
            const perpustakaan = await Perpustakaan.findOne({ _id: id });
            await perpustakaan.remove();
            req.flash("alertMessage", "Data perpus berhasil dihapus");
            req.flash("alertStatus", "warning");
            res.redirect("/perpustakaan");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/perpustakaan");
        }
    },
    
    
}