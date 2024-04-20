import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card card shadow-sm p-3 mb-5 bg-body rounded" style={{"width": "18rem"}}>
  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400" className="card-img-top" alt="ButterChicken"/> 
        <div className="card-body">
    <h5 className="card-title">Butter Chicken</h5>
    <p className="card-text">Made from chicken with a spiced tomato and butter sauce. </p>
    <div className="container w-100">
      <select className='m-2h-100 bg-indec rounded'>
        {Array.from(Array(5),(e,i)=>{
          return(
          <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-warning rounded '>
        <option value="">Half</option>
        <option value="">Full</option>
      </select>
      <div className='d-inline h-100 fs-5'>
        Total Price
      </div>
    </div>
    </div>
  </div></div>
  )
}
