"use client";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import { addUser } from "@/store/slices/user";
import "./signup.css";
import { meraStore, merastore } from "@/store/store";
import { toast } from "react-toastify";

export default function Page() {
  return (
    <Provider store={meraStore}>
      <Signup />
    </Provider>
  );
}

function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register,handleSubmit,reset,formState: { errors },} = useForm();

  const saveUser = async (user) => {
    try {
      console.log("User data being sent to the server:", user);

      const response = await axiosInstance.post("/auth/signup", user); 

      console.log("Response from the server:", response.data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        dispatch(addUser(response.data.user));
        toast.success("Registered successfully");
        reset();
        router.push("login");
      } else {
        toast.error("Email is already registered");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.warning("Error while registering. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(saveUser)} className="signup-form">
        <h2 className="form-title">Registration</h2>

        <input
          {...register("firstName", { required: "First name is required." })}
          placeholder="First Name"
          className="input-field"
        />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

        <input
          {...register("lastName", { required: "Last name is required." })}
          placeholder="Last Name"
          className="input-field"
        />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

        <input
          {...register("phone", {
            required: "Phone number is required.",
            pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number." },
          })}
          placeholder="Phone Number"
          className="input-field"
        />
        {errors.phone && <p className="error-message">{errors.phone.message}</p>}

        <input
          {...register("city", { required: "City is required." })}
          placeholder="City"
          className="input-field"
        />
        {errors.city && <p className="error-message">{errors.city.message}</p>}

        <input
          {...register("email", {
            required: "Email is required.",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address." },
          })}
          placeholder="Email"
          className="input-field"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required.",
            minLength: { value: 6, message: "Password must be at least 6 characters long." },
          })}
          placeholder="Password"
          type="password"
          className="input-field"
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button className="submit-button">Register</button>
        <p id="paragraph">
          Already have an account?{" "}
          <a
            href="#"
            onClick={() => router.push("/login")}
            className="login-link"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
