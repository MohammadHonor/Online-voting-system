import React from 'react'

export default function View({props}) {

  const voters_list = [
    {
     name:"mohammad",
     id:1,
     url:"../public/R.jpeg",
     flag:""
    },
    {
     name:"ali",
     id:2,
      url:"../public/R.jpeg"
    },
    {
      name:"mohammad",
      id:1,
      url:"../public/R.jpeg"
     },
     {
      name:"ali",
      id:2,
       url:"../public/R.jpeg"
     }, {
      name:"mohammad",
      id:1,
      url:"../public/R.jpeg"
     },
     {
      name:"ali",
      id:2,
       url:"../public/R.jpeg"
     }, {
      name:"mohammad",
      id:1,
      url:"../public/R.jpeg"
     },
     {
      name:"ali",
      id:2,
       url:"../public/R.jpeg"
     }
    

  ]
  
  return (
    <div  className=" 
    flex flex-col 
    pt-10 h-screen 
    w-[1150px] border-2 
    border-red-400 
    ml-80 gap-4">
      <p>{props}</p>
      
      {

        voters_list.map((voters)=>{
          return(

            <ul className='flex scroll-m-6 justify-between  items-center p-2 border-2 border-red-700'>
              <li className=' h-16 w-16'><img src={`${voters.url}`} alt="comming" /></li>
              <li>{voters.name}</li>
              <li>{voters.id}</li>
            </ul>
          )
           
          

        })
        
         
        
}
      
      
    
    
    </div>
  )
}
