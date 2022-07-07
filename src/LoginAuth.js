import axios from 'axios';
const LoginAuthentication = async ({ id, pw }) => {
    let Auth;
    try {
        Auth = await axios.post(
            'http://localhost:23400/api/login',
            JSON.stringify({ id, pw }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (rejected) {
        console.log(rejected);
        return false;
    }
    return Auth;
};
export default LoginAuthentication;
