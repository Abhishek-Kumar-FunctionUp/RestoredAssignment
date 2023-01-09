import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import home from "./Home.module.css"

function Home () {
  const[list , setList] = useState([])
  const[fetching , setFetching] = useState(false)
async function fetchUsers(){
  if(fetching){
    alert("DATA FETCH IN PROGRESS WAIT")
  }
  setFetching(true)
  console.log("click")
  for(let i = 0 ; i < 50 ; i++){
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()
  list.push(data.results[0])
  setList(list)
  
}
console.log(list)
localStorage.setItem("userList" , JSON.stringify(list))
alert("done")

}

function deleteUsers(){
  alert("USER DETAILS WILL BE DELETED")
  localStorage.removeItem('userList');
}


  return (
    <>
    <div className={home.main}>
    <main className={home.container}>
        <p>Hello 👋 I'm</p>
        <section className={home.animation}>
        <div className={home.first}><div>Abhishek Kumar</div></div>
        <div className={home.second}><div>To Be Frontend Developer</div></div>
        <div className={home.third}><div>Trainee At FunctionUp</div></div>
        </section>
        </main>
        <h1 style={{color:"white", fontFamily:"cursive"}}>This Is My Refactored Assignment</h1>
    <div className={home.btnContainer}>
      <div className={home.btn}>
        <NavLink to="/">
          <button className={home.btn1} onClick={fetchUsers}>
            Fetch Users
          </button>
        </NavLink>
        <NavLink to="/fetch">
          <button className={home.btn2}>User Details</button>
        </NavLink>
        <button className={home.btn3} onClick={deleteUsers}>
          Delete Users
        </button>
      </div>
    </div>
    </div>
    </>
  );

}

export default Home;