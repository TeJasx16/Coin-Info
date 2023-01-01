import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Loder from './Loader'
import {server} from '../index' 
import ErrCompo from './ErrCompo'
const Exchanges = () => {

const [exchange, setExchange] = useState([])
const [lodeing, setLodeing] = useState(true)
const [err, setErr] = useState(false)

useEffect(() => {

  const fetchdata = async()=>{
  try {

      const {data} = await axios.get(`${server}/exchanges`)
      setExchange(data);
      // console.log(data);
      setLodeing(false);
    }
    
    
   catch (error) {
    setErr(true)
    setLodeing(false)
    
  }
}
  fetchdata();
  
  
}, [])

if (err) {
  return <ErrCompo/>
}

  return (
    <>

    <div >
        {
          lodeing ? (<Loder/>) : (
            <>
            <div className=' items-center justify-center flex flex-wrap  '>
              {
                exchange.map((i)=>(
                  <div className='md:w-[20vw] w-1/2 flex-wrap  p-4 m-4 items-center shadow-md shadow-purple-200 hover:shadow-xl'   key={i.id}>
                    
                   <Exchangedata  url={i.url} name={i.name} image={i.image} rank={i.trust_score_rank}      />
                     
                     
                     </div>
                ))
              }
            </div>
            </>
          )
        }
    </div>
    
    </>
  )
}

const Exchangedata = ({url,name,image,rank}) =>(
  <a href={url} target={'blank'} className='flex  flex-col justify-center items-center'>
    <img src={image} height={'40'} width={'40'} alt="" />
    <h2 >{name}</h2>
    <h3>Rank {rank}</h3>


  </a>

)

export default Exchanges