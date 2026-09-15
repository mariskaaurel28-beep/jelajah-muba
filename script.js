const SUPABASE_URL = "https://pyaifmnuntfnrncvnbur.supabase.co/rest/v1/.supabase.co";
const SUPABASE_KEY = "sb_publishable_7qTxCiAIs88kZlM1yvigCA_KrMikcwi";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);




/* ==============================
   DEFAULT DATA
============================== */

const DEFAULT_DATA = {

  wisata: [

    {
      id: "w1",
      name: "Danau Ulak Lia",
      category: "Wisata Alam",

      desc:
        "Danau Ulak Lia adalah sebuah danau alami yang terletak di Kecamatan Sekayu, Kabupaten Musi Banyuasin, Provinsi Sumatera Selatan. Danau ini dikenal sebagai salah satu destinasi wisata alam yang dimanfaatkan untuk rekreasi keluarga, kegiatan memancing, serta kawasan penyangga ekosistem perairan di wilayah Musi Banyuasin.",

      address:
        "Kelurahan Soak Baru, Kecamatan Sekayu, Musi Banyuasin, Sumatera Selatan",

      price: "Hanya bayar parkir",

      hours: "08.00–18.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=Danau+Ulak+Lia+Sekayu",

      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWrVdJofoQq_sBM8ux1kCnoUFYKfnEXFirNKPjvDCB2wNCfM92ywDx9ABmeAysjcMuerI9f_WcF4RTFNQ3HLPaRwvbLvLsEjH9mIrABNqR7Cnj1jt17qO1dY6QCsoOFYtvTG6ICUxGy-3dieh4UZ3tQb3ZIq3fDoKobL1vL2WhJIGFf_NEaKwtQ0YNiCc/s1280/1000095746.jpg",

      extra:
        "Danau Ulak Lia merupakan salah satu destinasi wisata alam di Sekayu."
    },


    {
      id: "w2",
      name: "Sekayu Waterfront",
      category: "Wisata Kota",

      desc:
        "Ruang publik tepi Sungai Musi untuk bersantai, menikmati pemandangan sungai, sunset, berfoto, dan kegiatan keluarga.",

      address:
        "Kawasan Sungai Musi, Kecamatan Sekayu, Musi Banyuasin",

      price: "Gratis / parkir",

      hours: "Setiap hari",

      map:
        "https://www.google.com/maps/search/?api=1&query=Sekayu+Waterfront",

      image: "",

      extra:
        "Lokasi tepi Sungai Musi dan dikenal ramai pada sore hari."
    },


    {
      id: "w3",
      name: "Taman Air Serasan Sekate",
      category: "Wisata Buatan",

      desc:
        "Destinasi wisata air yang dapat menjadi pilihan rekreasi keluarga di wilayah Sekayu.",

      address:
        "Kecamatan Sekayu, Kabupaten Musi Banyuasin, Sumatera Selatan",

      price:
        "Cek tarif di lokasi",

      hours:
        "Sesuai jam operasional",

      map:
        "https://www.google.com/maps/search/?api=1&query=Taman+Air+Serasan+Sekate",

      image: "",

      extra:
        "Informasi fasilitas dan tarif dapat berubah."
    },


    {
      id: "w4",
      name: "Manau Kuning",
      category: "Wisata Buatan",

      desc:
        "Destinasi rekreasi yang berada di wilayah Kecamatan Jirak Jaya, Musi Banyuasin.",

      address:
        "Kecamatan Jirak Jaya, Musi Banyuasin, Sumatera Selatan",

      price:
        "Rp5.000",

      hours:
        "08.00–17.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=Manau+Kuning+Musi+Banyuasin",

      image: "",

      extra:
        "Konfirmasi informasi terbaru sebelum berkunjung."
    },


    {
      id: "w5",
      name: "Embung Desa Cinta Bumi",
      category: "Wisata Air",

      desc:
        "Kawasan embung yang dapat digunakan sebagai tempat rekreasi dan menikmati suasana alam.",

      address:
        "Desa Cinta Bumi, Musi Banyuasin, Sumatera Selatan",

      price:
        "Rp20.000",

      hours:
        "08.00–17.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=Embung+Desa+Cinta+Bumi+Musi+Banyuasin",

      image: "",

      extra:
        "Destinasi wisata berbasis kawasan perairan."
    },


    {
      id: "w6",
      name: "Danau Konger",
      category: "Wisata Alam",

      desc:
        "Danau alam di wilayah Musi Banyuasin yang menawarkan suasana tenang dan pemandangan perairan.",

      address:
        "Desa Sungai Dua, Kecamatan Sungai Keruh, Musi Banyuasin",

      price:
        "Cek informasi di lokasi",

      hours:
        "Sesuai kondisi lokasi",

      map:
        "https://www.google.com/maps/search/?api=1&query=Danau+Konger+Musi+Banyuasin",

      image: "",

      extra:
        "Informasi kunjungan dapat berubah."
    }

  ],


  /* ==============================
     HOTEL
  ============================== */

  hotel: [

    {
      id: "h1",
      name: "Hotel Randik",
      category: "Hotel",

      desc:
        "Hotel di Sekayu yang cocok sebagai basis untuk menjelajah pusat kota dan destinasi sekitar.",

      address:
        "Jl. Kol. Wahid Udin No.999 C, Serasan Jaya, Sekayu",

      price:
        "Mulai sekitar Rp257.000/malam*",

      hours:
        "Check-in 14.00",

      map:
        "https://www.google.com/maps/search/?api=1&query=Hotel+Randik+Sekayu",

      image: "",

      extra:
        "*Harga dapat berubah berdasarkan tanggal, tipe kamar, dan promo."
    },


    {
      id: "h2",
      name: "Hotel Grand Ranggonang",
      category: "Hotel",

      desc:
        "Hotel di kawasan Balai Agung, Sekayu.",

      address:
        "Jl. Merdeka LK II No.245, Balai Agung, Sekayu",

      price:
        "Cek harga terbaru",

      hours:
        "Check-in 14.00 · Check-out 12.00",

      map:
        "https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Ranggonang+Sekayu",

      image: "",

      extra:
        "Harga hotel bersifat dinamis."
    },


    {
      id: "h3",
      name: "Hotel Pelangi",
      category: "Hotel",

      desc:
        "Pilihan penginapan di Jalan Lingkar Randik, Sekayu.",

      address:
        "Jl. Lkr. Randik No.20, Serasan Jaya, Sekayu",

      price:
        "Cek harga terbaru",

      hours:
        "Hubungi hotel",

      map:
        "https://www.google.com/maps/search/?api=1&query=Hotel+Pelangi+Sekayu",

      image: "",

      extra:
        "Informasi tarif sebaiknya dikonfirmasi sebelum booking."
    },
  ],


  /* ==============================
     KULINER
  ============================== */

  kuliner: [

    {
      id: "k1",
      name: "Rumah Makan Pagi Sore",
      category: "Rumah Makan",

      desc:
        "Rumah makan di Serasan Jaya, Sekayu.",

      address:
        "4VH2+GRC, Serasan Jaya, Sekayu, Musi Banyuasin",

      price:
        "Cek menu",

      hours:
        "Tercatat buka 24 jam",

      map:
        "https://www.google.com/maps/search/?api=1&query=Rumah+Makan+Pagi+Sore+Sekayu",

      image: "",

      extra:
        "Jam dan harga dapat berubah."
    },


    {
      id: "k2",
      name: "Rumah Makan Brunai",
      category: "Rumah Makan",

      desc:
        "Rumah makan di Jalan Kol. H. Arifin Jalil.",

      address:
        "Jl. Kol. H. Arifin Jalil, Kayu Ara, Sekayu",

      price:
        "Cek menu",

      hours:
        "08.00–22.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=Rumah+Makan+Brunai+Sekayu",

      image: "",

      extra:
        "Konfirmasi langsung untuk informasi terbaru."
    },


    {
      id: "k3",
      name: "Lembah Anai Rumah Makan",
      category: "Rumah Makan",

      desc:
        "Pilihan kuliner di Jalan Suraiman.",

      address:
        "Jl. Suraiman No.7-C, Serasan Jaya, Sekayu",

      price:
        "Cek menu",

      hours:
        "08.00–20.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=Lembah+Anai+Sekayu",

      image: "",

      extra:
        "Informasi dapat berubah."
    },


    {
      id: "k4",
      name: "RM. Kukasimura & Travel",
      category: "Rumah Makan",

      desc:
        "Rumah makan sekaligus layanan travel.",

      address:
        "4V76+9Q4, Kayu Ara, Sekayu, Musi Banyuasin",

      price:
        "Cek menu",

      hours:
        "06.00–18.00 WIB",

      map:
        "https://www.google.com/maps/search/?api=1&query=RM+Kukasimura+Travel+Sekayu",

      image: "",

      extra:
        "Informasi dapat berubah."
    },


  
  ],


  /* ==============================
     EVENT
  ============================== */

  event: [

    {
      id: "e1",
      name: "Muba Expo",
      category: "Event Tahunan",

      desc:
        "Ajang tahunan HUT Kabupaten Muba.",

      address:
        "Kawasan Rumah Dinas Bupati Muba / Jalan Kolonel Wahid Udin, Sekayu",

      price:
        "Gratis untuk pengunjung*",

      hours:
        "Agenda tahunan",

      map:
        "https://www.google.com/maps/search/?api=1&query=Rumah+Dinas+Bupati+Musi+Banyuasin",

      image: "",

      extra:
        "Muba Expo 2025 berlangsung 28 September–4 Oktober 2025."
    },


    {
      id: "e2",
      name: "Festival Randik",
      category: "Seni & Budaya",

      desc:
        "Festival budaya tahunan Musi Banyuasin.",

      address:
        "Lokasi bergilir di kecamatan Muba",

      price:
        "Gratis / sesuai agenda",

      hours:
        "Sesuai jadwal",

      map:
        "https://www.google.com/maps/search/?api=1&query=Sungai+Lilin+Musi+Banyuasin",

      image: "",

      extra:
        "Festival Randik XXI 2025 berlangsung di Sungai Lilin."
    },


    {
      id: "e3",
      name: "HUT Kabupaten Musi Banyuasin",
      category: "Perayaan Daerah",

      desc:
        "Rangkaian kegiatan memperingati hari jadi Muba.",

      address:
        "Kabupaten Musi Banyuasin",

      price:
        "Sesuai agenda",

      hours:
        "Sesuai jadwal",

      map:
        "https://www.google.com/maps/search/?api=1&query=Sekayu+Musi+Banyuasin",

      image: "",

      extra:
        "Gunakan editor untuk memasukkan jadwal terbaru."
    }

  ],


  /* ==============================
     PRESTASI
  ============================== */

  prestasi: [

    {
      id: "p1",
      name: "Anugerah Keterbukaan Informasi Publik",
      category: "2025 / 2026",

      desc:
        "Muba meraih kualifikasi Informatif.",

      address: "",
      price: "",
      hours: "",
      map: "",
      image: "",
      extra: ""
    },


    {
      id: "p2",
      name: "UHC Awards 2026 — Kategori Pratama",
      category: "2026",

      desc:
        "Muba meraih UHC Awards 2026 Kategori Pratama.",

      address:
        "Jakarta",

      price: "",
      hours: "",
      map: "",
      image: "",
      extra: ""
    }

  ]

};





/* ==============================
   FOTO DOKUMENTASI
============================== */

const DOCUMENTATION_PHOTOS = {


  /* DANAU ULAK LIA */

  w1: [

    "images/w1/danau1.jpeg",
    "images/w1/danau2.jpg",
    "images/w1/danau3.jpeg",
    "images/w1/danau4.jpg",
    "images/w1/danau5.jpeg",
    "images/w1/danau6.jpg",
    "images/w1/danau7.jpg",
    "images/w1/danau8.jpg",
    "images/w1/danau9.jpg",
    "images/w1/danau10.jpg",
    "images/w1/danau11.jpg",
    "images/w1/danau12.jpg"

  ],


  /* Taman Kuning */

  w2: [

    "images/w2/foto1.jpg",
    "images/w2/foto2.jpg",
    "images/w2/foto3.jpg",
    "images/w2/foto4.jpg",
    "images/w2/foto5.jpg",
    "images/w2/foto6.jpg",
    "images/w2/foto7.jpg",
    "images/w2/foto8.jpg",
    "images/w2/foto9.jpg",
    "images/w2/foto10.jpg",
    "images/w2/foto11.jpg",
    "images/w2/foto12.jpg"

  ],


  /* W3 */

  w3: [

    "images/w3/foto1.jpg",
    "images/w3/foto2.jpeg",
    "images/w3/foto3.jpg",
    "images/w3/foto4.jpg",
    "images/w3/foto5.jpg",
    "images/w3/foto6.jpg",
    "images/w3/foto7.jpg",
    "images/w3/foto8.jpg",
    "images/w3/foto9.jpg",
    "images/w3/foto10.jpg",
    "images/w3/foto11.jpg",
    "images/w3/foto12.jpg"

  ],


  /* W4 */

  w4: [

    "images/w4/foto1.jpg",
    "images/w4/foto2.jpg",
    "images/w4/foto3.jpg",
    "images/w4/foto4.jpg",
    "images/w4/foto5.jpg",
    "images/w4/foto6.jpg",
    "images/w4/foto7.jpg",
    "images/w4/foto8.jpg",
    "images/w4/foto9.jpg",
    "images/w4/foto10.jpg",
    "images/w4/foto11.jpg",
    "images/w4/foto12.jpg"

  ],


  /* W5 */

  w5: [

    "images/w5/foto1.jpg",
    "images/w5/foto2.jpg",
    "images/w5/foto3.jpg",
    "images/w5/foto4.jpg",
    "images/w5/foto5.jpg",
    "images/w5/foto6.jpg",
    "images/w5/foto7.jpg",
    "images/w5/foto8.jpg",
    "images/w5/foto9.jpg",
    "images/w5/foto10.jpg",
    "images/w5/foto11.jpg",
    "images/w5/foto12.jpg"

  ],


  /* W6 */

  w6: [

    "images/w6/foto1.jpg",
    "images/w6/foto2.jpg",
    "images/w6/foto3.jpg",
    "images/w6/foto4.jpg"

  ],

  /* W7 */

  w7: [

    "images/w7/foto1.jpg",
    "images/w7/foto2.jpg",
    "images/w7/foto3.jpg",
    "images/w7/foto4.jpg",
    "images/w7/foto5.jpg",
    "images/w7/foto6.jpg",
    "images/w7/foto7.jpg",
    "images/w7/foto8.jpg"

  ],

  /* W8 */

  w8: [

    "images/w8/foto1.jpg",
    "images/w8/foto2.jpg",
    "images/w8/foto3.jpg",
    "images/w8/foto4.jpg",
    "images/w8/foto5.jpg",
    "images/w8/foto6.jpg",
    "images/w8/foto7.jpg",
    "images/w8/foto8.jpg",
    "images/w8/foto9.jpg",
    "images/w8/foto10.jpg",
    "images/w8/foto11.jpg",
    "images/w8/foto12.jpg"

  ],

  /* W9 */

  w9: [

    "images/w9/foto1.jpg",
    "images/w9/foto2.jpg",
    "images/w9/foto3.jpg",
    "images/w9/foto4.jpg",
    "images/w9/foto5.jpg",
    "images/w9/foto6.jpg",
    "images/w9/foto7.jpg",
    "images/w9/foto8.jpg",
    "images/w9/foto9.jpg",
    "images/w9/foto10.jpg",
    "images/w9/foto11.jpg",
    "images/w9/foto12.jpg"

  ],

  /* W10 */

  w10: [

    "images/w10/foto1.jpg",
    "images/w10/foto2.jpg",
    "images/w10/foto3.jpg",
    "images/w10/foto4.jpg",
    "images/w10/foto5.jpg",
    "images/w10/foto6.jpg",
    "images/w10/foto7.jpg",
    "images/w10/foto8.jpg",
    "images/w10/foto9.jpg",
    "images/w10/foto10.jpg",
    "images/w10/foto11.jpg",
    "images/w10/foto12.jpg"

  ],

  /* W11 */

  w11: [

    "images/w11/foto1.jpg",
    "images/w11/foto2.jpg",
    "images/w11/foto3.jpg",
    "images/w11/foto4.jpg",
    "images/w11/foto5.jpg",
    "images/w11/foto6.jpg",
    "images/w11/foto7.jpg",
    "images/w11/foto8.jpg",
    "images/w11/foto9.jpg",
    "images/w11/foto10.jpg",
    "images/w11/foto11.jpg",
    "images/w11/foto12.jpg"

  ],

  /* W12 */

  w12: [

    "images/w12/foto1.jpg",
    "images/w12/foto2.jpg",
    "images/w12/foto3.jpg",
    "images/w12/foto4.jpg",
    "images/w12/foto5.jpg",
    "images/w12/foto6.jpg",
    "images/w12/foto7.jpg",
    "images/w12/foto8.jpg",
    "images/w12/foto9.jpg",
    "images/w12/foto10.jpg",
    "images/w12/foto11.jpg",
    "images/w12/foto12.jpg"

  ],

  /* W13 */

  w13: [

    "images/w13/foto1.jpg",
    "images/w13/foto2.jpg",
    "images/w13/foto3.jpg",
    "images/w13/foto4.jpg",
    "images/w13/foto5.jpg",
    "images/w13/foto6.jpg",
    "images/w13/foto7.jpg",
    "images/w13/foto8.jpg",
    "images/w13/foto9.jpg",
    "images/w13/foto10.jpg",
    "images/w13/foto11.jpg",
    "images/w13/foto12.jpg"

  ],

  /* W14 */

  w14: [

    "images/w14/foto1.jpg",
    "images/w14/foto2.jpg",
    "images/w14/foto3.jpg",
    "images/w14/foto4.jpg",
    "images/w14/foto5.jpg",
    "images/w14/foto6.jpg",
    "images/w14/foto7.jpg",
    "images/w14/foto8.jpg",
    "images/w14/foto9.jpg",
    "images/w14/foto10.jpg",
    "images/w14/foto11.jpg",
    "images/w14/foto12.jpg"

  ],

  /* W15 */

  w15: [

    "images/w15/foto1.jpg",
    "images/w15/foto2.jpg",
    "images/w15/foto3.jpg",
    "images/w15/foto4.jpg",
    "images/w15/foto5.jpg",
    "images/w15/foto6.jpg",
    "images/w15/foto7.jpg",
    "images/w15/foto8.jpg",
    "images/w15/foto9.jpg",
    "images/w15/foto10.jpg",
    "images/w15/foto11.jpg",
    "images/w15/foto12.jpg"

  ],


  /* W16 */

  w16: [

    "images/w16/foto1.jpg",
    "images/w16/foto2.jpg",
    "images/w16/foto3.jpg",
    "images/w16/foto4.jpg",
    "images/w16/foto5.jpg",
    "images/w16/foto6.jpg",
    "images/w16/foto7.jpg",
    "images/w16/foto8.jpg",
    "images/w16/foto9.jpg",
    "images/w16/foto10.jpg",
    "images/w16/foto11.jpg",
    "images/w16/foto12.jpg",
    "images/w16/foto13.jpg",
    "images/w16/foto14.jpg",
    "images/w16/foto15.jpg",
    "images/w16/foto16.jpg"

  ],

   w17: [

    "images/w17/foto1.jpg",
    "images/w17/foto2.jpg",
    "images/w17/foto3.jpg",
    "images/w17/foto4.jpg"

  ],

   w18: [

    "images/w18/foto1.jpg",
    "images/w18/foto2.jpg",
    "images/w18/foto3.jpg",
    "images/w18/foto4.jpg",
    "images/w18/foto5.jpg",
    "images/w18/foto6.jpg",
    "images/w18/foto7.jpg",
    "images/w18/foto8.jpg",
    "images/w18/foto9.jpg",
    "images/w18/foto10.jpg",
    "images/w18/foto11.jpg",
    "images/w18/foto12.jpg"

  ],

   w19: [

    "images/w19/foto1.jpg",
    "images/w19/foto2.jpg",
    "images/w19/foto3.jpg",
    "images/w19/foto4.jpg",
    "images/w19/foto5.jpg",
    "images/w19/foto6.jpg",
    "images/w19/foto7.jpg",
    "images/w19/foto8.jpg",
    "images/w19/foto9.jpg",
    "images/w19/foto10.jpg",
    "images/w19/foto11.jpg",
    "images/w19/foto12.jpg"

  ],

   w20: [

    "images/w20/foto1.jpg",
    "images/w20/foto2.jpg",
    "images/w20/foto3.jpg",
    "images/w20/foto4.jpg",
    "images/w20/foto5.jpg",
    "images/w20/foto6.jpg",
    "images/w20/foto7.jpg",
    "images/w20/foto8.jpg"
  ],


  


};


/* ==============================
   LOAD DATA
============================== */

function loadData(){

  try{

    const saved =
      localStorage.getItem("jelajahMubaData");

    return saved
      ? JSON.parse(saved)
      : structuredClone(DEFAULT_DATA);

  }

  catch(e){

    return structuredClone(DEFAULT_DATA);

  }

}


function saveData(){

  localStorage.setItem(
    "jelajahMubaData",
    JSON.stringify(DATA)
  );

}


let DATA = loadData();


/* ==============================
   PASTIKAN SEMUA KATEGORI ADA
============================== */

["wisata", "hotel", "kuliner", "event", "prestasi"]
.forEach(type => {

  if(!Array.isArray(DATA[type])){

    DATA[type] = [];

  }

});


/* ==============================
   TAMBAHKAN DEFAULT DATA BARU

   AGAR LOCALSTORAGE LAMA
   TIDAK MENGHILANGKAN W3-W6
============================== */

Object.keys(DEFAULT_DATA).forEach(type => {

  DEFAULT_DATA[type].forEach(baru => {

    const ada =
      DATA[type].some(
        lama => lama.id === baru.id
      );

    if(!ada){

      DATA[type].push(
        structuredClone(baru)
      );

    }

  });

});


saveData();


/* ==============================
   PERBAIKI ID WISATA
============================== */

function fixWisataIds(){

  if(!DATA.wisata) return;


  const usedIds = new Set();


  DATA.wisata.forEach(item => {

    if(
      typeof item.id === "string" &&
      /^w\d+$/.test(item.id)
    ){

      usedIds.add(item.id);

    }

  });


  let nextNumber = 1;


  DATA.wisata.forEach(item => {

    if(
      typeof item.id === "string" &&
      /^w\d+$/.test(item.id)
    ){

      return;

    }


    while(
      usedIds.has("w" + nextNumber)
    ){

      nextNumber++;

    }


    item.id =
      "w" + nextNumber;


    usedIds.add(item.id);


    nextNumber++;

  });


  saveData();

}


fixWisataIds();


/* ==============================
   VARIABLES
============================== */

let currentFilter = "semua";

let editorType = "wisata";


/* ==============================
   ESCAPE HTML
============================== */

function esc(s = ""){

  return String(s).replace(

    /[&<>"']/g,

    m => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"

    }[m])

  );

}


/* ==============================
   TOAST
============================== */

function toast(msg){

  const el =
    document.getElementById("toast");


  if(!el) return;


  el.textContent = msg;


  el.classList.add("show");


  setTimeout(() => {

    el.classList.remove("show");

  }, 2300);

}


/* ==============================
   ALL ITEMS
============================== */

function allItems(){

  return Object.entries(DATA)
    .flatMap(
      ([type, items]) =>

        items.map(x => ({

          ...x,
          type

        }))

    );

}


/* ==============================
   TYPE LABEL
============================== */

function getTypeLabel(type){

  return {

    wisata: "WISATA",

    hotel: "HOTEL",

    kuliner: "RUMAH MAKAN",

    event: "EVENT",

    prestasi: "PRESTASI"

  }[type]

  ||

  type.toUpperCase();

}


/* ==============================
   IMAGE FALLBACK

   MENCARI:
   JPG
   JPEG
   PNG
   WEBP
============================== */

function getImageCandidates(path){

  if(!path) return [];


  const dot =
    path.lastIndexOf(".");


  if(dot === -1){

    return [path];

  }


  const base =
    path.substring(0, dot);


  return [

    path,

    base + ".jpg",

    base + ".jpeg",

    base + ".png",

    base + ".webp",

    base + ".JPG",

    base + ".JPEG",

    base + ".PNG",

    base + ".WEBP"

  ];

}


/* ==============================
   COBA FOTO BERIKUTNYA
============================== */

window.tryPhoto = function(img){

  try{

    const candidates =
      JSON.parse(
        img.dataset.candidates || "[]"
      );


    let index =
      Number(img.dataset.index || 0);


    index++;


    if(index < candidates.length){

      img.dataset.index = index;

      img.src =
        candidates[index];

      return;

    }


    img.style.display = "none";


    const parent =
      img.closest(".documentation-photo");


    if(parent){

      parent.classList.add("no-image");

    }

  }

  catch(e){

    img.style.display = "none";

  }

};


/* ==============================
   RENDER CARDS
============================== */

function renderCards(){

  const grid =
    document.getElementById("cardsGrid");


  if(!grid) return;


  const searchInput =
    document.getElementById("searchInput");


  const q =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";


  let items =
    allItems()
      .filter(
        x => x.type !== "prestasi"
      );


  if(
    currentFilter !== "semua"
  ){

    items =
      items.filter(
        x => x.type === currentFilter
      );

  }


  if(q){

    items =
      items.filter(x =>

        (
          (x.name || "") +
          " " +
          (x.desc || "") +
          " " +
          (x.address || "") +
          " " +
          (x.category || "")
        )

        .toLowerCase()

        .includes(q)

      );

  }


  if(!items.length){

    grid.innerHTML = `

      <div class="empty">

        Data tidak ditemukan.

        Coba kata kunci
        atau kategori lain.

      </div>

    `;

    return;

  }


  grid.innerHTML =
    items.map(x => `

      <article
        class="card ${
          x.type === "kuliner"
            ? "card-kuliner"
            : ""
        }"
      >


        <!-- FOTO -->

        <div class="card-image">

          <img
            src="${esc(x.image)}"
            alt="${esc(x.name)}"
            loading="lazy"
          >


          <!-- BADGE -->

          <span
            class="badge ${x.type}"
          >

            <span class="badge-icon">
              ✦
            </span>

            ${getTypeLabel(x.type)}

          </span>


          <!-- TOMBOL FAVORIT -->

          <button
            type="button"
            class="card-favorite"
            title="Simpan"
            aria-label="Simpan ${esc(x.name)}"
          >

            ♡

          </button>


          <!-- EFEK GELAP FOTO -->

          <div
            class="card-image-shade"
          ></div>

        </div>


        <!-- ISI CARD -->

        <div class="card-body">


          <!-- JUDUL -->

          <h3>

            ${esc(x.name)}

          </h3>


          <!-- ALAMAT -->

          <div class="card-meta">

            <span class="meta-pin">
              ●
            </span>

            <span>

              ${esc(
                x.address ||
                "Musi Banyuasin"
              )}

            </span>

          </div>


          <!-- DESKRIPSI -->

          <p>

            ${esc(
              x.desc || ""
            ).slice(0, 120)}

            ${
              (x.desc || "").length > 120
                ? "…"
                : ""
            }

          </p>


          <!-- FITUR / INFORMASI -->

          <div class="card-features">


            ${
              x.type === "wisata"

                ? `

                  <span>
                    <b>✦</b>
                    <small>Wisata</small>
                  </span>

                  <span>
                    <b>⌖</b>
                    <small>Area Parkir</small>
                  </span>

                  <span>
                    <b>⌂</b>
                    <small>Tempat Nyaman</small>
                  </span>

                  <span>
                    <b>♡</b>
                    <small>Keluarga</small>
                  </span>

                `


                : x.type === "hotel"

                ? `

                  <span>
                    <b>⌂</b>
                    <small>Penginapan</small>
                  </span>

                  <span>
                    <b>⌖</b>
                    <small>Area Parkir</small>
                  </span>

                  <span>
                    <b>◷</b>
                    <small>Check-in</small>
                  </span>

                  <span>
                    <b>♡</b>
                    <small>Nyaman</small>
                  </span>

                `


                : x.type === "kuliner"

                ? `

                  <span>
                    <b>♨</b>
                    <small>Makanan</small>
                  </span>

                  <span>
                    <b>⌖</b>
                    <small>Area Parkir</small>
                  </span>

                  <span>
                    <b>⌂</b>
                    <small>Tempat Duduk</small>
                  </span>

                  <span>
                    <b>♡</b>
                    <small>Keluarga</small>
                  </span>

                `


                : `

                  <span>
                    <b>◆</b>
                    <small>Event</small>
                  </span>

                  <span>
                    <b>⌖</b>
                    <small>Area Parkir</small>
                  </span>

                  <span>
                    <b>⌂</b>
                    <small>Tempat Acara</small>
                  </span>

                  <span>
                    <b>♡</b>
                    <small>Keluarga</small>
                  </span>

                `
            }


          </div>


          <!-- FOOTER -->

          <div
            class="card-footer ${
              x.type === "kuliner"
                ? "kuliner-footer"
                : ""
            }"
          >


            <!-- HARGA -->
${
  x.type === "kuliner" || x.type === "event"
    ? ""
    : `
      <span class="price">
        ${esc(
          x.price ||
          "Info harga"
        )}
      </span>
    `
}


            <!-- BUTTON DETAIL -->

            <button
              class="more"
              data-detail="${esc(x.id)}"
              data-type="${x.type}"
            >

              SELENGKAPNYA

              <span>
                →
              </span>

            </button>


          </div>


        </div>


      </article>

    `).join("");

}


/* ==============================
   RENDER EVENTS
============================== */

function renderEvents(){

  const grid =
    document.getElementById("eventGrid");


  if(!grid) return;


  grid.innerHTML =
    DATA.event.map(x => `

      <article class="event-card">

        <img
          src="${esc(x.image)}"
          alt="${esc(x.name)}"
          loading="lazy"
        >


        <div class="event-card-content">

          <span class="date-chip">

            ${esc(x.category)}

          </span>


          <h3>

            ${esc(x.name)}

          </h3>


          <p>

            ${esc(x.address)}

          </p>


          <button
            class="more light"
            data-detail="${esc(x.id)}"
            data-type="event"
          >

            SELENGKAPNYA →

          </button>

        </div>

      </article>

    `).join("");

}




/* ==============================
   RENDER STATS
============================== */

function renderStats(){

  const wisata =
    document.getElementById("statWisata");


  const hotel =
    document.getElementById("statHotel");


  const kuliner =
    document.getElementById("statKuliner");


  const event =
    document.getElementById("statEvent");


  if(wisata){

    wisata.textContent =
      "15+";

  }


  if(hotel){

    hotel.textContent =
      "25+";

  }


  if(kuliner){

    kuliner.textContent =
      "40+";

  }


  if(event){

    event.textContent =
      "20+";

  }

}


/* ==============================
   RENDER ALL
============================== */

function renderAll(){

  renderCards();

  renderEvents();

  renderStats();

}


/* ==============================
   MODAL
============================== */

function openModal(id){

  const modal =
    document.getElementById(id);


  if(!modal) return;


  modal.classList.add("open");


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


function closeModal(id){

  const modal =
    document.getElementById(id);


  if(!modal) return;


  modal.classList.remove("open");


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  if(
    !document.querySelector(".modal.open")
  ){

    document.body.style.overflow = "";

  }

}


/* =========================================================
   KHUSUS RUMAH MAKAN / KULINER
   MENU MAKANAN + MINUMAN
========================================================= */

const KULINER_MENU = {

  k1: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/pagisore/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto8.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto9.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto10.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto11.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto12.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto13.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto14.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto15.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto16.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto17.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto18.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto19.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto20.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto21.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto22.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto23.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto24.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto25.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto26.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pagisore/foto27.jpeg"
      },
      {
        name: "Menu Hidangan",
        price: "",
        image: "images/pagisore/foto28.jpeg"
      }
    ],

    minuman: [
      {
        name: "TEH",
        price: "",
        image: "images/pagisore/teh.jpeg"
      },
      {
        name: "KOPI",
        price: "",
        image: "images/pagisore/kopi.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/pagisore/jeruk.jpeg"
      },
      {
        name: "Jus Alpukat",
        price: "",
        image: "images/pagisore/alpukat.jpeg"
      },
      {
        name: "Jus Buah Naga",
        price: "",
        image: "images/pagisore/naga.jpeg"
      },
      {
        name: "Jus Melon",
        price: "",
        image: "images/pagisore/melon.jpeg"
      },
      {
        name: "Jus Jambu",
        price: "",
        image: "images/pagisore/jambu.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/pagisore/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k2: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/brunai/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto8.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto9.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto10.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto11.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto12.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto13.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto14.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto15.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto16.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto17.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto18.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto19.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/brunai/foto20.jpeg"
      }
    ],
    
    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/brunai/kopi.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/brunai/jeruk.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/brunai/teh.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/brunai/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k3: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto8.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto9.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto10.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto11.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kupikrandik/foto12.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/kupikrandik/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/kupikrandik/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/kupikrandik/jeruk.jpeg"
      },
      {
        name: "SUSU",
        price: "",
        image: "images/kupikrandik/susu.jpeg"
      },
      {
        name: "Jus Buah Naga",
        price: "",
        image: "images/kupikrandik/naga.jpeg"
      },
      {
        name: "Jus Alpukat",
        price: "",
        image: "images/kupikrandik/alpukat.jpeg"
      },
      {
        name: "BANDREK",
        price: "",
        image: "images/kupikrandik/bandrek.jpeg"
      },
      {
        name: "Jus Mangga",
        price: "",
        image: "images/kupikrandik/mangga.jpeg"
      },
      {
        name: "SODA",
        price: "",
        image: "images/kupikrandik/soda.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/kupikrandik/air.jpeg"
      },
      {
        name: "Jus Melon",
        price: "",
        image: "images/kupikrandik/melon.jpeg"
      },
      {
        name: "Jus Jambu",
        price: "",
        image: "images/kupikrandik/jambu.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k4: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/pelangi/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto8.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto9.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto10.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto11.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/pelangi/foto12.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/pelangi/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/pelangi/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/pelangi/jeruk.jpeg"
      },
      {
        name: "SUSU",
        price: "",
        image: "images/pelangi/susu.jpeg"
      },
      {
        name: "Jus Buah Naga",
        price: "",
        image: "images/pelangi/naga.jpeg"
      },
      {
        name: "Jus Alpukat",
        price: "",
        image: "images/pelangi/alpukat.jpeg"
      },
      {
        name: "DOGAN",
        price: "",
        image: "images/pelangi/dogan.jpeg"
      },
      {
        name: "Jus Mangga",
        price: "",
        image: "images/pelangi/mangga.jpeg"
      },
      {
        name: "SODA",
        price: "",
        image: "images/pelangi/soda.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/pelangi/air.jpeg"
      },
      {
        name: "Jus Melon",
        price: "",
        image: "images/pelangi/melon.jpeg"
      },
      {
        name: "Jus Jambu",
        price: "",
        image: "images/pelangi/jambu.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k7: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/ine/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/ine/foto8.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/ine/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/ine/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/ine/jeruk.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/ine/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },

    k8: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/irmanti/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/irmanti/foto8.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/irmanti/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/irmanti/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/irmanti/jeruk.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/irmanti/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k9: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/tunas/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto8.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto9.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto10.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto11.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/tunas/foto12.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/tunas/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/tunas/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/tunas/jeruk.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/tunas/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  },


  k10: {
    makanan: [
      {
        name: "",
        price: "",
        image: "images/kaban/foto1.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto2.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto3.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto4.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto5.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto6.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto7.jpeg"
      },
      {
        name: "",
        price: "",
        image: "images/kaban/foto8.jpeg"
      }
    ],

    minuman: [
      {
        name: "KOPI",
        price: "",
        image: "images/kaban/kopi.jpeg"
      },
      {
        name: "TEH",
        price: "",
        image: "images/kaban/teh.jpeg"
      },
      {
        name: "JERUK",
        price: "",
        image: "images/kaban/jeruk.jpeg"
      },
      {
        name: "Air Mineral",
        price: "",
        image: "images/kaban/air.jpeg"
      }
    ],

    instagram: "#",
    tiktok: "#"
  }
};


/* =========================================================
   TOMBOL SELENGKAPNYA KHUSUS RUMAH MAKAN
========================================================= */

function getKulinerButton(item, type){

  if(type !== "kuliner"){
    return "";
  }

  return `
    <button
      class="btn btn-kuliner-menu"
      type="button"
      onclick="showKulinerMenu('${esc(item.id)}')"
    >
      🍽 SELENGKAPNYA
    </button>
  `;
}


/* =========================================================
   TAMPILKAN MENU RUMAH MAKAN
========================================================= */

function showKulinerMenu(id){

  const item =
    DATA.kuliner?.find(x => x.id === id);

  if(!item) return;

  const menu =
    KULINER_MENU[id] || {
      makanan: [],
      minuman: [],
      instagram: "#",
      tiktok: "#"
    };

  const detailContent =
    document.getElementById("detailContent");

  if(!detailContent) return;


  function menuCards(items){

    if(!items.length){

      return `
        <div class="kuliner-empty">
          Menu belum tersedia.
        </div>
      `;
    }

    return items.map((m, index) => `
      <article class="kuliner-menu-card">

        <div class="kuliner-menu-photo">

          <img
            src="${esc(m.image)}"
            alt="${esc(m.name)}"
            loading="lazy"
            onerror="this.style.display='none';this.parentElement.classList.add('no-photo')"
          >

          <span class="kuliner-price">
            ${esc(m.price)}
          </span>

          <span class="kuliner-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

        </div>

        <div class="kuliner-menu-info">

          <h4>
            ${esc(m.name)}
          </h4>

          <span>
            MENU ${String(index + 1).padStart(2, "0")}
          </span>

        </div>

      </article>
    `).join("");
  }


  detailContent.innerHTML = `

    <div class="kuliner-menu-page">

      <!-- HEADER MENU -->

      <div class="kuliner-menu-header">

        <div class="kuliner-menu-header-content">

          <div>

            <p class="kuliner-eyebrow">
              ${getTypeLabel("kuliner")} · MENU
            </p>

            <h2>
              ${esc(item.name)}
            </h2>

            <p class="kuliner-menu-subtitle">
              Pilihan makanan dan minuman
            </p>

          </div>

          <div class="kuliner-menu-logo">
            🍽
          </div>

        </div>

      </div>


      <!-- ISI MENU -->

      <div class="kuliner-menu-content">


        <!-- MAKANAN -->

        <section class="kuliner-menu-section">

          <div class="kuliner-section-title">

            <div>
              <span>01</span>
              <h3>Menu Makanan</h3>
            </div>

            <p>
              Pilihan hidangan favorit
            </p>

          </div>


          <div class="kuliner-menu-grid">

            ${menuCards(menu.makanan)}

          </div>

        </section>


        <!-- MINUMAN -->

        <section class="kuliner-menu-section">

          <div class="kuliner-section-title">

            <div>
              <span>02</span>
              <h3>Minuman</h3>
            </div>

            <p>
              Minuman pendamping
            </p>

          </div>


          <div class="kuliner-menu-grid">

            ${menuCards(menu.minuman)}

          </div>

        </section>


        <!-- INFO BAWAH -->

        <section class="kuliner-bottom-info">

          <div class="kuliner-hours-box">

            <span class="kuliner-info-icon">
              🕐
            </span>

            <div>

              <small>
                JAM OPERASIONAL
              </small>

              <strong>
                ${esc(item.hours || "Informasi belum tersedia")}
              </strong>

            </div>

          </div>


          

        </section>


        <!-- TOMBOL KEMBALI -->

        <div class="kuliner-back-area">

          <button
            type="button"
            class="kuliner-back-button"
            onclick="showDetail('${esc(item.id)}','kuliner')"
          >
            ← KEMBALI KE DETAIL ${esc(item.name).toUpperCase()}
          </button>

        </div>


        <div class="kuliner-note">

          <span>✦</span>

          Harga, menu, jam operasional, dan ketersediaan
          dapat berubah. Silakan konfirmasi langsung
          kepada pihak rumah makan.

        </div>

      </div>

    </div>

  `;
}



/* =========================================================
   HOTEL - TOMBOL SELENGKAPNYA
   KHUSUS BAGIAN HOTEL
========================================================= */

function getHotelButton(item, type){

  if(type !== "hotel"){
    return "";
  }

  return `
    <button
      class="btn btn-hotel-detail"
      type="button"
      onclick="showHotelDetails('${esc(item.id)}')"
    >
      ✦ SELENGKAPNYA
    </button>
  `;
}


/* =========================================================
   FOTO DETAIL HOTEL
   Masukkan foto hotel ke:
   images/hotel/h1/
   images/hotel/h2/
   images/hotel/h3/
   images/hotel/h4/
   images/hotel/h5/
   images/hotel/h6/
   images/hotel/h7/
========================================================= */

const HOTEL_DETAIL_PHOTOS = {

  h1: [
  "images/hotel1/h1/foto1.jpeg",
  "images/hotel1/h1/foto2.jpeg",
  "images/hotel1/h1/foto3.jpeg",
  "images/hotel1/h1/foto4.jpeg",
  "images/hotel1/h1/foto5.jpeg",
  "images/hotel1/h1/foto6.jpeg",
  "images/hotel1/h1/foto7.jpeg",
  "images/hotel1/h1/foto8.jpeg"
],

  h2: [
  "images/hotel1/h2/foto1.jpeg",
  "images/hotel1/h2/foto2.jpeg",
  "images/hotel1/h2/foto3.jpeg",
  "images/hotel1/h2/foto4.jpeg",
  "images/hotel1/h2/foto5.jpeg",
  "images/hotel1/h2/foto6.jpeg",
  "images/hotel1/h2/foto7.jpeg",
  "images/hotel1/h2/foto8.jpeg"
],

  h3: [
  "images/hotel1/h3/foto1.jpeg",
  "images/hotel1/h3/foto2.jpeg",
  "images/hotel1/h3/foto3.jpeg",
  "images/hotel1/h3/foto4.jpeg",
  "images/hotel1/h3/foto5.jpeg",
  "images/hotel1/h3/foto6.jpeg",
  "images/hotel1/h3/foto7.jpeg",
  "images/hotel1/h3/foto8.jpeg"
],
 

  h5: [
  "images/hotel1/h5/foto1.jpeg",
  "images/hotel1/h5/foto2.jpeg",
  "images/hotel1/h5/foto3.jpeg",
  "images/hotel1/h5/foto4.jpeg",
  "images/hotel1/h5/foto5.jpeg",
  "images/hotel1/h5/foto6.jpeg",
  "images/hotel1/h5/foto7.jpeg",
  "images/hotel1/h5/foto8.jpeg"
],

  h6: [
    "images/hotel1/h6/foto1.jpeg",
    "images/hotel1/h6/foto2.jpeg",
    "images/hotel1/h6/foto3.jpeg",
    "images/hotel1/h6/foto4.jpeg",
    "images/hotel1/h6/foto5.jpeg",
    "images/hotel1/h6/foto6.jpeg",
    "images/hotel1/h6/foto7.jpeg",
    "images/hotel1/h6/foto8.jpeg"
  ],

  h7: [
    "images/hotel1/h7/foto1.jpeg",
    "images/hotel1/h7/foto2.jpeg",
    "images/hotel1/h7/foto3.jpeg",
    "images/hotel1/h7/foto4.jpeg",
    "images/hotel1/h7/foto5.jpeg",
    "images/hotel1/h7/foto6.jpeg",
    "images/hotel1/h7/foto7.jpeg",
    "images/hotel1/h7/foto8.jpeg"
  ],

  h8: [
    "images/hotel1/h8/foto1.jpeg",
    "images/hotel1/h8/foto2.jpeg",
    "images/hotel1/h8/foto3.jpeg",
    "images/hotel1/h8/foto4.jpeg",
    "images/hotel1/h8/foto5.jpeg",
    "images/hotel1/h8/foto6.jpeg",
    "images/hotel1/h8/foto7.jpeg",
    "images/hotel1/h8/foto8.jpeg"
  ],

  h9: [
    "images/hotel1/h9/foto1.jpeg",
    "images/hotel1/h9/foto2.jpeg",
    "images/hotel1/h9/foto3.jpeg",
    "images/hotel1/h9/foto4.jpeg",
    "images/hotel1/h9/foto5.jpeg",
    "images/hotel1/h9/foto6.jpeg",
    "images/hotel1/h9/foto7.jpeg",
    "images/hotel1/h9/foto8.jpeg"
  ],

  h10: [
    "images/hotel/h10/foto1.jpg",
    "images/hotel/h10/foto2.jpg",
    "images/hotel/h10/foto3.jpg",
    "images/hotel/h10/foto4.jpg",
    "images/hotel/h10/foto5.jpg",
    "images/hotel/h10/foto6.jpg",
    "images/hotel/h10/foto7.jpg",
    "images/hotel/h10/foto8.jpg"
  ]

};


/* =========================================================
   DATA TAMBAHAN DETAIL HOTEL
========================================================= */

const HOTEL_DETAIL_INFO = {

  h1: {
    rooms: "Jumlah kamar tersedia",
    facilities: [
      "AC",
      "Wi-Fi",
      "TV",
      "Sarapan"
    ]
  },

  h2: {
    rooms: "Jumlah kamar tersedia",
    facilities: [
      "AC",
      "Wi-Fi",
      "TV",
      "Sarapan"
    ]
  },

  h3: {
    rooms: "Jumlah kamar tersedia",
    facilities: [
      "AC",
      "Wi-Fi",
      "TV",
      "Sarapan"
    ]
  },

  h4: {
    rooms: "Jumlah kamar tersedia",
    facilities: [
      "AC",
      "Wi-Fi",
      "TV",
      "Sarapan"
    ]
  }

};


/* =========================================================
   TAMPILKAN DETAIL LENGKAP HOTEL
========================================================= */

window.showHotelDetails = function(id){

  const item =
    DATA.hotel?.find(
      x => x.id === id
    );

  if(!item) return;

  const detailContent =
    document.getElementById("detailContent");

  if(!detailContent) return;


  const hotelInfo =
    HOTEL_DETAIL_INFO[id] || {
      rooms: "Informasi kamar tersedia",
      facilities: [
        "AC",
        "Wi-Fi",
        "TV",
        "Sarapan"
      ]
    };


  let photos =
  HOTEL_DETAIL_PHOTOS[id] || [];




  /*
     Pastikan selalu ada 8 kotak foto.
  */

  while(photos.length < 8){

    photos.push("");

  }


  photos =
    photos.slice(0, 8);


  detailContent.innerHTML = `

    <div class="hotel-detail-page">


      <!-- HEADER -->

      <div class="hotel-detail-header">

        <button
          class="hotel-back-btn"
          type="button"
          onclick="showDetail('${esc(item.id)}','hotel')"
        >
          ← Kembali
        </button>


        <div class="hotel-heading">

          <p>
            HOTEL · ${esc(item.category || "Penginapan")}
          </p>

          <h2>
            ${esc(item.name)}
          </h2>

          <span>
            HOTEL & PENGINAPAN
          </span>

        </div>

      </div>


      <!-- GALERI 8 FOTO -->

      <section class="hotel-photo-section">

        <div class="hotel-section-title">

          <div>

            <p class="hotel-eyebrow">
              FASILITAS HOTEL
            </p>

            <h3>
              Lihat lebih dekat
            </h3>

          </div>

          <span class="hotel-photo-count">
            8 Foto
          </span>

        </div>


        <div class="hotel-photo-grid">

          ${
            photos.map((photo, index) => `

              <div
                class="hotel-photo-card ${photo ? "" : "hotel-photo-empty"}"
              >

                ${
                  photo
                  ?
                  `
                    <img
                      src="${esc(photo)}"
                      alt="${esc(item.name)} - Foto ${index + 1}"
                      loading="lazy"
                      onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('hotel-photo-empty');
                      "
                    >
                  `
                  :
                  ""
                }

                <div class="hotel-photo-overlay">
                  <span>
                    ${String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                ${
                  !photo
                  ?
                  `
                    <div class="hotel-photo-placeholder">
                      <strong>FOTO</strong>
                      <small>${index + 1}</small>
                    </div>
                  `
                  :
                  ""
                }

              </div>

            `).join("")
          }

        </div>

      </section>


      <!-- INFORMASI HOTEL -->

      <section class="hotel-information">


        <!-- KOLOM KIRI -->

        <div class="hotel-info-column">

          <div class="hotel-info-box">

            <span class="hotel-info-label">
              ALAMAT
            </span>

            <h4>
              ${esc(item.address || "Musi Banyuasin")}
            </h4>

          </div>


          <div class="hotel-info-box">

            <span class="hotel-info-label">
              JAM / WAKTU
            </span>

            <h4>
              ${esc(
                item.hours ||
                "Hubungi hotel untuk informasi terbaru"
              )}
            </h4>

          </div>


          <div class="hotel-info-box">

            <span class="hotel-info-label">
              JUMLAH KAMAR
            </span>

            <h4>
              ${esc(hotelInfo.rooms)}
            </h4>

          </div>

        </div>


        <!-- KOLOM TENGAH -->

        <div class="hotel-facility-column">

          <div class="hotel-facility-title">

            <p class="hotel-eyebrow">
              FASILITAS
            </p>

            <h3>
              Kenyamanan untuk Anda
            </h3>

          </div>


          <div class="hotel-facility-list">

            <div class="hotel-facility-item">

              <span class="facility-icon">
                ❄
              </span>

              <div>
                <strong>AC</strong>
                <small>
                  Kamar nyaman dan sejuk
                </small>
              </div>

            </div>


            <div class="hotel-facility-item">

              <span class="facility-icon">
                ◉
              </span>

              <div>
                <strong>Wi-Fi</strong>
                <small>
                  Tetap terhubung selama menginap
                </small>
              </div>

            </div>


            <div class="hotel-facility-item">

              <span class="facility-icon">
                ▣
              </span>

              <div>
                <strong>TV</strong>
                <small>
                  Hiburan di dalam kamar
                </small>
              </div>

            </div>


            <div class="hotel-facility-item">

              <span class="facility-icon">
                ☕
              </span>

              <div>
                <strong>Sarapan</strong>
                <small>
                  Sarapan sesuai ketentuan hotel
                </small>
              </div>

            </div>

          </div>

        </div>


        <!-- KOLOM KANAN -->

        <div class="hotel-price-column">

          <span class="hotel-info-label">
            HARGA
          </span>

          <div class="hotel-price">

            ${esc(
              item.price ||
              "Cek harga terbaru"
            )}

          </div>


          <p>
            Harga dapat berubah berdasarkan
            tanggal, tipe kamar, dan promo
            yang tersedia.
          </p>


          ${
            item.map
            ?
            `
              <a
                class="hotel-map-button"
                href="${esc(item.map)}"
                target="_blank"
                rel="noopener"
              >
                ⌖ LIHAT LOKASI
              </a>
            `
            :
            ""
          }

        </div>


      </section>


      <!-- DESKRIPSI -->

      <section class="hotel-description">

        <div>

          <p class="hotel-eyebrow">
            TENTANG HOTEL
          </p>

          <h3>
            ${esc(item.name)}
          </h3>

        </div>

        <p>
          ${esc(item.desc || "")}
        </p>

        ${
          item.extra
          ?
          `
            <p class="hotel-extra">
              ${esc(item.extra)}
            </p>
          `
          :
          ""
        }

      </section>


    </div>

  `;

};




/* ==============================
   DETAIL
============================== */

function showDetail(id, type){

  const item =
    DATA[type]?.find(
      x => x.id === id
    );


  if(!item) return;


  const isEvent =
    type === "event";


  let documentationButton = "";


  if(type === "wisata"){

    documentationButton = `

      <button
        class="btn btn-documentation"
        type="button"
        onclick="showDocumentation('${item.id}')"
      >

        ▣ DOKUMENTASI

      </button>

    `;

  }


  /* KHUSUS RUMAH MAKAN */

  const kulinerButton =
    getKulinerButton(item, type);

    /* KHUSUS HOTEL */

  const hotelButton =
  getHotelButton(item, type);


  /* =========================================
   KHUSUS EVENT
   TOMBOL SELENGKAPNYA / GALLERY
========================================= */

const eventGalleryButton =
  type === "event"
    ? `
      <button
        class="btn btn-event-gallery"
        type="button"
        onclick="showEventGallery('${esc(item.id)}')"
      >
        ✦ SELENGKAPNYA
      </button>
    `
    : "";


  const detailContent =
    document.getElementById("detailContent");


  if(!detailContent) return;


  detailContent.innerHTML = `


    <div class="detail-hero">

      <img
        src="${esc(item.image)}"
        alt="${esc(item.name)}"
      >


      <div class="detail-title">

        <p>

          ${getTypeLabel(type)}
          ·
          ${esc(item.category)}

        </p>


        <h2>

          ${esc(item.name)}

        </h2>

      </div>

    </div>



    <div class="detail-body">


      <div class="detail-main">


        <h3>

          Tentang ${esc(item.name)}

        </h3>


        <p>

          ${esc(item.desc)}

        </p>


        <p>

          ${esc(item.extra || "")}

        </p>



        <div class="detail-buttons">


          ${
            item.map

              ? `

                <a
                  class="btn btn-gold"
                  href="${esc(item.map)}"
                  target="_blank"
                  rel="noopener"
                >

                  ⌖ BUKA GOOGLE MAPS

                </a>

              `

              : ""

          }


          ${documentationButton}


          ${kulinerButton}

          ${hotelButton}

          ${eventGalleryButton}


        </div>


      </div>



      ${
  type === "kuliner" || type === "event"
    ? `
        <!-- INFO SAMPING DISEMBUNYIKAN UNTUK KULINER DAN EVENT -->
      `
    : `


            <div class="info-list">


              ${
                item.address

                  ? `

                    <div class="info">

                      <b>

                        ALAMAT

                      </b>

                      ${esc(item.address)}

                    </div>

                  `

                  : ""

              }



              ${
                item.price

                  ? `

                    <div class="info">

                      <b>

                        ${
                          isEvent
                            ? "TIKET"
                            : "HARGA"
                        }

                      </b>

                      ${esc(item.price)}

                    </div>

                  `

                  : ""

              }



              ${
                item.hours

                  ? `

                    <div class="info">

                      <b>

                        JAM / WAKTU

                      </b>

                      ${esc(item.hours)}

                    </div>

                  `

                  : ""

              }



              <div class="info">

                <b>

                  CATATAN

                </b>

                Harga, jam operasional,
                dan agenda dapat berubah.

                Konfirmasi sebelum datang.

              </div>


            </div>

          `

      }


    </div>


  `;


  openModal("detailModal");

}


/* =========================================
   DOCUMENTATION
========================================= */

window.showDocumentation =
function(id){

  const item =
    DATA.wisata.find(
      x => x.id === id
    );


  if(!item){

    alert(
      "Data wisata tidak ditemukan."
    );

    return;

  }


  let photos =
    DOCUMENTATION_PHOTOS[id] || [];


  if(photos.length === 0){

    photos =
      Array.from(

        { length: 12 },

        (_, index) =>
          `images/${id}/foto${index + 1}.jpg`

      );

  }


  const detailContent =
    document.getElementById("detailContent");


  if(!detailContent) return;


  detailContent.innerHTML = `

    <div class="documentation-page">


      <button
        class="documentation-back"
        type="button"
        onclick="showDetail('${id}','wisata')"
      >

        ← Kembali

      </button>


      <div class="documentation-heading">

        <p>

          DOKUMENTASI

        </p>


        <h2>

          Destinasi ${esc(item.name)}

        </h2>


        <span>

          ${photos.length} Foto

        </span>

      </div>


      <div class="documentation-grid">

        ${
          photos.map((photo, index) => {

            const candidates =
              getImageCandidates(photo);


            const candidatesJSON =
              esc(
                JSON.stringify(candidates)
              );


            return `

              <div class="documentation-photo">

                <img

                  src="${esc(candidates[0] || photo)}"

                  alt="${esc(item.name)} foto ${index + 1}"

                  loading="lazy"

                  data-candidates="${candidatesJSON}"

                  data-index="0"

                  onerror="tryPhoto(this)"

                >


                <span
                  class="photo-number"
                >

                  ${index + 1}

                </span>


                <span
                  class="photo-placeholder"
                >

                  FOTO ${index + 1}

                </span>

              </div>

            `;

          }).join("")
        }

      </div>

    </div>

  `;

};


/* =========================================================
   GALLERY EVENT
   9 FOTO — DESAIN 3 x 3
   KHUSUS BAGIAN EVENT
========================================================= */


/* =========================================
   DAFTAR FOTO EVENT
========================================= */

const EVENT_GALLERY_PHOTOS = {

  /* MUBA EXPO */
  e1: [
    "images/event/e1/foto1.jpeg",
    "images/event/e1/foto2.jpeg",
    "images/event/e1/foto3.jpeg",
    "images/event/e1/foto4.jpeg",
    "images/event/e1/foto5.jpeg",
    "images/event/e1/foto6.jpeg",
    "images/event/e1/foto7.jpeg",
    "images/event/e1/foto8.jpeg",
    "images/event/e1/foto9.jpeg"
  ],


  /* FESTIVAL RANDIK */
  e2: [
    "images/event/e2/foto1.jpeg",
    "images/event/e2/foto2.jpeg",
    "images/event/e2/foto3.jpeg",
    "images/event/e2/foto4.jpeg",
    "images/event/e2/foto5.jpeg",
    "images/event/e2/foto6.jpeg",
    "images/event/e2/foto7.jpeg",
    "images/event/e2/foto8.jpeg",
    "images/event/e2/foto9.jpeg"
  ],


  /* FESTIVAL BONGEN */
  e3: [
    "images/event/e3/foto1.jpeg",
    "images/event/e3/foto2.jpeg",
    "images/event/e3/foto3.jpeg",
    "images/event/e3/foto4.jpeg",
    "images/event/e3/foto5.jpeg",
    "images/event/e3/foto6.jpeg",
    "images/event/e3/foto7.jpeg",
    "images/event/e3/foto8.jpeg",
    "images/event/e3/foto9.jpeg"
  ],

  /* KUYUNG KUPEK */
  e4: [
    "images/event/e4/foto1.jpeg",
    "images/event/e4/foto2.jpeg",
    "images/event/e4/foto3.jpeg",
    "images/event/e4/foto4.jpeg",
    "images/event/e4/foto5.jpeg",
    "images/event/e4/foto6.jpeg",
    "images/event/e4/foto7.jpeg",
    "images/event/e4/foto8.jpeg",
    "images/event/e4/foto9.jpeg"
  ],

  /* BIDAR */
  e5: [
    "images/event/e5/foto1.jpeg",
    "images/event/e5/foto2.jpeg",
    "images/event/e5/foto3.jpeg",
    "images/event/e5/foto4.jpeg",
    "images/event/e5/foto5.jpeg",
    "images/event/e5/foto6.jpeg",
    "images/event/e5/foto7.jpeg",
    "images/event/e5/foto8.jpeg",
    "images/event/e5/foto9.jpeg"
  ],

  /* FESTIVAL BEKARANG */
  e6: [
    "images/event/e6/foto1.jpeg",
    "images/event/e6/foto2.jpeg",
    "images/event/e6/foto3.jpeg",
    "images/event/e6/foto4.jpeg",
    "images/event/e6/foto5.jpeg",
    "images/event/e6/foto6.jpeg",
    "images/event/e6/foto7.jpeg",
    "images/event/e6/foto8.jpeg",
    "images/event/e6/foto9.jpeg"
  ],

  /* PORPROV & PEPARPROV */
  e7: [
    "images/event/e7/foto1.jpeg",
    "images/event/e7/foto2.jpeg",
    "images/event/e7/foto3.jpeg",
    "images/event/e7/foto4.jpeg",
    "images/event/e7/foto5.jpeg",
    "images/event/e7/foto6.jpeg",
    "images/event/e7/foto7.jpeg",
    "images/event/e7/foto8.jpeg",
    "images/event/e7/foto9.jpeg"
  ],

  /* BALAP MOTOR */
  e8: [
    "images/event/e8/foto1.jpeg",
    "images/event/e8/foto2.jpeg",
    "images/event/e8/foto3.jpeg",
    "images/event/e8/foto4.jpeg",
    "images/event/e8/foto5.jpeg",
    "images/event/e8/foto6.jpeg",
    "images/event/e8/foto7.jpeg",
    "images/event/e8/foto8.jpeg",
    "images/event/e8/foto9.jpeg"
  ]

};



/* =========================================
   TAMPILKAN GALLERY EVENT
========================================= */

window.showEventGallery =
function(id){

  const item =
    DATA.event?.find(
      x => x.id === id
    );


  if(!item){

    alert(
      "Data event tidak ditemukan."
    );

    return;
  }


  const photos =
    EVENT_GALLERY_PHOTOS[id] || [];


  const detailContent =
    document.getElementById(
      "detailContent"
    );


  if(!detailContent) return;



  detailContent.innerHTML = `

    <div class="event-gallery-page">


      <!-- =========================
           TOMBOL KEMBALI
      ========================== -->

      <button
        class="event-gallery-back"
        type="button"
        onclick="showDetail('${esc(id)}','event')"
      >

        ← Kembali

      </button>



      <!-- =========================
           JUDUL
      ========================== -->

      <div class="event-gallery-heading">


        


        <h2>
          ${esc(item.name)}
        </h2>


        <span>
          ${photos.length} Foto
        </span>


      </div>



      <!-- =========================
           GRID FOTO
      ========================== -->

      <div class="event-gallery-grid">

        ${
          photos.map(
            (photo, index) => `

              <div
                class="event-gallery-photo"
              >


                <img
                  src="${esc(photo)}"
                  alt="${esc(item.name)} foto ${index + 1}"
                  loading="lazy"
                  onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('is-empty');
                  "
                >


                <!-- NOMOR FOTO -->

                <span
                  class="event-gallery-number"
                >
                  ${index + 1}
                </span>


                <!-- JIKA FOTO BELUM ADA -->

                <span
                  class="event-gallery-placeholder"
                >
                  FOTO ${index + 1}
                </span>


              </div>

            `
          ).join("")
        }

      </div>


    </div>

  `;

};













/* ==============================
   EDITOR
============================== */

function renderEditor(){

  const list =
    document.getElementById("editorList");


  if(!list) return;


  const items =
    DATA[editorType] || [];


  list.innerHTML =
    items.map(x => `

      <div class="editor-item">

        <img
          src="${esc(x.image)}"
          alt=""
        >


        <div>

          <h4>

            ${esc(x.name)}

          </h4>


          <p>

            ${esc(
              x.address ||
              x.category ||
              ""
            )}

          </p>

        </div>


        <div class="editor-actions">

          <button
            class="mini-btn"
            data-edit="${esc(x.id)}"
          >

            Edit

          </button>


          <button
            class="mini-btn"
            data-delete="${esc(x.id)}"
          >

            Hapus

          </button>

        </div>

      </div>

    `).join("");

}


/* ==============================
   RESET FORM
============================== */

function resetForm(){

  document
    .getElementById("dataForm")
    ?.reset();


  document
    .getElementById("formId")
    .value = "";


  document
    .getElementById("formType")
    .value = editorType;

}


/* ==============================
   EDIT ITEM
============================== */

function editItem(id){

  const item =
    DATA[editorType].find(
      x => x.id === id
    );


  if(!item) return;


  document
    .getElementById("formTitle")
    .textContent =
    "Edit Data";


  document
    .getElementById("formId")
    .value =
    item.id;


  document
    .getElementById("formType")
    .value =
    editorType;


  document
    .getElementById("fName")
    .value =
    item.name || "";


  document
    .getElementById("fCategory")
    .value =
    item.category || "";


  document
    .getElementById("fDesc")
    .value =
    item.desc || "";


  document
    .getElementById("fAddress")
    .value =
    item.address || "";


  document
    .getElementById("fPrice")
    .value =
    item.price || "";


  document
    .getElementById("fHours")
    .value =
    item.hours || "";


  document
    .getElementById("fMap")
    .value =
    item.map || "";


  document
    .getElementById("fImage")
    .value =
    item.image || "";


  document
    .getElementById("fExtra")
    .value =
    item.extra || "";


  openModal("formModal");

}


/* ==============================
   ADD ITEM
============================== */

function addItem(){

  resetForm();


  document
    .getElementById("formTitle")
    .textContent =
    "Tambah Data";


  openModal("formModal");

}


/* ==============================
   DELETE ITEM
============================== */

function deleteItem(id){

  if(
    !confirm("Hapus data ini?")
  ){

    return;

  }


  DATA[editorType] =
    DATA[editorType].filter(
      x => x.id !== id
    );


  saveData();


  renderAll();

  renderEditor();


  toast(
    "Data berhasil dihapus."
  );

}


/* ==============================
   GENERATE ID
============================== */

function generateNewId(type){

  const prefixes = {

    wisata: "w",

    hotel: "h",

    kuliner: "k",

    event: "e",

    prestasi: "p"

  };


  const prefix =
    prefixes[type];


  if(!prefix){

    return "x" + Date.now();

  }


  let max = 0;


  (DATA[type] || []).forEach(item => {

    const match =
      String(item.id).match(

        new RegExp(
          "^" +
          prefix +
          "(\\d+)$"
        )

      );


    if(match){

      max =
        Math.max(
          max,
          Number(match[1])
        );

    }

  });


  return prefix + (max + 1);

}


/* ==============================
   CLICK EVENTS
============================== */

document.addEventListener(
  "click",

  e => {

    const detail =
      e.target.closest("[data-detail]");


    if(detail){

      showDetail(
        detail.dataset.detail,
        detail.dataset.type
      );

      return;

    }


    const close =
      e.target.closest("[data-close]");


    if(close){

      closeModal(
        close.dataset.close
      );

      return;

    }


    const filter =
      e.target.closest(".filter");


    if(filter){

      currentFilter =
        filter.dataset.filter;


      document
        .querySelectorAll(".filter")
        .forEach(b => {

          b.classList.toggle(
            "active",
            b === filter
          );

        });


      renderCards();

      return;

    }


    const link =
      e.target.closest("[data-filter-link]");


    if(link){

      currentFilter =
        link.dataset.filterLink;


      document
        .querySelectorAll(".filter")
        .forEach(b => {

          b.classList.toggle(

            "active",

            b.dataset.filter ===
            currentFilter

          );

        });


      setTimeout(
        renderCards,
        50
      );

      return;

    }


    const edtab =
      e.target.closest("[data-editor-tab]");


    if(edtab){

      editorType =
        edtab.dataset.editorTab;


      document
        .querySelectorAll(".editor-tab")
        .forEach(b => {

          b.classList.toggle(
            "active",
            b === edtab
          );

        });


      renderEditor();

      return;

    }


    const edit =
      e.target.closest("[data-edit]");


    if(edit){

      editItem(
        edit.dataset.edit
      );

      return;

    }


    const del =
      e.target.closest("[data-delete]");


    if(del){

      deleteItem(
        del.dataset.delete
      );

      return;

    }

  }

);


/* ==============================
   SEARCH
============================== */

const searchInput =
  document.getElementById("searchInput");


if(searchInput){

  searchInput.addEventListener(
    "input",
    renderCards
  );

}


/* ==============================
   OPEN EDITOR
============================== */

const openEditor =
  document.getElementById("openEditor");


if(openEditor){

  openEditor.addEventListener(

    "click",

    () => {

      editorType =
        "wisata";


      document
        .querySelectorAll(".editor-tab")
        .forEach((b, i) => {

          b.classList.toggle(
            "active",
            i === 0
          );

        });


      renderEditor();


      openModal(
        "editorModal"
      );

    }

  );

}


/* ==============================
   ADD DATA
============================== */

const addData =
  document.getElementById("addData");


if(addData){

  addData.addEventListener(
    "click",
    addItem
  );

}


/* ==============================
   RESET DATA
============================== */

const resetData =
  document.getElementById("resetData");


if(resetData){

  resetData.addEventListener(

    "click",

    () => {

      if(
        confirm(
          "Kembalikan seluruh data ke data bawaan?"
        )
      ){

        DATA =
          structuredClone(
            DEFAULT_DATA
          );


        fixWisataIds();

        saveData();


        renderAll();

        renderEditor();


        toast(
          "Data bawaan dipulihkan."
        );

      }

    }

  );

}


/* ==============================
   EXPORT DATA
============================== */

const exportData =
  document.getElementById("exportData");


if(exportData){

  exportData.addEventListener(

    "click",

    () => {

      const blob =
        new Blob(

          [
            JSON.stringify(
              DATA,
              null,
              2
            )
          ],

          {
            type:
              "application/json"
          }

        );


      const a =
        document.createElement("a");


      a.href =
        URL.createObjectURL(blob);


      a.download =
        "jelajah-muba-data.json";


      a.click();


      URL.revokeObjectURL(
        a.href
      );


      toast(
        "JSON berhasil diekspor."
      );

    }

  );

}


/* ==============================
   IMPORT DATA
============================== */

const importData =
  document.getElementById("importData");


if(importData){

  importData.addEventListener(

    "change",

    async e => {

      const file =
        e.target.files[0];


      if(!file) return;


      try{

        const parsed =
          JSON.parse(
            await file.text()
          );


        if(

          !parsed.wisata ||

          !parsed.hotel ||

          !parsed.kuliner ||

          !parsed.event ||

          !parsed.prestasi

        ){

          throw new Error();

        }


        DATA = parsed;


        fixWisataIds();


        saveData();


        renderAll();

        renderEditor();


        toast(
          "Data JSON berhasil diimpor."
        );

      }

      catch(err){

        alert(
          "File JSON tidak sesuai format."
        );

      }


      e.target.value = "";

    }

  );

}


/* ==============================
   SAVE FORM
============================== */

const dataForm =
  document.getElementById("dataForm");


if(dataForm){

  dataForm.addEventListener(

    "submit",

    e => {

      e.preventDefault();


      const type =

        document
          .getElementById("formType")
          .value

        ||

        editorType;


      const oldId =

        document
          .getElementById("formId")
          .value;


      const id =

        oldId

        ||

        generateNewId(type);


      const item = {


        id: id,


        name:

          document
            .getElementById("fName")
            .value
            .trim(),


        category:

          document
            .getElementById("fCategory")
            .value
            .trim(),


        desc:

          document
            .getElementById("fDesc")
            .value
            .trim(),


        address:

          document
            .getElementById("fAddress")
            .value
            .trim(),


        price:

          document
            .getElementById("fPrice")
            .value
            .trim(),


        hours:

          document
            .getElementById("fHours")
            .value
            .trim(),


        map:

          document
            .getElementById("fMap")
            .value
            .trim(),


        image:

          document
            .getElementById("fImage")
            .value
            .trim()

          ||

          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",


        extra:

          document
            .getElementById("fExtra")
            .value
            .trim()

      };


      const idx =

        DATA[type].findIndex(

          x => x.id === id

        );


      if(idx >= 0){

        DATA[type][idx] =
          item;

      }

      else{

        DATA[type].push(
          item
        );

      }


      saveData();


      renderAll();

      renderEditor();


      closeModal(
        "formModal"
      );


      toast(
        "Data berhasil disimpan."
      );

    }

  );

}


/* ==============================
   MOBILE MENU
============================== */

const menuBtn =
  document.getElementById("menuBtn");


if(menuBtn){

  menuBtn.addEventListener(

    "click",

    () => {

      document
        .getElementById("mobileNav")
        ?.classList
        .toggle("open");

    }

  );

}


document
  .querySelectorAll(".mobile-nav a")
  .forEach(a => {

    a.addEventListener(

      "click",

      () => {

        document
          .getElementById("mobileNav")
          ?.classList
          .remove("open");

      }

    );

  });


/* ==============================
   ESC CLOSE MODAL
============================== */

window.addEventListener(

  "keydown",

  e => {

    if(e.key === "Escape"){

      document
        .querySelectorAll(".modal.open")
        .forEach(m => {

          closeModal(m.id);

        });

    }

  }

);


/* ==============================
   YEAR
============================== */

const year =
  document.getElementById("year");


if(year){

  year.textContent =
    new Date().getFullYear();

}


/* ==============================
   INITIAL RENDER
============================== */

renderAll();