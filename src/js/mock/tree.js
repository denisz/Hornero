module.exports = {
	displayName : 'Empty',
	text 		: 'test Mock',
	styles 		: {
		// backgroundColor : '#A00000'
	},
	subviews 	: [
		{
			displayName : 'Text',
			text 		: 'Haha',
			styles 		: {
				border  		: '1px solid red',
				marginTop 		: 10,
				color  			: 'black',
				fontFamily 		: 'Trebushet',
				fontSize 		: 12,
				fontWeight 		: 'bold',
				backgroundColor : 'white'
			},
		},
		{
			displayName : 'Row',
			subviews : [
				{
					displayName : 'Col',
				},
				{
					displayName : 'Col',
					styles 		: {
						border  		: '1px solid red',
						backgroundColor : 'white'
					},
					subviews : [	
						{
							displayName : 'Text'
						},
						{
							displayName : 'Picture'
						}
					]
				}
			],
		},
		{
			displayName : 'Row'			
		}
	]
}