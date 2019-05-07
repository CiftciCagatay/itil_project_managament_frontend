import React from 'react'
import { Chart } from 'react-google-charts'
import { Card } from '@material-ui/core'

import moment from 'moment'

import _tasks from '../mock-data/tasks.json'

const GanttChart = () => {
  return (
    <Card style={{ padding: 8 }}>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="Gantt"
        loader={<div>Loading Gantt Chart</div>}
        data={[
          [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' }
          ],
          ..._tasks.map(task => [
            task._id,
            task.title,
            moment(task.startDate).toDate(),
            moment(task.endDate).toDate(),
            null,
            task.progress,
            null
          ])
        ]}
      />
    </Card>
  )
}

export default GanttChart
