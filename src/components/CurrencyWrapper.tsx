import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import isSolid from 'is-solid'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

interface CurrencyWrapperProps {
  general: object
  data: object
  rates: object
}

// TODO remove any
const CurrencyWrapper = ({ rates }: any) => {
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

// TODO remove type any
const mapStateToProps = ({ general }: any) => ({
  data: general.data,
})
export default connect(mapStateToProps)(CurrencyWrapper)
