import { responsiveArray } from 'antd/es/_util/responsiveObserve';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delUser, getAllUser, getUserById, searchUser } from '../../api/userApi';
import { getAllProductsAction } from '../../store/actions/productActions';
import { getAllUserActions } from '../../store/actions/userAction';
import FormEditUser from './FormEditUser';
import './scss/ContentDashBoard.scss'
const ContentUserDashBoard = () => {
    
    const useStateAction = useSelector(state => state.user);
    const [stateDate,setstateData] = useState(useStateAction);
    const [stateEdit,setStateEdit] = useState(false);
    const [stateAdd,setStateAdd] = useState(false)
    const dispatch = useDispatch() 
    console.log("edit",stateEdit)
    const FetUser = useCallback(() => {
        getAllUser().then(res =>
            setstateData(res)
            )
    }, [])

    const dataSearch = useCallback(() => {
        console.log("value search",document.getElementById("search-user").value)
        searchUser(document.getElementById("search-user").value).then(res =>
            setstateData(res)
            )
    }, [])

    const handleDel = (id) => {
        delUser(id)
        dispatch(getAllUserActions())
        FetUser()
    }
    const handleEdit = (id,email,password) => {
        setStateEdit({'id':id,'email':email,'password':password});
    }
    const handleBack = () => {
        FetUser()
        setStateEdit(false);
        setStateAdd(false)
    }
    const handleAdd = () => {
        setStateAdd(true)
    }
    const handleSearch = () => {
        dataSearch();
    }

    return (
        <>  
            <div class="row">
                <div class="d-flex justify-content-between">
                    <div className="search d-flex">
                        <h3>Search</h3>
                        <input id="search-user" class="mx-2" type="text"></input>
                        <button class="btn btn-dark" onClick={handleSearch}> OK</button>
                    </div>
                    <button class="btn btn-dark" onClick={handleAdd}> Add Item</button>
                </div>
            </div>
            {(stateEdit ===false && stateAdd ===false) && (<div class="row full-height">
                <div class="col-md-12">
                    <div class="table-wrap">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ID no.</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Staff</th>
                                    <th>Date create</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stateDate.data && stateDate.data.length && (
                                        stateDate.data.map(item => (
                                            <tr class="alert" role="alert">
                                                <th scope="row">{item.id}</th>
                                                <td>{item.email}</td>
                                                <td>{item.password}</td>
                                                <td>{item.isStaff === false && (<p>False</p>) || item.isStaff === true && (<p>True</p>)  }</td>
                                                
                                                <td>{item.createdAt}</td>
                                                <td>
                                                    <button class='btn btn-dark' onClick={() => handleEdit(item.id,item.email,item.password)}> Edit</button>
                                                    <button class='mx-4 btn btn-info btn-delete' value={item.id} onClick={() => handleDel(item.id)}> Delete</button>
                                                    <script>

                                                    </script>
                                                </td>
                                            </tr>
                                        ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>)
            || (stateEdit != false && stateAdd===false) &&(
                <div>
                    <button class="btn btn-info " onClick={handleBack}> Back </button>
                    <FormEditUser user={stateEdit} type={"edit"} />
                </div>
            )}
            {(stateAdd === true) &&(
                <div>
                    <button class="btn btn-info " onClick={handleBack}> Back </button>
                    <FormEditUser user={{'id':"",'email':"",'password':""}} type={"add"} />
                </div>
            )}
        </>
    )
}
export default ContentUserDashBoard;