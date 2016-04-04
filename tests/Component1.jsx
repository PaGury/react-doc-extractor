module.exports = function() {
  /**
   * react
   * coucou copain
   * salut a tous
   * bonjour lolllll
   */
  return React.createClass({
    propTypes: {
      /**
       * toto prop
       * prop 2
       * this is lolilol
       * rire
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