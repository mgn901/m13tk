import * as React from 'react';

export const PictureCard: React.FC = () => {
	return <section className='tkcnt-x tkcnt--col-2 tkcnt--col-1--s tkcnt--col-1--xs tkm-4'>
		<div className='tkcnt-x tkarfwrapper-3-4 tkm-4'>
			<div className='tkcnt-y tkb-normal tkr-3 tkjustify-between'>
				<div className='tkcnt-y tkm-3'>
					<div className='tkcnt-x tkarfwrapper-4-3 tkm-3'>
						<img className='tkimg tkcnt-x tkr-tl-3 tkr-tr-3' src='https://i.gyazo.com/thumb/400/3bac69f02faa4850dd8e53df21cdf4bd-jpg.jpg' />
					</div>
					<div className='tkcnt-txt tkcnt--trim tkm-3 tkpx-3'>
						<h3 className='tktxt-heading'>国営昭和記念公園</h3>
						<p className='tkcnt-txt tkcolor-fg2'>立川市・昭島市にまたがる東京都内最大級の公園です。年間を通して草花を楽しむことができるほか、日本庭園や武蔵野の田園風景を再現したエリアもあります。</p>
					</div>
				</div>
				<button className='tkcolor-pr tkcnt-x tkcnt--noshrinkable tkbtn-flat tkm-3 tkp-3 tkr-bl-3 tkr-br-3'>
					<span className='tktxt-fg0'>もっと見る</span>
				</button>
			</div>
		</div>
	</section>
}
