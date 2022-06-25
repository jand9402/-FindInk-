import React, { useState, useEffect } from 'react'
import { Drawer, Paper, IconButton, Divider } from '@material-ui/core'
import { useStyles } from '../../../style/style'
import { Menu as MenuIcon } from '@material-ui/icons'
import Logo from '../icon.jpg'

const MainMenu = ({ open, setOpen }) => {
    const classes = useStyles()
    const [isAuth, setIsAuth] = useState([])
    const init = () => {
        if (!localStorage.getItem("User")) {
            setIsAuth([])
        } else {
            const auth = JSON.parse(localStorage.getItem('User'))
            if (auth.Rfrnc > 0) {
                setIsAuth(auth.Rfrnc)
            } else {
                setIsAuth([])
            }
        }
    }
    useEffect(init, [])

    return (
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
            <Paper className={classes.paper} elevation={0}>
                <div className={classes.div}>
                    <IconButton edge='start' color='inherit' onClick={() => setOpen(false)}>
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} alt='...' className={classes.logo} />
                </div>
                <Divider />
                <ul>
                    <li><a href={"/profile/"+isAuth}>Perfil</a></li>
                    <li><a href={"/contacto/" + isAuth}>Contacto</a></li>
                    <li><a href={"/list-contact/"+isAuth}>Ver mis mensajes de contacto</a></li>
                </ul>
            </Paper>
        </Drawer>
    )
}

export default MainMenu
