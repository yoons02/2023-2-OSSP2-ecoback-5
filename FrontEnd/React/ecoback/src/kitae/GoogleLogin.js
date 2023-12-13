import {GoogleLogin} from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../css/GoogleLoginButton.css";
const GoogleLoginButton = () => {
    const clientId = '333345487642-eg1qebc3e22n19bvqpi2pf23rgu92r2l.apps.googleusercontent.com'
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
