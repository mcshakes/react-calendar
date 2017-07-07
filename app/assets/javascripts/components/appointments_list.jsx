var AppointmentsList = React.createClass({
  render: function() {
    {this.props.appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment}/>
      )
    })}
  }
})
