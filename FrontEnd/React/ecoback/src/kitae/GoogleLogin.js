import {GoogleLogin} from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../css/GoogleLoginButton.css";
const GoogleLoginButton = () => {
    const clientId = 'clientID'
    return (
        <>

            <GoogleOAuthProvider clientId={clientId}>
                <div className="google-login-button">
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
                </div>
            </GoogleOAuthProvider>

        </>
    );
};

export default GoogleLoginButton
