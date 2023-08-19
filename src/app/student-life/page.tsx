import React from 'react'
import "../../styles/clubs.css"
import Navbar from '@/components/Navbar'
const Clubs = () => {
    let nums1 = [1,2,3,4]
  return (
    <>
    <Navbar />
    <div className='clubCont'>
      <h1>Life at IIIT - Lucknow</h1>
      <center>
        <div className="clubCardContTop">
            {
                nums1.map((item)=>{
                    return(
                        <div className="clubCardTop"></div>
                    )
                })
            }
        </div>
      </center>
      <center>
        <div className="clubCardContBetw">
            {
                [...nums1,5].map((item)=>{
                    return(
                        <div className="clubCardBetw"></div>
                    )
                })
            }
        </div>
      </center>
      <center>
        <div className="clubCardContBtm">
            {
                nums1.slice(0,3).map((item)=>{
                    return(
                        <div className="clubCardBtm"></div>
                    )
                })
            }
        </div>
      </center>
    </div>
    </>
  )
}

export default Clubs
