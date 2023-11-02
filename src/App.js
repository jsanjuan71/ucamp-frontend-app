import { useEffect, useState, useRef } from 'react';
import './App.css';
import Button from './components/Button/button';
import VideoList from './components/Video/videoList';
import Forms from './components/Forms/forms';
import axios from 'axios';


function App() {

  const [videos, setVideos] = useState([])
  const [categories, setCategories] = useState([])

  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [videoCategory, setVideoCategory] = useState('-')

  const bottomRef = useRef(null)

  const clickHandlerSignIn = () => {
    alert('Sign in');
  }

  const clickHandlerAddToCart = () => {

    if (videoTitle === '' || videoDescription === '' || videoCategory === '-') {
      alert('Se requieren todos los campos para agregar un video')
      return
    }

    videos.push({
      title: videoTitle,
      description: videoDescription,
      category: videoCategory,
      thumbnail: '/images/logo192.png',
      url: 'https://www.youtube.com/watch?v=1Ne1hqOXKKI'
    })
    
    setVideos([...videos])

    setVideoTitle('')
    setVideoDescription('')
    setVideoCategory('-')

    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    } , 250)
  }

  useEffect(() => {
    axios.get("http://localhost:3000/videos")
      .then(response => {
          setVideos(response.data.message)
      })
    
    axios.get("http://localhost:3000/tools/categories")
      .then(response => {
          setCategories(response.data.message)
      })
    
  },[])
  
  return (
    <div className="App">
      <h1>Hola react</h1>

      <Button text="Modo oscuro" />

      <Button text="Modo dia"  whiteBg={true} />

      <div className='formsContainer'>
        <Forms headerText={"Agregar video"} submitText={"Guardar"} submitHandler={clickHandlerAddToCart}>
          <input value={videoTitle} onChange={ ({target}) => setVideoTitle(target.value)} type="text" placeholder='Titulo del video' ></input>
          <input value={videoDescription} onChange={ ({target}) => setVideoDescription(target.value) } type="text" placeholder='Descripcion del video' ></input>
          <select value={videoCategory} onChange={ ({target}) => setVideoCategory(target.value) }  >
            <option key={0} value="-" selected>Selecciona una categoria</option>
            {
              categories.map((category, index) => {
                return <option key={index+1} value={category.value}>{category.label}</option>
              })
            }
          </select>
        </Forms>

        <Forms headerText={"Sign in"} submitText={"Ingresar"} whiteBg={true}>
          <input type="email" placeholder='correo' ></input>
          <input type="password" placeholder='contraseña' ></input>
        </Forms>
      </div>

      <VideoList videos={videos} emptyHeading={"No hay videos"} /> 
      <div ref={bottomRef}></div>
    </div>
  );
}

export default App;
