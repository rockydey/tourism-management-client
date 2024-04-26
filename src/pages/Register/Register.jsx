import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import { useForm } from "react-hook-form";
import { AtSign, LockKeyhole, Eye, EyeOff, User, ImageUp } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, userUpdateProfile, setLoading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const name = data.userName;
    const email = data.userEmail;
    const photoURL = data.userPhotoURL;
    const password = data.userPassword;
    console.log(name, email, photoURL, password);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setError(
        "Password should have a uppercase and a lowercase and also minimum 6 character!"
      );
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((result) => {
        toast.success("User Register Successfully!");
        console.log(result.user);
        userUpdateProfile(name, photoURL)
          .then((result) => {
            setLoading(false);
            console.log(result);
          })
          .catch((error) => console.error(error.message));
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>Register - Roaming Routes</title>
      </Helmet>
      <Header />
      <div className='bg-color3'>
        <div className='max-w-screen-xl mx-auto mt-20 py-24'>
          <div className='p-10 rounded-xl bg-color1 dark:bg-color5 w-full md:w-3/4 lg:w-[40%] mx-auto'>
            <h3 className='text-center font-gothic text-color6 dark:text-color1 font-extrabold text-2xl mb-5'>
              Register Here
            </h3>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className='font-gothic text-lg font-medium'>
              <div>
                <div className='flex items-center p-3 rounded-xl bg-[#fff] '>
                  <div className='text-color7'>
                    <User width={20} height={20} />
                  </div>
                  <input
                    id='name'
                    type='text'
                    className='w-full bg-[#fff] px-4 focus:outline-none text-base font-normal text-color7'
                    placeholder='Name'
                    {...register("userName", { required: true })}
                  />
                </div>
                {errors.userName?.type === "required" && (
                  <span className='text-color4'>Name is required!</span>
                )}
              </div>
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
                    <ImageUp width={20} height={20} />
                  </div>
                  <input
                    id='photoURL'
                    type='text'
                    className='w-full bg-[#fff] px-4 focus:outline-none text-base font-normal text-color7'
                    placeholder='Photo URL'
                    {...register("userPhotoURL", { required: true })}
                  />
                </div>
                {errors.userPhotoURL?.type === "required" && (
                  <span className='text-color4'>Photo URL is required!</span>
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
                {
                  <div className='text-color4 text-sm font-normal mt-2'>
                    {error}
                  </div>
                }
                {errors.userPassword?.type === "required" && (
                  <span className='text-color4'>Password is required!</span>
                )}
              </div>
              <div className='mt-3 space-x-2 font-normal text-base ml-2'>
                <input
                  onClick={() => setChecked(!checked)}
                  type='checkbox'
                  name='checkbox'
                  id=''
                />
                <span className='text-color6 dark:text-color8'>
                  Accept all terms and conditions
                </span>
              </div>
              <input
                className={`${
                  !checked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                } block w-full mt-3 bg-color6 dark:bg-color3 text-[#fff] font-medium text-lg py-3 rounded-full`}
                type='submit'
                value='Register'
                disabled={!checked && true}
              />
            </form>
            <p className='text-center text-base font-normal dark:text-color8 text-color6 mt-4'>
              Already have an account?{" "}
              <Link className='text-color3 font-semibold' to='/login'>
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
