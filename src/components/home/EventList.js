import React from 'react'
import UserAvatar from '../UserAvatar'
import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader
} from '@material-ui/core'

const EventList = props => {
  const events = [
    {
      _id: '1234',
      detail: 'Şu etiketleri ekledi',
      date: new Date(),
      user: {
        _id: '1234',
        name: 'Çağatay Çiftçi'
      }
    },
    {
      _id: '1234',
      detail: 'Görevi tamamlandı olarak işaretledi',
      date: new Date(),
      user: {
        _id: '1234',
        name: 'Çağatay Çiftçi'
      }
    }
  ]
  return (
    <Card>
      <List subheader={<ListSubheader>Haber Akışı</ListSubheader>}>
        {events.map(event => (
          <ListItem key={event._id} button>
            <ListItemAvatar>
              <UserAvatar user={event.user} />
            </ListItemAvatar>

            <ListItemText
              primary={event.detail}
              secondary={event.date.toString()}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default EventList
