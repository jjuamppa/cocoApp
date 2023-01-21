import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'


function App() {

  const [books, setbooks] = useState([]);
  const [booksForPost, setbooksForPost] = useState({});

  useEffect(() => {
    dateBooks()
  }, [])

  console.log(books);

  const dateBooks = async () => {
    const dataResponse = await fetch('https://run.mocky.io/v3/9e567c8c-ce7d-436b-8826-0dda9cd3e52d')
    const datos = await dataResponse?.json()
    setbooks(datos?.data)
  }

  // PARA GUARDAR UN NUEVO LIBRO
  const handleAddBook = async () => {

    console.log('crear un nuevo libro'); //borrar

    // const dataResponse = await fetch('******* tu endpoint POST ********', {
    //   method: 'POST',
    //   body: JSON.stringify(booksForPost)
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(JSON.stringify(response)))
  }

  // PARA EDITAR UN LIBRO

  const handleEdit = async (id) => {

    console.log('voy a editar el libro con id: ' + id); //borrar

    // const dataResponse = await fetch('******* tu endpoint PUT ********/${id}', {
    //   method: 'PUT',
    //   body: JSON.stringify(booksForPost)
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(JSON.stringify(response)))
  }

  // PARA ELIMINAR UN LIBRO
  const handleDelete = async (id) => {

    console.log('voy a eliminar el libro con id: ' + id); //borrar

    // const dataResponse = await fetch('******* tu endpoint PUT ********/${id}', {
    //   method: 'DELETE'
    // }
    // .then(() => setState({ status: 'Delete successful' }));
}


return (
  <>

    <Container>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h1'>
          Books
        </Typography>
      </Grid>
      <Grid sx={{ m: 2, display: 'block', textAlign: 'center' }}>
        <Typography m={1} variant='h5'>
          Agregar Libro
        </Typography>
        <Button
          variant='contained'
          onClick={handleAddBook}
        >Add</Button>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {
          books.map(book =>
            <Card
              key={book.id}
            >
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: 'center' }}>
                  {book.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autor: {book.autor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: {book.precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fecha de Lanzamiento: {book.fechaLanzamiento}
                </Typography>
              </CardContent>
              <CardActions  >
                <Button fullWidth variant="outlined" onClick={() => handleEdit(book.id)} >Edit</Button>
                <Button fullWidth variant="outlined" onClick={() => handleDelete(book.id)} >Delete</Button>
              </CardActions>
            </Card>
          )
        }
      </Grid>
    </Container>

  </>
)
}

export default App
