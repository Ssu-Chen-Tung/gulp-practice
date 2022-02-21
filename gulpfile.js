const { src, dest, watch } = require('gulp');
const sass = require("gulp-sass");

function compile_sass() {
  return src('./stylesheet/*.scss') // SCSS 主檔案路徑
    .pipe(sass().on('error', sass.logError)) // 用 gulp-sass 進行編譯
    .pipe(dest('./public/css')); // 編譯完成輸出路徑
}


//輸出任務
exports.default = compile_sass;

watch('./stylesheet/*.scss', compile_sass);
