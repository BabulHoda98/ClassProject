import React from 'react'

function Searchbar({ search, setsearch }) {
    return (
        <>
            <div className='input-group mb-3'>
                <span className='input-group-text' id="basic-addon1">Search Video</span>
                <input
                    className='form-control'
                    type='text'
                    placeholder='type something........'
                    aria-label='type something'
                    aria-describedby='basic-addon1'
                    value={search}
                    onChange={e => setsearch(e.target.value)}

                />

            </div>

        </>
    )
}

export default Searchbar
