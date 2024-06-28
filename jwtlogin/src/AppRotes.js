import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';
import Home from './Home';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signIn" element={<SignIn />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;