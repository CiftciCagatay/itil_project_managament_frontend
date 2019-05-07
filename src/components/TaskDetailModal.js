import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  TextField,
  Button
} from '@material-ui/core'

import UserAvatar from './UserAvatar'
import Label from './Label'

import moment from 'moment'
import { timeDiff } from '../utils'

import _tasks from '../mock-data/tasks.json'
import _events from '../mock-data/events.json'

const TaskDetailModal = props => {
  const { open, handleClose } = props
  const task = _tasks[0]
  const events = _events

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={true}>
      <DialogTitle>{task.title}</DialogTitle>

      <DialogContent>
        <Grid container spacing={8}>
          <Grid item sm={12} md={4}>
            <List>
              <ListItem>
                <ListItemText primary={task.detail} secondary="Açıklama" />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={moment(task.startDate).format('D MMM')}
                  secondary="Başlangıç Tarihi"
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={moment(task.endDate).format('D MMM')}
                  secondary="Bitiş Tarihi"
                />
              </ListItem>

              <List>
                <ListItem button>
                  <ListItemText
                    primary={
                      <div style={{ display: 'flex' }}>
                        {task.labels.map(label => (
                          <Label key={label._id} label={label} style={{ marginLeft: '2px' }} />
                        ))}
                      </div>
                    }
                    secondary="Etiketler"
                  />
                </ListItem>

                <ListItem button>
                  <ListItemText
                    primary={
                      <div style={{ display: 'flex' }}>
                        {task.users.map(user => (
                          <UserAvatar
                            key={user._id}
                            user={user}
                            style={{
                              marginLeft: 2,
                              height: '30px',
                              width: '30px',
                              fontSize: 14
                            }}
                          />
                        ))}
                      </div>
                    }
                    secondary="Görevliler"
                  />
                </ListItem>
              </List>
            </List>
          </Grid>

          <Grid item sm={12} md={8}>
            <div>
              <TextField
                label="Durum"
                placeholder="Son durum hakkında güncelleme paylaş"
                multiline
                rows={3}
                fullWidth
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '2px'
                }}
              >
                <Button>Paylaş</Button>
              </div>
            </div>

            <List
              style={{ marginTop: '2px' }}
              subheader={
                <ListSubheader disableGutters>Güncellemeler</ListSubheader>
              }
              disablePadding
            >
              {events.map(event => (
                <ListItem key={event._id} disableGutters>
                  <ListItemAvatar>
                    <UserAvatar user={event.user} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={event.detail}
                    secondary={timeDiff(event.date)}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDetailModal
