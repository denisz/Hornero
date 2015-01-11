module.exports = {
	displayName : 'Empty',
	text 		: 'test Mock',
	id 			: 1,
	styles 		: {
		backgroundColor : '#A00000'
	},
	subviews 	: [
		{
			displayName : 'Empty',
			id 		: 2,
			styles 		: {
				border  		: '1px solid red',
				marginTop 		: 10,
				color  			: 'black',
				fontFamily 		: 'Trebushet',
				fontSize 		: 12,
				fontWeight 		: 'bold',
				backgroundColor : 'white'
			},
			subviews : [
				{	
					displayName : 'Empty',
					id 		: 5,
					text 		: 'test5 Mock',
					styles 		: {
						border		 	: '1px solid violet',
						marginTop 		: 40,
						marginBottom 	: 40
					},	
					subviews : [
						{
							displayName : 'Empty',
							id 	: 7,
							styles : {
								textAlign : 'center'
							}
						},
						{	
							displayName : 'Empty',
							id 		: 6,
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
			id 		: 3,
			text 		: 'test3 Mock',
			styles 		: {
				border : '1px solid green'
			}
		},
		{
			displayName : 'Empty',
			id 		: 4,
			text 		: 'test4 Mock',
			styles 		: {
				border : '1px solid blue',
				marginTop : 30
			}
		}
	]
}