import React from "react";

import { toast } from "react-toastify";

 export const toastify = (errorText) => toast.error(errorText,{position: "top-right",
 autoClose: 5000,
 hideProgressBar: false,
 closeOnClick: true,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
 });


