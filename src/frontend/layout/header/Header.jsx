import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routers/contantroutes";
import { atLogoutUserAction } from "../../../store/actions/userAction";
const Header = () => {
   const userisLogining = localStorage.getItem('user');
  const useState = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleNextLogin = () => {
    navigate(ROUTES.login);
  };
  const handleNextCart = () => {
    navigate(ROUTES.cart);
  };
  const handleLogout = () => {
    dispatch(atLogoutUserAction())
    localStorage.removeItem("user");
  }
  useEffect(()=>{
    if(userisLogining == null){
        if(useState.length != 0){
            localStorage.setItem('user', useState[0].email)
        }
    }
  },[])
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-shaw">
        <div class="container">
          <a class="navbar-brand" href="/">
            <h1>
              <i>NHT</i>
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={handleNextCart}>
                  Cart
                </a>
              </li>
                {userisLogining  && <li class="nav-item">
                    <a class="nav-link">
                        {userisLogining}
                    </a>
                </li>}
                {useState.length === 0 || userisLogining === null ? (
                <li class="nav-item">
                    <a class="nav-link" onClick={handleNextLogin}>
                    Login
                    </a>
                 </li>
                ) : (
                <li class="nav-item">
                    <a class="nav-link" onClick={handleLogout}>
                    Logout
                    </a>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
