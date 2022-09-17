import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {


    const { user } = useSelector(state => state.auth);

    let location = useLocation();


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

}