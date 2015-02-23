var Styles = require('_styles');
var Addons = require('_styles:addons');

module.exports = {
  'font'       : Styles.Font,
  'background' : Addons.StyleWithOptions(Styles.Background, {
      properties : ['backgroundRepeat', 'backgroundSize', 'backgroundImage']
  }),
  'boxModel'   : Addons.StyleWithOptions(Styles.BoxModel, {
      properties : ['size', 'translate']
  }),

  'border' : Addons.StackProperties(Styles.Border, {
  		defines : ['border-left', 'border-right','border-top', 'border-bottom'],
  		label 	: 'Border'
  	})
}