function App(){
  const users = [{name:"Nagarajan",age:36,email:"nagapetrosa@gmail.com"},
  {name:"Swathimeenal",age:29,email:"swathimeenal1994@gmail.com"},
  {name:"VeluNachiyar",age:1,email:"NIL"}]
  //JSX -Javascript XML
  return<>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>age</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((e,i)=>{
        return<>
        <tr>
        <td>{i+1}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.email}</td>

        </tr>
        </>
      })}
    </tbody>
  </table>

  </>

}

export default App
