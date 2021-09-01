import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ArticleCardList } from './sampleComponents/ArticleCardList';
import { InputDepAndArr } from './sampleComponents/InputDepAndArr';
import { PictureCard } from './sampleComponents/PictureCard';
import { ShortPost } from './sampleComponents/shortPost';
import './scss/style.scss';

export const App: React.FC = () => {
	return <div className='tkcnt-y tkalign-center'>
		<header className='tkcnt-x tksticky-top tkjustify-center tkm-6 tkpy-3 tkshadow-2'>
			<div className='tkcnt-x tkx-160 tkpx-4'>
				<a className='tkbtn-text tktxt-heading'>m13TK</a>
			</div>
		</header>
		<main className='tkcnt-y tkx-160 tkm-6 tkpx-4 tkpy-6'>
			<section className='tkcnt-txt'>
				<h1 className='tkpage-h1'>m13TK: ラクするためのCSSフレームワーク</h1>
				<p className='tkpage-p'>CSSのFlexible Box LayoutやCustom Propertiesを活用している、高速なレイアウトの構築を支援するCSSフレームワークです。</p>
			</section>
			<h2 className='tkpage-h2'>使用例</h2>
			<ShortPost />
			<ArticleCardList />
			<PictureCard />
			<InputDepAndArr />
		</main>
		<footer className='tkcnt-x tkjustify-center tkm-6 tkpy-6'>
			<div className='tkcnt-x tkjustify-center tkx-160 tkpx-4'>&copy; 2021- Meganesium2001 (mgn901)</div>
		</footer>
	</div>
}

ReactDOM.render(<App />, document.getElementById('m13tkweb-app'));
