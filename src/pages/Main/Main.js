import React from 'react';
import {withRouter} from 'react-router-dom'

function Main({history}) {
    
    return (
    <div>
        <button onClick={()=>history.push("/sw")}>슬우페이지</button>
        <button onClick={()=>history.push("/jy")}>지영페이지</button>
        <button onClick={()=>history.push("/sy")}>세연페이지</button>
    </div>
    );
}

export default withRouter(Main);
