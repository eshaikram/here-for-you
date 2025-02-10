"use client";
import React, { useRef, useState } from 'react';
import './login.css';
import Link from 'next/link';
import axiosInstance from '@/utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { Provider, useDispatch } from 'react-redux';
import { addUser } from '@/store/slices/user';
import { meraStore } from '@/store/store';

export default function Page() {
  return (
    <Provider store={meraStore}>
      <Login />
    </Provider>
  );
}

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const validateInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const login = async () => {
    if (!validateInputs()) return;

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        dispatch(addUser(response.data.user));
        router.push("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              ref={emailRef}
              className="form-input"
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              className="form-input"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
            <Link href="/reset-password" className="forgot-password-link">
              FORGOT PASSWORD
            </Link>
            <button type="button" className="login-button" onClick={login}>
              Login
            </button>
            <Link href="/signup" className="text">
              Click here to Register Now
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
