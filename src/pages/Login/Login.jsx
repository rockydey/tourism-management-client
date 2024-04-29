import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AtSign, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    const email = data.userEmail;
    const password = data.userPassword;

    signInUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User logged in successfully!");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error("Wrong email or password!");
        console.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User logged in successfully!");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User logged in successfully!");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='bg-color3 px-5 md:px-0'>
        <div className='max-w-screen-xl mx-auto mt-16 py-24'>
          <div className='px-5 py-10 md:px-10 rounded-xl bg-color1 dark:bg-color5 w-full md:w-3/4 lg:w-[40%] mx-auto'>
            <h3 className='text-center font-gothic text-color6 dark:text-color1 font-extrabold text-2xl mb-5'>
              Login Now
            </h3>
            <div className='text-2xl flex justify-center items-center gap-5'>
              <div>
                <p
                  onClick={handleGoogleLogin}
                  id='google'
                  className='flex p-2 cursor-pointer border border-color3 bg-[#fff]  rounded-full'>
                  <FcGoogle />
                </p>
                <Tooltip anchorSelect='#google' place='bottom'>
                  Login with Google
                </Tooltip>
              </div>
              <div>
                <p
                  onClick={handleGithubLogin}
                  id='githubId'
                  className='flex p-2 cursor-pointer border border-color3 text-color5 bg-[#fff] rounded-full'>
                  <FaGithub />
                </p>
                <Tooltip anchorSelect='#githubId' place='bottom'>
                  Login with Github
                </Tooltip>
              </div>
            </div>
            <div className='divider dark:text-color8 dark:divider-neutral'>
              OR
            </div>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className='font-gothic text-lg font-medium'>
              <div>
                <div className='mt-3 flex items-center p-3 rounded-xl bg-[#fff] '>
                  <div className='text-color7'>
                    <AtSign width={20} height={20} />
                  </div>
                  <input
                    id='email'
                    type='email'
                    className='w-full bg-[#fff] px-4 focus:outline-none text-base font-normal text-color7'
                    placeholder='Email'
                    {...register("userEmail", { required: true })}
                  />
                </div>
                {errors.userEmail?.type === "required" && (
                  <span className='text-color4'>Email is required!</span>
                )}
              </div>
              <div>
                <div className='mt-3 flex items-center p-3 rounded-xl bg-[#fff] '>
                  <div className='text-color7'>
                    <LockKeyhole width={20} height={20} />
                  </div>
                  <input
                    id='password'
                    type={show ? "text" : "password"}
                    className='w-full bg-[#fff] px-4 focus:outline-none text-base font-normal text-color7'
                    placeholder='Password'
                    {...register("userPassword", { required: true })}
                  />
                  <div
                    onClick={() => {
                      setShow(!show);
                    }}
                    className='cursor-pointer text-colorSecondary'>
                    {show ? (
                      <EyeOff width={20} height={20} />
                    ) : (
                      <Eye width={20} height={20} />
                    )}
                  </div>
                </div>
                {errors.userPassword?.type === "required" && (
                  <span className='text-color4'>Password is required!</span>
                )}
              </div>
              <p className='mt-3 text-right underline hover:text-color3 cursor-pointer text-sm text-color6 dark:text-color8 font-medium'>
                Forget Password?
              </p>
              <input
                className={`cursor-pointer block w-full mt-3 bg-color6 dark:bg-color3 text-[#fff] font-medium text-lg py-3 rounded-full`}
                type='submit'
                value='Login'
              />
            </form>
            <p className='text-center text-base font-normal dark:text-color8 text-color6 mt-4'>
              New to this website?{" "}
              <Link className='text-color3 font-semibold' to='/register'>
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
