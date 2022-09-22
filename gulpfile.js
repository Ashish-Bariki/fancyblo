const{src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('../source/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('../source/mainsass'))
}

function watchTask(){
    watch(['../source/sass/**/*.scss'],buildStyles)
}

exports.default=series(buildStyles,watchTask)