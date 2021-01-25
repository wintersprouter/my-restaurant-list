const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error！')
})

db.once('open', () => {
  console.log('mongodb connect！')
  Restaurant.create(
    {
      "name": "Sababa 沙巴巴中東美食",
      "name_en": "Sababa Pita Bar",
      "category": "中東料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
      "address": "台北市大安區羅斯福路三段 283 巷 17 號",
      "phone": "02 2363 8009",
      "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
      "rating": 4.1,
      "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/Sababa%20Pita%20Bar%20MENU.jpg",
    },
    {
      "name": "梅子鰻蒲燒專賣店",
      "name_en": "Umeko Japanese Unagi House",
      "category": "日本料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg",
      "address": "台北市中山區林森北路 107 巷 8 號",
      "phone": " 02 2521 2813",
      "google_map": "https://goo.gl/maps/cUJEmFSRKyH2",
      "rating": 4.3,
      "description": "鰻魚、鰻魚飯、真空鰻魚",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/%E6%A2%85%E5%AD%90%E9%B0%BB%E8%92%B2%E7%87%92%E5%B0%88%E8%B3%A3%E5%BA%97%20%E8%8F%9C%E5%96%AE.jpg",
    },
    {
      "name": "ZIGA ZIGA",
      "name_en": "Ziga Zaga",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg",
      "address": "台北市信義區松壽路 2 號",
      "phone": "02 2720 1230",
      "google_map": "https://goo.gl/maps/bnZKC2YjYZp",
      "rating": 4.2,
      "description": "以頂級食材與料理技法完美呈現各類經典義式料理，獅頭造型烤爐現作pizza與開放式廚房現作龍蝦茄汁雞蛋銀絲麵是不可錯過的必嚐推薦！夜間國際級樂團的熱力演出，感受活力四射的現場魅力。",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/ziga%20zaga%20%E8%8F%9C%E5%96%AE.jpg",

    },
    {
      "name": "艾朋牛排餐酒館",
      "name_en": "A Point Steak & Bar",
      "category": "美式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg",
      "address": " 台北市信義區忠孝東路五段 139 號 2 樓",
      "phone": "02 2756 7788",
      "google_map": "https://goo.gl/maps/6Lq7U2ahp152",
      "rating": 4.2,
      "description": "從味蕾開始，重拾美味感動。艾朋牛排餐酒館對高級料理的細選珍饌堅持，更勇於翻脫新意，要以平易親人的親切風格，同時不失料理獨家精髓，成功打動每吋挑剔味蕾，讓每位顧客享用鮮嫩Steak牛排風采，咀嚼Pasta義大利麵層次風味！",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/%E8%89%BE%E6%9C%8B%E7%89%9B%E6%8E%92%E9%A4%90%E9%85%92%E9%A4%A8.jpg",
    },
    {
      "name": "Gusto Pizza",
      "name_en": "Gusto Pizza",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg",
      "address": "台北市中正區連雲街 74 號",
      "phone": "02 2358 7001",
      "google_map": "https://goo.gl/maps/rqzbVyrR9Gp",
      "rating": 4.7,
      "description": "我們的披薩師傅從倫敦帶來別於一般口味的經典義大利披薩，而且披薩麵團至少發酵24小時。同時我們也窯烤麵包及甜點，但披薩才是GUSTO最強項。我們製做的每一份餐點，都充滿飽飽的口味及香氣。除此之外，遵循純手工及傳統方式製作是我們的堅持。",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/FireShot%20Capture%20034%20-%20%E6%88%91%E5%80%91%E7%9A%84%E8%8F%9C%E5%96%AE%20-%20gustopizza.com.tw.png",
    },
    {
      "name": "WXYZ Bar",
      "name_en": "WXYZ Bar",
      "category": "酒吧",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg",
      "address": "台北市中山區雙城街",
      "phone": "02 7743 9999",
      "google_map": "https://goo.gl/maps/rFLNu87ruBM2",
      "rating": 4.3,
      "description": "紅酒吧，現代創意料理，開胃小館。提供純素選擇，提供無麩質選擇，提供素食選擇。",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/WXYZ%20Bar%20%E8%8F%9C%E5%96%AE.jpg",
    },
    {
      "name": "Fika Fika Cafe",
      "name_en": "Fika Fika Cafe",
      "category": "咖啡廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg",
      "address": "台北市中山區伊通街 33 號",
      "phone": "02 2507 0633",
      "google_map": "https://goo.gl/maps/Y1iyiSK7EeR2",
      "rating": 4.3,
      "description": "我們在乎每一位顧客、賣出去的每一滴咖啡、每一粒咖啡豆。而今，「Fika Fika Cafe Online Store」更期望把如此美好的體驗，分享給喜歡我們的每一位顧客，希望您無論在世界的哪一個角落，都能與我們一起享受「Fika Fika」的美好時光。",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/Fika%20Fika%20Cafe.png",
    },
    {

      "name": "布娜飛比利時啤酒餐廳",
      "name_en": "Bravo Beer",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg",
      "address": "台北市松山區市民大道四段 185 號",
      "phone": "02 2570 1255",
      "google_map": "https://goo.gl/maps/V9mKwVJ4s5v",
      "rating": 4.7,
      "description": "我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...",
      "menu": "https://raw.githubusercontent.com/Chia-HuiHsueh/my-restaurant-list/master/public/img/menus/%E5%B8%83%E5%A8%9C%E9%A3%9B%E6%AF%94%E5%88%A9%E6%99%82%E5%95%A4%E9%85%92%E9%A4%90%E5%BB%B3%20%E8%8F%9C%E5%96%AE.jpg",
    }
  )
  console.log('done')
})