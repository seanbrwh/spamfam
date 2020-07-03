const { src, dest, watch } = require("gulp");
const fs = require("fs");

exports.default = (done) => {
  if (fs.existsSync("/dist/views")) {
    done();
  } else {
    return src("src/server/views/**/*").pipe(dest("dist/views"));
  }
};
