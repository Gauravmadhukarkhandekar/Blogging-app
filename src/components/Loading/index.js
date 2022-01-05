import React from 'react';
import Loader from 'react-loader-spinner'


function Loading(props) {
    return (
        <div style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
        }}>
            <Loader type='RevolvingDot' height = "100" width="100"  arialLabel="loading-indicator" color="green" />
        </div>
    );
}

export default Loading;