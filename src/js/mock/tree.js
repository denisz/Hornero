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
		},
		{
			displayName : 'Row',
			id : 3,
			subviews : [
				{
					displayName : 'Col',
					id : 4,
					md : 6,
					xs : 6
				},
				{
					displayName : 'Col',
					id : 5,
					md : 6,
					xs : 6
				}
			]
		}

	]
}