import React, { Fragment } from 'react'
import isSolid from 'is-solid'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { DataProps } from '../constants/interfaces'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const CurrencyWrapper = ({ rates }: DataProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      {isSolid(rates) &&
        Object.keys(rates).map((itemKey, index) => (
          <Fragment key={index}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemText primary={itemKey} />
                <ListItemText
                  primary={rates[itemKey]}
                  style={{
                    textAlign: 'right',
                  }}
                />
              </ListItem>
            </List>
            <Divider />
          </Fragment>
        ))}
    </Paper>
  )
}

CurrencyWrapper.defaultProps = {
  rates: {},
}

export default CurrencyWrapper
