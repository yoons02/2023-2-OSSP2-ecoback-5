import React from 'react';
import Sidebar from '../kitae/sidebar';
import {Link} from 'react-router-dom';
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
            <Link to="/Home">
                <div className="title" style={{titleStyle}}>Eco$Back</div>
            </Link>
                <Sidebar />
        </div>
    )
}

export default TitleBanner;