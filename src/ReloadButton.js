import React from 'react'

const ReloadButton = () => {
    return (
        <>
            <br />
            <button className="button is-success is-large" onClick={() => window.location.reload(true)}>Uusi remppa</button>
        </>
    )
}

export default ReloadButton;
