import React from 'react'

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu as MenuIcon, ExitToApp as LogoutIcon } from '@material-ui/icons'

import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'

const drawerWidth = 240
const title = 'ITIL Project'

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  }

  projects = [
    {
      _id: '1234',
      name: 'ITIL Projesi'
    },
    {
      _id: '4545',
      name: 'Project: Mars'
    },
    {
      _id: '4321',
      name: 'Çaylar!!! Mobile App'
    }
  ]

  user = {
    _id: '1234',
    name: 'Çağatay Çiftçi'
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes, theme, routes, children } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />

        <List>
          <ListItem>
            <ListItemAvatar>
              <UserAvatar user={this.user} />
            </ListItemAvatar>

            <ListItemText primary={this.user.name} />

            <ListItemSecondaryAction>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        
        <Divider />

        <List>
          {routes.map(({ name, path, icon }) => (
            <Link to={path} key={name}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Projeler</ListSubheader>}>
          {this.projects.map(({ _id, name }) => (
            <Link to={`/projects/${_id}`} key={_id}>
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
