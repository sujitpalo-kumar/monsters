var user = [{
  fname: "sujit",
  lname: "palo"
},{
  fname: "raj",
  lname: "kumar"
}]

const App=()=>{
  let a=10
  let b=20
  return (
      
      <div>
          <h1>
               Monster App
          </h1>
          <p>Building Crud App</p>
          <p1>some calculation:{a+b}</p1>
          {
           user.map((element) => {
           return (
               <div>
                    <p>{element.fname}</p>
                    <p>{element.lname}</p>
               </div>)
        })
     
       } </div>
  )
}

export default App