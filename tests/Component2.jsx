module.exports = function() {
  /**
   *
   *
   *
   */
  return React.createClass({
    propTypes: {
      prop1: React.PropTypes.arrayOf(React.PropTypes.shape({
        prop2: React.PropTypes.number
      }))
    },
    render() {
      return <div></div>;
    }
  });
};