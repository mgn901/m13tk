import * as React from 'react';

export const ShortPost: React.FC = () => {
	return <section className='tkcnt-x tkm-4 tkp-3 tkb-normal tkr-3'>
		<img className='tkchip-x tkimg tkx-8 tky-8 tkm-2 tkb-normal tkr-4' src='./imgs/mgn901-icon.svg' />
		<div className='tkcnt-y tkm-2'>
			<div className='tkcnt-x tkjustify-between'>
				<div className='tkchip-x tkchip--shrinkable tkm-2'>
					<span className='tktxt-heading tktxt--shrinkable tkcolor-fg0 tkm-2'>Meganesium2001</span>
					<span className='tktxt tktxt--shrinkable tkcolor-fg2 tkm-2'>@mgn901</span>
					<span className='tktxt tkcolor-fg2 tkm-2'>1h</span>
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
}
