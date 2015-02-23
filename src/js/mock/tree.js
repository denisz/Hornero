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
				border  		: '1px solid #ff0000',
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
					subviews : [	
						{
							displayName : 'Text',
							styles 		: {
								border  		: '1px solid #ff0000',
								backgroundColor : 'white'
							}
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