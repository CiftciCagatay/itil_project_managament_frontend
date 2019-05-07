import React, { useState } from 'react'

import DnD from '../components/task-dnd/DnD'
import GanttChart from '../components/GanttChart'

import {
  Tabs,
  Tab,
  AppBar,
  Grid,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader
} from '@material-ui/core'

import UserAvatar from '../components/UserAvatar'
import TaskDetailModal from '../components/TaskDetailModal'
import CreateTaskFabButton from '../components/task-form/CreateTaskFabButton'

import _projects from '../mock-data/projects.json'

const ProjectDetailsTab = props => {
  const project = _projects[0]

  return (
    <Grid container spacing={16}>
      <Grid xs={12} md={6} item>
        <Card>
          <List>
            <ListItem>
              <ListItemText primary={project.title} secondary="Projenin Adı" />
            </ListItem>

            <ListItem>
              <ListItemText primary={project.detail} secondary="Açıklama" />
            </ListItem>

            <ListItem>
              <ListItemText primary={project.aim} secondary="Projenin Amacı" />
            </ListItem>
          </List>
        </Card>
      </Grid>

      <Grid xs={12} md={6} item>
        <Card>
          <List subheader={<ListSubheader>Üyeler</ListSubheader>}>
            <ListItem>
              <ListItemAvatar>
                <UserAvatar user={project.manager} />
              </ListItemAvatar>

              <ListItemText
                primary={project.manager.name}
                secondary="Proje Yöneticisi"
              />
            </ListItem>

            {project.users.map(user => (
              <ListItem key={user._id}>
                <ListItemAvatar>
                  <UserAvatar user={user} />
                </ListItemAvatar>

                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  )
}

const ProjectDetails = props => {
  let [tabValue, setTabValue] = useState(0)
  let [taskDetailModalOpen, setTaskDetailModalOpen] = useState(false)

  //const { id } = props.match.params

  return (
    <React.Fragment>
      <AppBar position="static">
        <Tabs value={tabValue} onChange={(_, value) => setTabValue(value)}>
          <Tab label="Detaylar" />
          <Tab label="Pano" />
          <Tab label="Gantt Çizelgesi" />
        </Tabs>
      </AppBar>

      <div style={{ height: '16px' }} />

      {tabValue === 0 && <ProjectDetailsTab />}
      {tabValue === 1 && (
        <DnD openTaskDetail={() => setTaskDetailModalOpen(true)} />
      )}
      {tabValue === 2 && (
        <GanttChart openTaskDetail={() => setTaskDetailModalOpen(true)} />
      )}

      <TaskDetailModal
        open={taskDetailModalOpen}
        handleClose={() => setTaskDetailModalOpen(false)}
      />

      <CreateTaskFabButton />
    </React.Fragment>
  )
}

export default ProjectDetails
