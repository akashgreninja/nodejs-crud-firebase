
// https://www.youtube.com/watch?v=YPsftzOURLw

const express=require('express')
var cors = require('cors')
const User=require('./config')
const app=express()
app.use(cors())
PORT=5223
app.use(express.json())


app.post("/create",async(req,res)=>{
    const data=req.body
    await User.set(data)
    res.send({msg:"sucess"})
})

app.get("/get",async(req,res)=>{
    const snapshot = await User.get();
    const id= snapshot.docs.map((doc) => 
        doc.id
      );
   const list= snapshot.docs.map((doc) => ({id:doc.id,...doc.data()})
   
   )
        
      
      res.send(list)
})

app.post("/update",async(req,res)=>{
  const id=req.body.id
  delete req.body.id
  await User.doc(id).update(req.body)
  res.send({msg:"done"})
})

app.post("/delete",async(req,res)=>{
    const id=req.body.id
    
    await User.doc(id).delete()
    res.send({msg:"deleted"})
  })
  



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT} `)
})