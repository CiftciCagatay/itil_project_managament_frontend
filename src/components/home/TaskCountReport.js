import React from 'react'
import {
  Card,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'

import {
  PriorityHigh as PriorityHighIcon,
  List as ListIcon
} from '@material-ui/icons'

const TaskCountReport = props => {
  const data = {
    critical: 2,
    high: 5,
    normal: 10,
    done: 12
  }

  return (
    <Card>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography style={{ marginLeft: 16 }}>Önceliklerine Göre Sorunlar</Typography>
        <IconButton>
          <ListIcon />
        </IconButton>
      </CardActions>

      <List>
        <ListItem>
          <ListItemAvatar>
            <PriorityHighIcon />
          </ListItemAvatar>

          <ListItemText primary={data.critical} secondary="Kritik" />
        </ListItem>
      </List>
    </Card>
  )
}

export default TaskCountReport
