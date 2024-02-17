import React, { memo } from 'react'

function Two() {
    console.log('Component Two Re-Rendered ----hoda');
    return (
        <div>
            TWO
        </div>
    )
}

export default memo(Two)
