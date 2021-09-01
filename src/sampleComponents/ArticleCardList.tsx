import * as React from 'react';

export const ArticleCardList: React.FC = () => {
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
			description: '鉄道でありながら道路上を走る区間があり、路面電車として紹介されることもある路線です。海のすぐそばにある踏切や駅はドラマやアニメのシーンでよく使われます。'
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
	return <section className='tkcnt-y tkb-normal tkm-4 tkp-3 tkr-3'>
		<h3 className='tkcnt-x tktxt-heading tkm-3'>記事一覧</h3>
		<div className='tkcnt-x tkcnt--col-4 tkcnt--col-3--s tkcnt--col-2--xs tkcnt--wrap tkcolor-bg1 tkm-3 tkp-1 tkr-2'>
			{renderedSampleMemos}
		</div>
	</section>
}
