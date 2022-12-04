import React from "react";
import { createUser, updateUser } from "../../api/userApi";


const FormEditUser = (props) => {
    console.log(props)
    const handleFeature = (type) => {
        const Staff = document.getElementById("selector-staff").value
        var isStaff = false;
        if (Staff=="1")  isStaff= true;
        var dataUpdate = {
            "email" : document.getElementById("inputEmail3").value,
            "password" : document.getElementById("inputPassword3").value,
            "isStaff" : isStaff,
            "isAdmin" : false,
        }
        if(type === "edit") updateUser(props.user.id,dataUpdate);
        if(type === "add") createUser(props.user.id,dataUpdate);
    }
    return (
        <>
            { props != [] &&
            (<div>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder= {props.user.email}>
                
                            </input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword3" placeholder={props.user.password}>
                            </input>
                        </div>
                    </div>
                    <div class="form-group row d-flex">
                        <label for="selector-staff" class="col-sm-2 col-form-label">Staff</label>
                        <div class="col-sm-10">
                        <select class="form-select form-select-lg mb-3" id="selector-staff" aria-label=".form-select-lg example">
                            <option value="0">False</option>
                            <option value="1">True</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label class="form-check-label" for="gridCheck1">
                                        Confirm to update
                                    </label>
                            </div>
                        </div>
                    </div>
                </form>
                    <div class="form-group row">
                    <div class="col-sm-10">
                        <button class="btn btn-primary back-content" onClick ={ () => handleFeature(props.type)}>Update Edit</button>
                    </div>

                </div>
            </div>
            )}
        </>
    )
};
export default FormEditUser;