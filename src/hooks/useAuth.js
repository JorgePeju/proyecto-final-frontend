import { useContext } from "react";
import {AuthContex} from '../context'


export const useAuth = () => {

    const context = useContext(AuthContex)
    return context

}