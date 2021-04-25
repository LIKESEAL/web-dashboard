import React from 'react';
import {withRouter} from 'react-router-dom'

function Main({history}) {
    
    return (
    <div>
        물개 죠아 팀의 웹 사이트입니당.
        <br/>
        <a href="/buttonlist">임시링크-버튼리스트</a>
        <br/>
        <a href="/dropdownlist">임시링크-드롭다운리스트</a>
        <br/>
        <a href="/radiolist">임시링크-라디오리스트</a>
        <br/>
        <a href="/inputlist">임시링크-인풋</a>
        <br/>
        <a href="/cardlist">임시링크-카드</a>
        <br/>
        <a href="/logins/logingit">임시링크-로그인깃</a>
        <br/>
        <a href="/email/inbox">임시링크-Inbox</a>
        <br/>
        <a href="/email/detail">임시링크-Detail</a>
    </div>
    );

}

export default withRouter(Main);
