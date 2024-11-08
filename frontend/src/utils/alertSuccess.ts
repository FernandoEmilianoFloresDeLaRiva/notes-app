import Swal from "sweetalert2";

export const generateAlertSuccess = (
  message = "Your changes were successfully saved"
) => {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    toast: true,
    allowOutsideClick: false,
  });
};
