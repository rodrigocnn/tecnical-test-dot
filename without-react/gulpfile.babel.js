import gulp from 'gulp'
import yargs from 'yargs'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import gulpif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import imagemin from 'gulp-imagemin'

const PRODUCTION = yargs.argv.prod
sass.compiler = require('node-sass');

const paths  ={
   styles:{
     src:['src/scss/bundle.scss', 'src/css/bootstrap/scss/*.scss'],
     dest:'dist/css'
   },
   images:{
     src:'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
     dest:'dist/assets/images'
   }
}

export const images = ()=>{
    return  gulp.src(paths.images.src)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest))
}
  
 export const styles = ()=> {
   return gulp.src(paths.styles.src)
   .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
   .pipe(sass.sync().on('error', sass.logError))
   .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
   .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
   .pipe(gulp.dest(paths.styles.dest));
}

export const watch = ()=>{
     gulp.watch('src/scss/**/*.scss', styles)
}



