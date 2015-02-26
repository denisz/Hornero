var Styles = require('_styles');
var Addons = require('_styles:addons');

module.exports = {
  'font'       : Addons.StyleWithOptions(Styles.Font, {
    properties : ['fontSize', 'color', 'fontFamily', 'textAlign', 'fontWeight', 'lineHeight', 'letterSpacing']
  }),
  'background' : Addons.WithHeader(Styles.Background, {
      properties  : ['backgroundRepeat', 'backgroundSize', 'backgroundImage', 'backgroundBlendMode'],
      header      : Addons.StyleWithOptions(Styles.HeaderSimple, { label : 'Fill'})
  }),
  'boxModel'   : Addons.StyleWithOptions(Styles.BoxModel, {
      properties : ['size', 'translate']
  }),
  'opacity' : Addons.StyleWithOptions(Styles.Range, {
    min       : 0,
    max       : 1,
    step      : 0.05,
    property  : 'opacity',
    label     : 'Opacity'
  }),
  'border' : Addons.WithHeader(Styles.Border, {
  		header      : Addons.StyleWithOptions(Styles.HeaderSimple, { label : 'Border'})
  	})
}