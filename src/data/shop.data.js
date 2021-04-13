// Data was borrowed from sklepkorzykarza.pl just as a dummy data
const SHOP_DATA = [
    {
        id: 100,
        title: "Hats",
        collection: [
            {
                id: 1,
                name: "Jordan Pro Jumpman Snapback",
                price: 34,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/nike/169203/czapka-jordan-pro-jumpman-snapback-ar2118-015-5e999d12c0552.jpg",
            },
            {
                id: 2,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 3,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 4,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 5,
                name: "",
                price: 90,
                imgURL: "",
            },
        ]
    },
    {
        id: 200,
        title: "Shoes",
        collection: [
            {
                id: 6,
                name: "Air Jordan XXXV",
                price: 90,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/jordan/182191/air-jordan-xxxv-cq4227-030-5ffd526aea228.jpg",
            },
            {
                id: 7,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 8,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 9,
                name: "",
                price: 90,
                imgURL: "",
            },
            {
                id: 10,
                name: "",
                price: 90,
                imgURL: "",
            },
        ]
    },
    {
        id: 300,
        title: "Balls",
        collection: [
            {
                id: 11,
                name: "spalding TF-1000 Legacy",
                price: 70,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/spalding/178891/pilka-do-koszykowki-spalding-nba-tf-1000-legacy-rozm-7-29321744509-5f76d9eb42666.jpg",
            },
            {
                id: 12,
                name: "Piłka Molten B6G4500 FIBA",
                price: 120,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/molten/179001/p-kosz-molten-fiba-b6g4500-5f7abb6f9a04d.jpg",
            },
            {
                id: 13,
                name: "Wilson FIBA 3x3 Game Basketball",
                price: 50,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2015/inne/60379/pilka-wilson-fiba-3x3-game-basketball-wtb0533xb-5a9f979e03c6e.jpg",
            },
            {
                id: 14,
                name: "Nike Dominate 8P",
                price: 66,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/nike/180988/pilka-do-koszykowki-dominate-8p-bright-crimson-black-white-hyper-royal-n-000-1165-617-06-5fc75537ab7c8.jpg",
            },
            {
                id: 15,
                name: "Jordan Hyper Grip",
                price: 80,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/nike/168297/pilka-nike-koszykowka-jordan-hyper-grip-4p-j-ki-01-858-07-5e551b5047fea.jpg.jpg",
            },
        ]
    },
    {
        id: 400,
        title: "Accessories",
        collection: [
            {
                id: 16,
                name: "Crep zestaw do czyszczenia",
                price: 100,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2017/crepprotec/78981/crep-zestaw-do-czyszczenia-crep-cure-travel-cp0002-58dca39f938ee.jpg",
            },
            {
                id: 17,
                name: "Nike Rękaw Los Angeles Lakers",
                price: 10,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/nike/168287/nike-koszykowka-nba-shooter-sleeve-la-lakers-amarillo-field-purple-n-100-0538-747-sm-5e5517c4e729f.jpg.jpg",
            },
            {
                id: 18,
                name: "Torba Nike Academy Team",
                price: 100,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2018/nike/101969/torba-nike-academy-team-hardcase-l-ba5506-657-5def7e1783b16.jpg.jpg",
            },
            {
                id: 19,
                name: "Plecak Nike Elemental",
                price: 15,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2019/nike/158381/y-nk-elmntl-bkpk-gfx-fa19-ba6032-010-5d2308ac90eec.jpeg",
            },
            {
                id: 20,
                name: "Jordan Jumpman Wristband",
                price: 100,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2019/nike/165870/opaska-jordan-jumpman-x-wings-wristbands-2-0-gym-red-black-black-j-000-3598-683-os-5dfcc1912860e.jpg.jpg",
            },
        ]
    },
    {
        id: 500,
        title: "Other",
        collection: [
            {
                id: 21,
                name: "Hypervolt Bluetooth",
                price: 400,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2020/inne/180452/hyperice-hypervolt-bluetooth-srebrny-53100-038-00-5fa9400360dbb.jpg",
            },
            {
                id: 22,
                name: "BlackRoll Super Band",
                price: 24,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2019/blackroll/155031/tasma-blackroll-super-band-zielony-superbandziel-5c5d90ec20b16.png",
            },
            {
                id: 23,
                name: "Blackroll Duoball 12",
                price: 22,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2017/blackroll/82624/kulki-do-masazu-blackroll-duoball-12cm-ballsduo12-598d5b092228b.jpg",
            },
            {
                id: 24,
                name: "Blackroll Groove Standard",
                price: 43,
                imgURL: "https://blob.sxv.pl/shops/media/f1000/2017/blackroll/82617/rolka-do-masazu-blsckroll-groove-standard-rollgros-598d5b4f78812.jpg",
            },
            {
                id: 25,
                name: "Normatec Pulse 2.0",
                price: 2000,
                imgURL: "Normatec Pulse 2.0",
            },
        ]
    }
]

//{
//    id: 1,
//    name: "",
//    price: 4,
//    imgURL: "",
// },

export default SHOP_DATA;