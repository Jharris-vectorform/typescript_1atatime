import { useContext, useState } from "react";
import { Store } from "../Store";

export const useOnError = () => {
  const { setShowError } = useContext(Store);
  const setErrorData = (errorData: any) => {
    let errorMessage: string = "";    
    if (!errorData.response.data) {
      console.log("status OK");
      errorMessage =  errorData.message;
    }
    if (errorData.response.status  >= 400 && errorData.response.status < 500 ) {  
      errorMessage = errorData.response?.data;
    }
    if (errorData.response.status  >= 500) {
      if(!errorData.response?.data.Success){
        errorMessage = errorData.response?.data.Message;
      }else{
        errorMessage = errorData.message;
      }
    }     
    if (errorMessage) {
      setShowError &&
        setShowError({
          isError: true,
          title: errorMessage,
          ErrorType: "danger",
        });
    }
  };
  return setErrorData;
};
