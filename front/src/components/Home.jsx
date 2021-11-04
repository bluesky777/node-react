import { useNavigate } from "react-router";
import React, { useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import request from '../data/api';
import { useSelector } from 'react-redux';
import { NoticiasServices } from "../services/NoticiasServices";
import CardNew from "./CardNew";
import { Container } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import InfiniteScroll from 'react-infinite-scroll-component';



export default function Home() {

  const navigation = useNavigate();
  const [noticias, setNoticias] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const user = useSelector(state => state.AuthReducer.user)

  const clickLogOut = () => {
    navigation('/login');
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const clickRemoveAll = async (e) => {
    await NoticiasServices(request).remove(query, 0, 3);
    window.location.reload(false);
  }

  const traerDatos = useCallback(
    async () => {
      //if (!user) return
      console.log({ query })
      let res = await NoticiasServices(request).get(query, page, 3);
      res = res.data.noticias;

      const _noticias = noticias.concat(res.docs)

      if (_noticias.length == 0 && query.length == 0) {
        await NoticiasServices(request).create();
        alert('Hemos creado noticias')
        window.location.reload(false);
      }

      // const datosNoticias = _noticias.map((noticia) => {
      //   return { ...noticia, value: noticia.id, label: noticia.nombre }
      // })
      setNoticias(_noticias);
    },
    [page],
  )

  const fetchPage = async () => {
    const nextPage = page + 1
    setPage(page + 1)
  }

  useEffect(() => {
    console.log({ query })
    NoticiasServices(request).get(query, 1, 3)
      .then((res) => {
        setNoticias(res.data.noticias.docs);
        setPage(1)
      });

  }, [query]);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper square sx={{ pb: '50px' }}>
          <TextField style={{ marginTop: '20px' }} onChange={handleChange} placeholder='Enter username' fullWidth required variant="standard" />
          <InfiniteScroll
            dataLength={noticias.length} //This is important field to render the next data
            next={fetchPage}
            hasMore={true}
            loader={<h4>Cargando...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>No hay más noticias</b>
              </p>
            }
          >
            <Grid container spacing={4}>


              {noticias.map((noticia) => (
                <Grid key={noticia._id} item xs={12} sm={6} md={4} lg={3}>
                  <CardNew noticia={noticia} />
                </Grid>
              ))}




            </Grid></InfiniteScroll>

        </Paper>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={clickRemoveAll}>
              <DeleteForeverIcon />
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
