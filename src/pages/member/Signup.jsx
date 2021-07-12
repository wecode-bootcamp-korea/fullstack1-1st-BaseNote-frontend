import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import SignupForm from './Componenets/SignupForm';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        {/* {console.log('출력')} */}
        <div>
          <header className="title">회원가입</header>
          <div>
            <SignupForm />
          </div>
          <div className="termsLink">
            <Link to="#">이용약관</Link>
            <span className="sign">, </span>
            <Link to="#">개인정보 수집 및 이용</Link>
            <span className="sign">, </span>
            <Link to="#">개인정보 정보 제공</Link>
            <span className="sign">을 확인하였고 동의합니다</span>
          </div>
        </div>
      </div>
    );
  }
}
// console.log('signup: ', SignUp);

export default Signup;