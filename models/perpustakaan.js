
const mongoose = require("mongoose");



const perpustakaanScheme = new mongoose.Schema({
    judul_buku:{
        //Buat sebuah type dari field nama yang berada di sebuah tabel karyawan
        type:String,
        required:true,
    },
    penulis:{
        type:String,
        required:true,
    },
    penerbit:{
        type:String,
        required:true, 
    },
    jumlah_buku:{
        type:Number,
        required:true, 
    }
})


module.exports = mongoose.model("Stok", perpustakaanScheme);

