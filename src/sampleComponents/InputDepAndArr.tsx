import * as React from 'react';

export const InputDepAndArr: React.FC = () => {
	return <section className='tkcnt-y tkb-normal tkm-4 tkp-3 tkr-3'>
		<h3 className='tkcnt-x tktxt-heading tkm-3'>経路検索</h3>
		<div className='tkcnt-x tkcnt-y--s tkcnt-y--xs tkalign-center tkm-3'>
			<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
				<span className='tkcnt-x tktxt-small'>発駅</span>
				<input className='tkinput-text' type='text' />
			</label>
			<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
				<span className='tkcnt-x tktxt-small'>着駅</span>
				<input className='tkinput-text' type='text' />
			</label>
			<button className='tkcolor-pr tkchip-x tkbtn-normal tky-12 tkm-3 tkpx-3'>
				<span className='tktxt tkcolor-fg0'>経路検索</span>
			</button>
		</div>
	</section>
}
