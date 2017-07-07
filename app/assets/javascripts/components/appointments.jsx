var Appointments = React.createClass({
  // managing the state of the form and the list in this file, since this is the parent that houses them
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: "Team standup",
      input_appt_time: "Tomorrow at 9am"
    }
  },

  render: function() {
    return (
        <div>
          <AppointmentForm input_title={this.state.input_title} input_appt_time={this.state.input_appt_time}/>
          <AppointmentsList appointments={this.state.appointments} />
        </div>
    )
  }
})
