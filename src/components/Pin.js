import React from 'react'

function Pin(props) {

    let { urls } = props;

    return (
        <div class="PinsSection">
            <div class="pin">
                <img src={urls?.regular} alt="pin"/>
            </div>    
        </div>
    )
}

export default Pin
