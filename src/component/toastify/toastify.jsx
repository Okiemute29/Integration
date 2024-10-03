import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

    export function Error( string) {
        toast.error(string, {theme:"light",
        position: "bottom-right"});
    }

    export function Warning( string) {
        toast.warning(string, {theme:"light",
        position: "bottom-right"});
    }

    export function Success( string) {
        toast.success(string, {theme:"light",
        position: "bottom-right"});
    }


// <ToastContainer transition={bounce} />