import React from 'react'
import {
  Card,
  List,
  ListSubheader,
  ListItem,
  ListItemText
} from '@material-ui/core'

import moment from 'moment'

import _tasks from '../../mock-data/tasks.json'

const TaskList = () => {
  const tasks = _tasks

  return (
    <Card>
      <List
        subheader={<ListSubheader>Görevlerim ({tasks.length})</ListSubheader>}
      >
        {tasks.map(task => (
          <ListItem key={task._id} button>
            <ListItemText
              primary={task.title}
              secondary={moment(task.endDate).format('D MMM')}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default TaskList
