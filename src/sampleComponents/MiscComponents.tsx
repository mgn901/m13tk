import * as React from 'react';

export const MiscComponents = () => {
	return <div className='tkcnt-y tkm-4 tkp-3 tkr-3 tkb-normal'>
		<h3 className='tkcnt-x tktxt-heading tkm-3'>その他のUI要素</h3>
		<div className='tkcnt-y tkm-3'>
			<input type='range' className='tkinput-range tkm-3' min={0} max={10} step={1} />
			<progress className='tkinput-progress tkm-3' max={100} value={67}>67%</progress>
		</div>
	</div>
}
