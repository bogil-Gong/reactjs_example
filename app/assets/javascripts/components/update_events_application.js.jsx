handleSearch: function (events) {
  this.setState({ events: events });
},
render: function () {
  return(
    <div className="container">
      <div className="jumbotron">
        <h1>ReactJS Tutorial</h1>
        <p>By bogil Gong</p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <EventTable events={this.state.events}/>
        </div>
      </div>
    </div>
  )
}
