import React, { Component } from 'react'
import EventsTable from '../events/events-table'
import SelectedEvents from '../events/selected-events'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectedEvents />
        <EventsTable />
      </div>
    )
  }
}

export default EventsPage
