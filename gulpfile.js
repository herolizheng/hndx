var gulp=require("gulp");
var sass=require("gulp-sass");//sass
// var connect=require("gulp-connect");//自动刷新
var uglify=require("gulp-uglify");//js文件压缩
// var rename=require("gulp-rename");//文件重命名
var cleanCss = require('gulp-clean-css');//gulp-clean-css
var	htmlmin=require("gulp-htmlmin");//html文件压缩插件
// var minfyCSS = require("gulp-minify-css");//压缩css文件
var imagemin = require("gulp-imagemin");//压缩图片


gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("css"));
});
//copy html
gulp.task("copy-html",function(){
	var options ={
	collapseWhitespace: true,//压缩HTML
        minifyJS: true,//压缩页面JS
        // minifyCSS: true//压缩页面CSS
}
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\hsjg\\html"));
});

// 拷贝并压缩css
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(minfyCSS())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\hsjg\\css"));
});
//拷贝并压缩js
// gulp.task("copy-js",function(){
// 	gulp.src("js/*.js")
// 	//.pipe(concat("hsjg.js"))//合并所有js文件
// 	.pipe(uglify())//压缩文件
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\hsjg\\js"));
// });
//拷贝图片
gulp.task("copy-image",function(){
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(imagemin())//压缩图片
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\hsjg\\img"));
});


gulp.task("uglify",function(){
	gulp.src("js/*.js").pipe(js()).pipe(gulp.js("js"));
});


gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("html/*.html",["copy-html"]);
	// gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*js",["copy-js"]);
	gulp.watch("img/*.{jpg,png,gif}",["copy-image"]);

})