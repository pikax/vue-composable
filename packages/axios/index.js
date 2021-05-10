"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/axios.cjs.prod.js");
} else {
  module.exports = require("./dist/axios.cjs.js");
}
