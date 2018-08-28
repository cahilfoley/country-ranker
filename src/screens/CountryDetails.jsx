import React from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

import criteria from '../data/criteria'

export default ({ back, country }) => (
  <div style={{ padding: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 8 }}>
      <IconButton onClick={back} style={{ marginRight: 16 }}>
        <ArrowLeft />
      </IconButton>
      <Typography variant="display1">{country.name}</Typography>
    </div>
    <Paper>
      <Table>
        <TableBody>
          {criteria.map(item => (
            <TableRow key={item.label}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{country[item.label]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
)
