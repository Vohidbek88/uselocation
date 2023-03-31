import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Render() {
const select=useSelector(state=>state)
console.log(select.storeCard);
  return (
    <div>
      <div className="row g-0">
        {
            (select.storeCard.length>0) && select.storeCard.map((arr,index)=>{
                return(
                    <div className="col-4">
                        <div className="card">
                            <img src={arr.avatar} alt="qq" height={400} />
                            <h2>{arr.first_name}</h2>
                            <Link to={`/more/${arr.id}`} state={{son:index}}>
                                <button className='btn btn-success'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
