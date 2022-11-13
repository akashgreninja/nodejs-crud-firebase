
import './App.css';
import {storage} from './frontendconfig'
import {useState} from 'react'
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";

 function App() {
  const [image, setimage] = useState()
  const [imageList, setimageList] = useState()
  // useEffect(() => {
  //   listAll
  // }, [])
  
  const handleChange=(e)=>{

    if(e.target.files[0]){
      setimage(e.target.files[0])


    }
  }
  // https://firebase.google.com/docs/storage/web/upload-files?hl=en&authuser=0#web-version-9
  const handleUpload=()=>{
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(storageRef).then((url)=>{
        setimageList(url)
      })
    });

  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>UPLOAD</button>

      <img src={imageList} alt="" />

    </div>
  );
}

export default App;
