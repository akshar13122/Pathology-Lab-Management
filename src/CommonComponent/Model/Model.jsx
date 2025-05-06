import React from 'react'
import './Model.css'
const Model = ({setOpenCreate}) => {
    return (
        <div className="model">
            <div className="modelCard">
                <div className="modelTitleBox">
                    <div className="modelTitle" >Create New</div>
                    <div className="xButon" onClick={() => { setOpenCreate(prev => !prev) }}>X</div>
                </div>
                <div className="modelBody">
                    <div className="inputRowModel">
                        <div className="inputBox">
                            <div className="inputLabel">Name</div>
                            <input type='text' className='inputModel' placeholder='Enter a Name' />
                        </div>
                        <div className="inputBox">
                            <div className="inputLabel">Age</div>
                            <input type='text' className='inputModel' placeholder='Enter Age' />
                        </div>

                    </div>

                    <div className="inputRowModel">
                        <div className="inputBox">
                            <div className="inputLabel">Address</div>
                            <input type='text' className='inputModel' placeholder='Enter Address' />
                        </div>
                        <div className="inputBox">
                            <div className="inputLabel">Mobile</div>
                            <input type='text' className='inputModel' placeholder='Enter Mobile No' />
                        </div>
                    </div>

                    <div className="inputRowModel">
                        <div className="inputBox">
                            <div className="inputLabel">Examined By</div>
                            <input type='text' className='inputModel' placeholder='Examined By' />
                        </div>
                        <div className="inputBox">
                            <div className="inputLabel">Examined By</div>
                            <input type='date' className='inputModel' placeholder='Enter Mobile No' />
                        </div>
                    </div>

                    <div className="inputRowModel">
                        <div className="inputBox">
                            <div className="inputLabel">Selected Test</div>
                            <select className='inputModel'>
                                <option>Test 1</option>
                                <option>Test 2</option>
                                <option>Test 3</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <div className="inputLabel">Report Date</div>
                            <input type='date' className='inputModel' placeholder='Enter Mobile No' />
                        </div>
                    </div>
                    <div className="btnDivModel">
                        <div className="submitModel">Submit</div>
                        <div className="submitModel">Clear</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model