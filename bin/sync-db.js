const models = require("../models");

module.exports = () => {
  // force : 기존 데이터베이스 삭제 후 새로 만든다.
  const options = {
    force: process.env.NODE_ENV === "test",
  };
  return models.sequelize.sync(options); // 데이터베이스 동기화
};
