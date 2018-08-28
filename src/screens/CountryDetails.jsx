import React from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import criteria from '../data/criteria'

export default ({ country }) => (
  <div style={{ padding: 24 }}>
    <Typography variant="display1" gutterBottom>
      {country.name}
    </Typography>
    <Paper>
      <Table>
        <TableBody>
          {criteria.map(item => (
            <TableRow>
              <TableCell>{item.label}</TableCell>
              <TableCell>{country[item.label]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
)
