import React, { useEffect } from 'react'
import PretplataComponenet from '../components/PretplataComponenet'
import { useDispatch } from 'react-redux';
import { getSubscription } from '../store/paketSlise';


function SestMeseciPages() {
  
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSubscription('50'))
    },[])

    return (
      <div className='mx-0 px-0 bg-slate-100'>
       
          <PretplataComponenet/>
      </div>
    )
}

export default SestMeseciPages