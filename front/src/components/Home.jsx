import { useNavigate } from "react-router";
import React, { useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import request from '../data/api';
import { useSelector } from 'react-redux';
import { NoticiasServices } from "../services/NoticiasServices";
import CardNew from "./CardNew";
import { Container } from "@material-ui/core";
import Grid from '@mui/material/Grid';


export default function Home() {

    const navigation = useNavigate();
    const [noticias, setNoticias] = useState([]);
  
    const user = useSelector(state => state.AuthReducer.user)

    const clickLogOut = () => {
        navigation('/login');
    }

  const traerDatos = useCallback(
    async () => {
      if (!user) return
      
      console.log(user)

      let res = await NoticiasServices(request).get();
      res = res.data.sort();
      const datosNoticias = res.map((noticia) => {
        return {...noticia, value: noticia.id, label: noticia.nombre}
      })
      setNoticias(datosNoticias);
    },
    [user],
  )

  useEffect(() => {
    traerDatos();
  }, [traerDatos]);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            News {noticias.length}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <CardNew sx={{ m: 10 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardNew sx={{ m: 10 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardNew sx={{ m: 10 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardNew sx={{ m: 10 }} />
            </Grid>
          </Grid>

        </Paper>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton onClick={clickLogOut} color="inherit">
              <LockIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}
