import * as React from 'react';

export const InputDepAndArr: React.FC = () => {
	return <section className='tkcnt-y tkb-normal tkm-4 tkp-3 tkr-3'>
		<h3 className='tkcnt-x tktxt-heading tkm-3'>経路検索</h3>
		<div className='tkcnt-x tkcnt-y--s tkcnt-y--xs tkalign-start tkm-3'>
			<div className='tkcnt-y tkm-3'>
				<div className='tkcnt-x tkcnt-y--s tkcnt-y--xs tkm-3'>
					<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
						<span className='tkcnt-x tktxt-small'>発駅</span>
						<input className='tkinput-text' type='text' />
					</label>
					<label className='tkcnt-y tkinputwrapper-text tkm-3 tkpx-2'>
						<span className='tkcnt-x tktxt-small'>着駅</span>
						<input className='tkinput-text' type='text' />
					</label>
				</div>
				<label className='tkcnt-x'>
					<input className='tkinput-radio tkm-2' type='radio' name='InputDepAndArr-by' checked={true} />
					<span className='tkcnt-x tktxt'>公共交通機関</span>
				</label>
				<label className='tkcnt-x'>
					<input className='tkinput-radio tkm-2' type='radio' name='InputDepAndArr-by' />
					<span className='tkcnt-x tktxt'>徒歩</span>
				</label>
				<label className='tkcnt-x'>
					<input className='tkinput-radio tkm-2' type='radio' name='InputDepAndArr-by' />
					<span className='tkcnt-x tktxt'>自転車</span>
				</label>
				<label className='tkcnt-x'>
					<input className='tkinput-radio tkm-2' type='radio' name='InputDepAndArr-by' />
					<span className='tkcnt-x tktxt'>自動車</span>
				</label>
				<label className='tkcnt-x'>
					<input className='tkinput-checkbox tkm-2' type='checkbox' />
					<span className='tkcnt-x tktxt'>有料特急を使う</span>
				</label>
			</div>
			<button className='tkcolor-pr tkchip-x tkbtn-normal tky-12 tkm-3 tkpx-3'>
				<span className='tktxt tkcolor-fg0'>経路検索</span>
			</button>
		</div>
	</section>
}
