import React from 'react'
import "../styles/clubs.css"
import Link from 'next/link'
const Clubs = () => {
    let nums1 = [1,2,3,4]
  return (
    <div className='clubCont scrollAnim'>
      <h1 className="text-3xl">Life at IIIT - Lucknow</h1>
      <center>
        <div className="clubCardContTop">
            {
                nums1.map((item)=>{
                    const link = `clubs/club${item}`
                    return(
                            <div className="clubCardTop flex">
                                <Link href={link} className="w-full h-full"></Link>
                            </div>
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
  )
}

export default Clubs
