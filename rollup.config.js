import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';

let plugins = [
	replace({
		'process.env.NODE_ENV': JSON.stringify(process.env.BUILD)
	}),
	scss({
		output: './dist/style.css',
		outputStyle: 'compressed',
		watch: 'src/scss'
	})
]

if (process.env.BUILD === 'development') {
	plugins.push(serve('dist'));
}

export default {
	input: 'src/scss/style.scss',
	output: {
		file: 'dist/style.css',
		format: 'es',
	},
	// host: '0.0.0.0',
	port: 10001,
	plugins
}
