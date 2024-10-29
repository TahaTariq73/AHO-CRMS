import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from './redux/slices/userSlice';

const ProtectedRoute = ({ Component }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  useEffect(() => {
    if ((status == "succeeded" || status == "failed") && !isAuthenticated) {
      navigate("/login");
    } 

    if ((status == "succeeded" || status == "failed") && isAuthenticated) {
      navigate("/reports/scoreboard");
    } 
  }, [data, status, isAuthenticated])

  return (
    <Fragment>
      {status == "loading" ? (        
        <div className="flex justify-center items-center h-[100vh] max-h-[100vh] w-full">
            Loading ...
        </div>
      ) : (
        <>
          {isAuthenticated && 
          (
            <Component />
          )}
        </>   
      )}
    </Fragment>
  )
}

export default ProtectedRoute;