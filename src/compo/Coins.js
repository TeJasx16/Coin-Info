import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Loder from './Loader'
import {server} from '../index' 
import ErrCompo from './ErrCompo'
const Coins = () => {

const [exchange, setExchange] = useState([])
const [lodeing, setLodeing] = useState(true)
const [err, setErr] = useState(false)

useEffect(() => {

  const fetchdata = async()=>{
  try {

      const {data} = await axios.get(`${server}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
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
                    
                   <Exchangedata   name={i.name} symbol={i.symbol} image={i.image} price={i.current_price}      />
                     
                     
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

const Exchangedata = ({url,name,symbol,image,price}) =>(
  <a href={url} target={'blank'} className='flex  flex-col justify-center items-center'>
    <img src={image} height={'40'} width={'40'} alt="" />
    <h2 className='text-center'>{name}</h2>
    <h2 className='text-center'>{symbol}</h2>
    <h3>₹ {price}</h3>


  </a>

)

export default Coins