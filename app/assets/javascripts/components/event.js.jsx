var Event = React.createClass({
  propTypes: {
    name: React.propTypes.string,
    event_date: React.propTypes.string,
    place: React.propTypes.string,
    description: React.propTypes.string
  },
  render: function(){
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
      </tr>
    )
  }
});
