import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const PurchaseAlert = ({ idCompra }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Felicitaciones !</AlertTitle>
        Su compra se realizó con éxito. <strong>Su ID de compra es: {idCompra}</strong>
      </Alert>
    </Stack>
  )
}

export default PurchaseAlert