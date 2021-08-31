import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/style.scss';

export const App: React.FC = () => {
	const sampleMemos = [
		{
			name: '国営昭和記念公園',
			description: '立川市・昭島市にまたがる東京都内最大級の公園です。年間を通して草花を楽しむことができるほか、日本庭園や武蔵野の田園風景を再現したエリアもあります。'
		},
		{
			name: '江戸東京たてもの園',
			description: '小金井公園の敷地内にあります。東京都内の歴史的建造物が移築されていて、それら建物による街並みを楽しむことができます。'
		},
		{
			name: '高尾山',
			description: '登山者数が多いことで有名な山です。東京都内にあり、新宿駅からおよそ1時間で山麓の駅にアクセスできます。いくつかの登山路があり豊かな植生を楽しめます。'
		},
		{
			name: '江ノ島電鉄線',
			description: '鉄道でありながら道路上を走る区間であり、路面電車として紹介されることもある路線です。海のすぐそばにある踏切や駅はドラマやアニメのシーンでよく使われます。'
		},
		{
			name: '神戸市風見鶏の館（旧トーマス邸）',
			description: '1904年にドイツ人のゴットフリート・トーマスの住宅として建てられたものです。屋根上に風見鶏があることからこの名前で呼ばれます。'
		}
	];
	const renderedSampleMemos = sampleMemos.map((item, idx) => {
		return <a key={idx} className='tkcnt-x tkbtn-flat tkarfwrapper-1-1 tkm-1 tkr-1'>
			<div className='tkcnt-y tkp-2'>
				<h4 className='tkcnt-txt tkcnt--noshrinkable tkcnt--trim tky-12 tkm-1'>
					<span className='tktxt-heading'>{item.name}</span>
				</h4>
				<p className='tkcnt-txt tkcnt-txt--small tkcnt--trim'>
					<span className='tktxt tkcolor-fg2'>{item.description}</span>
				</p>
			</div>
		</a>
	});
	return <div className='tkcnt-y tkalign-center'>
		<header className='tkcnt-x tksticky-top tkjustify-center tkpy-3 tkshadow-2'>
			<div className='tkcnt-x tkx-160 tkpx-4'>
				<a className='tkbtn-text tktxt-heading'>m13TK</a>
			</div>
		</header>
		<main className='tkcnt-y tkx-160 tkm-4 tkp-4'>
			<section className='tkcnt-txt'>
				<h1 className='tkpage-h1'>m13TK: ラクするためのCSSフレームワーク</h1>
				<p className='tkpage-p'>CSSのFlexible Box LayoutやCustom Propertiesを活用している、高速なレイアウトの構築を支援するCSSフレームワークです。</p>
			</section>
			<h2 className='tkpage-h2'>使用例</h2>
			<section className='tkcnt-x tkm-4 tkp-3 tkb-normal tkr-3'>
				<img className='tkchip-x tkimg tkx-8 tky-8 tkm-2 tkb-normal tkr-4' src='./imgs/mgn901-icon.svg' />
				<div className='tkcnt-y tkm-2'>
					<div className='tkcnt-x tkjustify-between'>
						<div className='tkchip-x tkchip--shrinkable tkm-2'>
							<span className='tktxt-heading tktxt--shrinkable tkcolor-fg0 tkm-2'>Meganesium2001</span>
							<span className='tktxt tktxt--shrinkable tkm-2'>@mgn901</span>
							<span className='tktxt tkm-2'>1h</span>
						</div>
						<button className='tkchip-x tkbtn-normal tkm-2 tkpx-2'>共有</button>
					</div>
					<div className='tkcnt-txt'>
						SNSの投稿のような画面もコンテナの組み合わせによって直感的に構築できます。文中に
						<img className='tkchip-x tkimg tkx-6 tky-6 tkb-normal tkr-3' src='./imgs/mgn901-icon.svg' />
						こんな感じの画像を入れることもできますよ！
					</div>
				</div>
			</section>
			<section className='tkcnt-y tkb-normal tkm-4 tkr-3'>
				<div className='tkcnt-x tkarfwrapper-16-9 tkm-3'>
					<img className='tkimg tkcnt-x tkr-tl-3 tkr-tr-3' src='https://i.gyazo.com/thumb/400/3bac69f02faa4850dd8e53df21cdf4bd-jpg.jpg' />
				</div>
				<div className='tkcnt-txt tkm-3 tkpx-3'>
					<h3 className='tktxt-heading'>国営昭和記念公園</h3>
					<p className='tkcnt-txt'>立川市・昭島市にまたがる東京都内最大級の公園です。年間を通して草花を楽しむことができるほか、日本庭園や武蔵野の田園風景を再現したエリアもあります。</p>
				</div>
				<button className='tkcolor-pr tkcnt-x tkbtn-flat tkm-3 tkp-3 tkr-bl-3 tkr-br-3'><span className='tktxt-fg0'>もっと見る</span></button>
			</section>
			<section className='tkcnt-y tkb-normal tkm-4 tkp-3 tkr-3'>
				<h3 className='tkcnt-x tktxt-heading tkm-3'>ログイン</h3>
				<div className='tkcnt-x tkcnt-y--s tkcnt-y--xs tkalign-center tkm-3'>
					<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
						<span className='tkcnt-x tktxt-small'>メールアドレス</span>
						<input className='tkinput-text' type='text' />
					</label>
					<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
						<span className='tkcnt-x tktxt-small'>パスワード</span>
						<input className='tkinput-text' type='text' />
					</label>
					<button className='tkcolor-pr tkchip-x tkbtn-normal tky-12 tkm-3 tkpx-3'>
						<span className='tktxt tkcolor-fg0'>ログイン</span>
					</button>
				</div>
			</section>
			<section className='tkcnt-y tkb-normal tkm-4 tkp-3 tkr-3'>
				<h3 className='tkcnt-x tktxt-heading tkm-3'>メモ一覧</h3>
				<div className='tkcnt-x tkcnt--col-4 tkcnt--col-3--s tkcnt--col-2--xs tkcnt--wrap tkcolor-bg1 tkm-3 tkp-1 tkr-2'>
					{renderedSampleMemos}
				</div>
			</section>
		</main>
		<footer className='tkcnt-x tkjustify-center tkm-4 tkpy-4'>
			<div className='tkcnt-x tkjustify-center tkx-160 tkpx-4'>&copy; 2021- Meganesium2001 (mgn901)</div>
		</footer>
	</div>
}

ReactDOM.render(<App />, document.getElementById('m13tkweb-app'));
