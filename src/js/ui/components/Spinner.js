var React = require('react/addons');

module.exports = React.createClass({
  displayName: "SpinKit",

  getDefaultProps: function() {
    return {
      cssRequire  : false,
      spinnerName : 'three-bounce',
      fadeIn      : false
    };
  },

  propTypes: {
    cssRequire  : React.PropTypes.bool.isRequired,
    spinnerName : React.PropTypes.string.isRequired,
    fadeIn      : React.PropTypes.bool.isRequired
  },

  render: function() {
    var classes, cx;
    cx = React.addons.classSet;
    
    classes = cx({
      spinner: true,
      "inline-block" : true,
      "fade-in": this.props.fadeIn
    });
    
    switch (this.props.spinnerName) {
      case "three-bounce":
    
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " three-bounce"
        }, React.DOM.div({
          "className": "bounce1"
        }), React.DOM.div({
          "className": "bounce2"
        }), React.DOM.div({
          "className": "bounce3"
        })));
      case "double-bounce":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " double-bounce"
        }, React.DOM.div({
          "className": "double-bounce1"
        }), React.DOM.div({
          "className": "double-bounce2"
        })));
      case "rotating-plane":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " rotating-plane"
        }));
      case "wave":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " wave"
        }, React.DOM.div({
          "className": "rect1"
        }), React.DOM.div({
          "className": "rect2"
        }), React.DOM.div({
          "className": "rect3"
        }), React.DOM.div({
          "className": "rect4"
        }), React.DOM.div({
          "className": "rect5"
        })));
      case "wandering-cubes":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " wandering-cubes"
        }, React.DOM.div({
          "className": "cube1"
        }), React.DOM.div({
          "className": "cube2"
        })));
      case "pulse":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " pulse"
        }));
      case "chasing-dots":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " chasing-dots"
        }, React.DOM.div({
          "className": "dot1"
        }), React.DOM.div({
          "className": "dot2"
        })));
      case "circle":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " circle-wrapper"
        }, React.DOM.div({
          "className": "circle1 circle"
        }), React.DOM.div({
          "className": "circle2 circle"
        }), React.DOM.div({
          "className": "circle3 circle"
        }), React.DOM.div({
          "className": "circle4 circle"
        }), React.DOM.div({
          "className": "circle5 circle"
        }), React.DOM.div({
          "className": "circle6 circle"
        }), React.DOM.div({
          "className": "circle7 circle"
        }), React.DOM.div({
          "className": "circle8 circle"
        }), React.DOM.div({
          "className": "circle9 circle"
        }), React.DOM.div({
          "className": "circle10 circle"
        }), React.DOM.div({
          "className": "circle11 circle"
        }), React.DOM.div({
          "className": "circle12 circle"
        })));
      case "cube-grid":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " cube-grid"
        }, React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        }), React.DOM.div({
          "className": "cube"
        })));
      case "wordpress":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " wordpress"
        }, React.DOM.span({
          "className": "inner-circle"
        })));
      case "fading-circle":
        return this.transferPropsTo(React.DOM.div({
          "className": classes + " fading-circle"
        }, React.DOM.div({
          "className": "circle1 circle"
        }), React.DOM.div({
          "className": "circle2 circle"
        }), React.DOM.div({
          "className": "circle3 circle"
        }), React.DOM.div({
          "className": "circle4 circle"
        }), React.DOM.div({
          "className": "circle5 circle"
        }), React.DOM.div({
          "className": "circle6 circle"
        }), React.DOM.div({
          "className": "circle7 circle"
        }), React.DOM.div({
          "className": "circle8 circle"
        }), React.DOM.div({
          "className": "circle9 circle"
        }), React.DOM.div({
          "className": "circle10 circle"
        }), React.DOM.div({
          "className": "circle11 circle"
        }), React.DOM.div({
          "className": "circle12 circle"
        })));
    }
  }
});
