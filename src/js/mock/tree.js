module.exports = {
	displayName : 'Empty',
	text 		: 'test Mock',
	key 		: 1,
	styles 		: {
		backgroundColor : '#A00000'
	},
	subviews 	: [
		{
			displayName : 'Empty',
			key 		: 2,
			text 		: 'test2 Mock',
			styles 		: {
				border : '1px solid red',
				marginTop : 10,
				backgroundColor : 'white'
			},
			subviews : [
				{	
					displayName : 'Empty',
					key 		: 5,
					text 		: 'test5 Mock',
					styles 		: {
						border		 	: '1px solid violet',
						marginTop 		: 40,
						marginBottom 	: 40
					},	
					subviews : [
						{	
							displayName : 'Empty',
							key 		: 6,
							text 		: 'test6 Mock',
							styles 		: {
								border		 	: '1px solid green',
								marginTop 		: 20,
								marginBottom 	: 20
							},	
						}				
					]
				}				
			]
		},
		{
			displayName : 'Empty',
			key 		: 3,
			text 		: 'test3 Mock',
			styles 		: {
				border : '1px solid green'
			}
		},
		{
			displayName : 'Empty',
			key 		: 4,
			text 		: 'test4 Mock',
			styles 		: {
				border : '1px solid blue',
				marginTop : 30
			}
		}
	]
}