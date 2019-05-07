import React from 'react'
import { TextField, Button } from '@material-ui/core'

const TaskForm = props => {
  const { mode, handleClose } = props

  const onSubmit = () => {
    // Make API Request

    // Close form modal
    handleClose()
  }

  return (
    <div>
      <TextField label="Başlık" fullWidth />
      <TextField label="Açıklama" multiline rows={3} fullWidth />

      <TextField
        label="Başlangıç Tarihi"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />

      <TextField
        label="Bitiş Tarihi"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />

      <TextField label="Etiketler" fullWidth />

      <TextField label="Görevliler" fullWidth />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '8px'
        }}
      >
        <Button onClick={() => handleClose()}>Vazgeç</Button>

        <Button color="primary" onClick={onSubmit}>
          {mode === 'create' ? 'Oluştur' : 'Güncelle'}
        </Button>
      </div>
    </div>
  )
}

export default TaskForm
