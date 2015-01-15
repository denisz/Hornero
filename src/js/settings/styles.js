var Types = require('../ui/editor/fields');

module.exports = {
  'font'       : Types.ENUM({
    fontSize      : Types.RANGE(1, 100),
    fontFamily    : Types.SELECT('Arial', 'Georgia'),
    color         : Types.COLOR_PICKER
  }),
  'background' : Types.ENUM({
    backgroundImage     : Types.IMAGE,
    backgroundPosition  : Types.POSITION,
    backgroundRepeat    : Types.SELECT('repeat', 'no-repeat', 'repeat-x', 'repeat-y' ),
    backgroundColor     : Types.COLOR_PICKER
  }),

  'boxModel' : Types.BOX_MODEL({
      width   : true,
      height  : true,
      padding : true,
      margin  : true
  })

}