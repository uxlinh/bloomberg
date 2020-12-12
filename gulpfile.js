const { watch, parallel, src, dest } = require('gulp');

const sync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

function js() {
	return src('dev/js/app.js').pipe(dest('app/js')).pipe(sync.stream());
}

function css() {
	return src('dev/sass/app.sass').pipe(sass()).pipe(dest('app/css')).pipe(sync.stream());
}

function js_prod() {
	return src('dev/js/app.js')
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(minify({ ext: { min: '.js' }, noSource: true }))
		.pipe(dest('app/js'));
}

function css_prod() {
	return src('dev/sass/app.sass')
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest('app/css'));
}

function start() {
	sync.init({
		server: { baseDir: './app' },
		notify: false,
		logLevel: 'silent',
	});

	watch('dev/sass/*.sass', css);
	watch('dev/js/*.js', js);
	watch('app/index.html').on('change', sync.reload);
}

exports.build = parallel(css_prod, js_prod);
exports.start = start;
