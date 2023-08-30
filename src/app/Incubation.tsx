import React from 'react'
import "../styles/incubation.css"

const Incubation = () => {
    return (
        <div className='incCont scrollAnim'>
            <h1>Incubation Centre - IIIT, Lucknow</h1>
            <div className="main">
                <div className='leftMain'>
                    <h1>Main Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci, assumenda modi alias reprehenderit tempore ipsam id libero quo ab quidem
                        esse iure unde voluptas similique earum provident, hic quaerat dolores</p>
                </div>
                <div className='box'></div>
            </div>
            <div className="btmBoxes">
                {
                    [1, 2, 3].map((item) => {
                        return (
                            <div className="boxBtm"></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Incubation
