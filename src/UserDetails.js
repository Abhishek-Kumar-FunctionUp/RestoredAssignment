import React,{useEffect, useState} from "react"

import DataTable from 'react-data-table-component'



function UserDetails(){

    const [search,setSearch]=useState("")
    const [data,setData]=useState([])
    const [filtered,setFiltered]=useState([])
    

    const getData = async () =>{
        try{
            let dataArr=[]
            for(let i=0; i<50; i++){
            const response = await fetch("https://randomuser.me/api");
            const data1 =await response.json()
            console.log(data1.results)
            dataArr.push(data1.results)
        }
        setData(dataArr)
            
        }catch(error){
            console.log(error);
        }
    };
    
const columns=[
{
    name:"Users Name",
    selector: row=>row[0].name.title+" "+row[0].name.first+" "+row[0].name.last,
    sortable: true
   },
   {
    name:"Gender",
    selector: row=>row[0].gender
   },
   {
    name:"DOB",
    selector: row=>row[0].dob.date
   },
   {
    name:"Age",
    selector: row=>row[0].dob.age
   },
   {
    name:"Email",
    selector: row=>row[0].email
   },
   {
    name:"Location",
    selector: row=>row[0].location.country
   },
   {
    name:"Image",
    selector: (row)=><img style={{width:"50", height:"50"}} src={row[0].picture.thumbnail}/>
   }

]
   
useEffect(()=>{
    getData()
  },[]);

    useEffect(()=>{
        const result=data.filter(user=>{
            return user[0].name.first.toLowerCase().includes(search.toLowerCase()) || 
            user[0].email.toLowerCase().includes(search.toLowerCase()) || 
            user[0].location.country.toLowerCase().includes(search.toLowerCase())
        })
        setFiltered(result)
    },[search])
    
    return(
        <>
    <DataTable 
    title ="User Details" 
    columns={columns}  
    data={filtered} 
    pagination
    fixedHeader
    fixedHeaderScrollHeight="500px"
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    subHeader
    subHeaderComponent={
        <input type="text" placeholder="Search Here" value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    }
    
    />


</>
    )
}

export default UserDetails;