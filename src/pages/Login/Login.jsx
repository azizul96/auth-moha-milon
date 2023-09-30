import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signInUser, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        

        signInUser(email,password)
        .then(result => {
            console.log(result);
            e.target.reset()
            navigate("/")
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero h-[60vh] bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <form onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" required className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-success">Login</button>
                </div>
            </form>

            <p>New to this Website ? <Link className="underline text-blue-500" to={"/register"}> Register</Link></p>
            <p>Login with <button onClick={handleGoogleLogin} className="btn btn-sm btn-outline">Google</button></p>

        </div>
        </div>
  </div>
</div>
        </div>
    );
};

export default Login;