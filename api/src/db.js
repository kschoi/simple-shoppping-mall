// 몽구스 라이브러리 요청
const mongoose = require("mongoose");

module.exports = {
  connect: (DB_HOST) => {
    // DB에 연결
    mongoose.connect(DB_HOST);

    // 연결에 성공하면 로깅
    mongoose.connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });

    // 연결에 실패하면 에러 로깅
    mongoose.connection.on("error", (err) => {
      console.error(err);
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running."
      );
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
