import Swal from "sweetalert2";

export const generateAlertError = (message = "There was something wrong") => {
  return Swal.fire({  
    position: "top-end",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar : true,
    toast : true,
    allowOutsideClick : false
  });
};
