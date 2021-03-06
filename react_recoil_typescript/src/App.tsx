import React from 'react';
import './App.css';
import MemberDetail from './components/MemberDetail';
import MemberList from './components/MemberList';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="container">
     <div className="subject">Members-Recoil-Typescript</div>
     <div className="contact-wrap">
        <div className="col left">
          <SearchBox/>
          <MemberList/>
        </div>
        <div className="col right">
          <MemberDetail/>
        </div>
     </div>
    </div>
  );
}

export default App;
