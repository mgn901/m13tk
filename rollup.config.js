import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import reactRefresh from 'rollup-plugin-react-refresh';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

let plugins = [
	replace({
		'process.env.NODE_ENV': JSON.stringify(process.env.BUILD)
	}),
	typescript(),
	nodeResolve(),
	commonjs(),
	scss({
		output: './dist/style.css',
		outputStyle: 'compressed',
		watch: 'src/scss'
	})
]

if (process.env.BUILD === 'development') {
	plugins.push(reactRefresh());
	plugins.push(serve('dist'));
}

if (process.env.BUILD === 'production') {
	plugins.push(terser());
}

export default {
	input: 'src/main.tsx',
	output: {
		dir: 'dist',
		format: 'umd',
		name: 'm13tk'
	},
	host: '0.0.0.0',
	port: 10001,
	plugins
}
