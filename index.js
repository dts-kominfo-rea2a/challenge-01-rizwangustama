// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [],
    isHavePet: true,
    education: [{
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        }
    ],
    favoriteRestaurant: [],
};

const restaurantfirstUser = new Set(["Bento", "Pancake", "Eggy", "Padang", "Tteok", "Sushi"]);
const colourfirstUser = new Set(["Yellow", "Pink", "White", "Purple"]);
firstUser.favoriteRestaurant.push(restaurantfirstUser);
firstUser.favoriteColor.push(colourfirstUser);

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [],
    isHavePet: false,
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016,
        },
        {
            name: "Universitas Maju",
            city: "Tangerang"
        }
    ],
    favoriteRestaurant: [],
};

const favoriteColor = ["Blue", "Black", "Grey"];
const favoriteRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
const myArray = new Set(favoriteColor);
const arrayFavorire = new Set(favoriteRestaurant);
const arrayUniq = [...myArray];
const arrayUniqRest = [...arrayFavorire]

secondUser.favoriteColor.push(arrayUniq);
secondUser.favoriteRestaurant.push(arrayUniqRest);
// console.log(arrayUniq);


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};