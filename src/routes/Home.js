import React from 'react'
import { Grid } from '@material-ui/core'

import TaskList from '../components/home/TaskList'
import EventList from '../components/home/EventList'
import TaskCountReport from '../components/home/TaskCountReport'

const Home = props => {
  return (
    <Grid container spacing={32}>
      <Grid item sm={12} md={6}>
        <EventList />
      </Grid>

      <Grid item container spacing={16} sm={12} md={6}>
        <Grid item xs={12}>
          <TaskCountReport />
        </Grid>

        <Grid item xs={12}>
          <TaskList />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
