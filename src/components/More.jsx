import React, { useState } from 'react'
import { useParams,useNavigate,useLocation  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default function More() {
    const selector=useSelector(state=>state)
    const  params=useParams()
    const dispatch=useDispatch()
    const[url,Seturl]=useState('')
    const[name,Setname]=useState('')
    const[desc,Setdesc]=useState('')
    const navigat=useNavigate()
    const locat=useLocation()

    function Edit(){
      dispatch({type:'edit',payload:{logo:url, first_name:name, description:desc,id:params.id,del:locat.state.son}})
      navigat('/')
    }
  return (
    <div>
      <div className="container mt-2">
        {
            (selector.storeCard.length>0) && selector.storeCard.map((item,index)=>{
                if(item.id==params.id){
                    return(
                        <div className="card" key={index}>
                            <img src={item.logo} height={400} alt="qqwwe" />
                            <h2>{item.first_name}</h2>
                            <p>{item.description}</p>
                        </div>
                    )
                }
            })
        }
      </div>
      <div className="row container">
        <div className="col-3"><input type="text" className='form-control' onInput={(val)=>Seturl(val.target.value)} placeholder='enter_img_url' /></div>
        <div className="col-3"><input type="text" className='form-control' onInput={(val)=>Setname(val.target.value)} placeholder='enter name' /></div>
        <div className="col-3"><input type="text" className='form-control' onInput={(val)=>Setdesc(val.target.value)} placeholder='description'/></div>
        <div className="col-3"><button className='btn btn-warning' onClick={Edit}>Edit</button></div>
      </div>
    </div>
  )
}
