import React , {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routers/contantroutes';
import * as actions from './../../../store/actions/userAction';


const Login = () => {

    const userState = useSelector(state => state.user)
    const dispath = useDispatch();
    const navigate = useNavigate()
    const handleClickLogin = () =>{
        dispath(actions.atLoginUserAction({
                email : document.getElementById("loginName").value,
                password : document.getElementById("loginPassword").value,
            }
        ));
    };
    useEffect(() => {
        // Update the document title using the browser API
        if(userState.data.length != 0 ){
            navigate(ROUTES.home)
        }
      });
    return (
        <>
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true" onClick={handleClickLogin} >Login</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
        </ul>


        <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form class="d-flex flex-column">
            <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" placeholder="Email or username" />
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" placeholder="Password"  autocomplete="on" />

            </div>

            <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
            
                </div>

                <div class="col-md-6 d-flex justify-content-center">
                
                <a href="/">Forgot password?</a>
                </div>
            </div>
            </form>
            <button class="btn btn-dark btn-block mb-4 w-25 text-align-center" onClick={handleClickLogin} >Sign in</button>

            
            <div class="text-center mt-4">
                <p>Not a member? <a href="/">Register</a></p>
            </div>
        </div>
        </div>
        </>
    );
};
export default Login