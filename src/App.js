import logo from './logo.svg';
import './App.css';
import Button from './components/Button/button';
import { useState } from 'react';
import VideoList from './components/Video/videoList';
import Forms from './components/Forms/forms';

function App() {

  const [videos, setVideos] = useState([])

  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')

  const clickHandlerSignIn = () => {
    alert('Sign in');
  }

  const clickHandlerAddToCart = () => {

    videos.push({
      title: videoTitle,
      description: videoDescription,
      thumbnail: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=1Ne1hqOXKKI'

    })
    
    setVideos([...videos])

    setVideoTitle('')
    setVideoDescription('')
  }
  
  return (
    <div className="App">
      <h1>Hola react</h1>

      <Button text="Sign in" clickHandler={clickHandlerSignIn} />

      <Button text="Add to cart" clickHandler={clickHandlerAddToCart}  whiteBg={true} />

      <Forms headerText={"Agregar video"} submitText={"Guardar"} submitHandler={clickHandlerAddToCart}>
        <input value={videoTitle} onChange={ ({target}) => setVideoTitle(target.value)} type="text" placeholder='Titulo del video' ></input>
        <br />
        <input value={videoDescription} onChange={ ({target}) => setVideoDescription(target.value) } type="text" placeholder='Descripcion del video' ></input>
      </Forms>

      <Forms headerText={"Sign in"} submitText={"Ingresar"} whiteBg={true}>
        <input type="email" placeholder='correo' ></input>
        <input type="password" placeholder='contraseña' ></input>
      </Forms>

      <VideoList videos={videos} emptyHeading={"No hay videos"} /> 
    </div>
  );
}

export default App;
