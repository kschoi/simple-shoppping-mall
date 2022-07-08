// 몽구스 라이브러리 요청
const mongoose = require("mongoose");

// 아이템의 DB 스키마 정의
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// 스키마와 함께 'Item' 모델 정의
const Item = mongoose.model("Item", itemSchema);

// 모듈 익스포트
module.exports = Item;
