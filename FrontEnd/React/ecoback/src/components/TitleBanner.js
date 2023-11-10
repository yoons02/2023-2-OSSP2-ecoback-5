import React from 'react';
import Sidebar from '../kitae/sidebar';

const TitleBanner=()=>{
    const titleStyle={

        fontFamily: "Pattaya",
        fontFize: "25px",
        fontWeight: "400",
        lineHeight: "35px",
        letterSpacing: "0em",
        textAlign: "left",
    }
    const containerStyle={
            display: "flex",
            justifyContent: "space-between" ,
            alignItems:"center",
            padding:'5px 7px'

    }

    
    return (
        <div style={containerStyle}>
                <div className="title" style={{titleStyle}}>Eco$Back</div>
                <Sidebar />
        </div>
    )
}

export default TitleBanner;