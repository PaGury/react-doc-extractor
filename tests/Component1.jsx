module.exports = function() {
  /**
   * react component
   * line1
   * line2
   * line3
   */
  return React.createClass({
    propTypes: {
      /**
       * prop1
       * line1
       * line2
       * line3
       */
      prop1: React.PropTypes.arrayOf(React.PropTypes.shape({
        prop2: React.PropTypes.number
      }))
    },
    render() {
      return <div></div>;
    }
  });
};