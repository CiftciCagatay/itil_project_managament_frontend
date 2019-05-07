import React, { useState } from 'react'
import { Fab, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TaskFormDialog from './TaskFormDialog';

const CreateTaskFabButton = props => {
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <React.Fragment>
      <Tooltip title="Görev Oluştur">
        <Fab
          color="primary"
          style={{ position: 'absolute', bottom: 12, right: 12 }}
          onClick={() => setModalOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <TaskFormDialog
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        formProps={{
          mode: 'create',
          projectId: props.projectId
        }}
      />
    </React.Fragment>
  )
}

export default CreateTaskFabButton
