"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from "yup";
import API from "../../api/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AuthSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: async (values) => {
      try {
        const res = await API.post("user/login", values);

        localStorage.setItem("user", JSON.stringify(res.data)); //contains user:{email,fullname} && token
        if (state && state.fromCheckout) {
          navigate("/cart"); //goback to cart
        } else {
          navigate("/"); // redirect to home page
        }
      } catch (error) {
        console.log(error);
        toast.error("There was an error signing in, retry");
      }
    },
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex min-w-[498px] flex-col gap-4 bg-white px-12 p-8 rounded shadow"
      >
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">Login to your account</h1>
          <a href="/register" className="underline text-blue-600">
            Register
          </a>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@domain.com"
            required
            shadow
            {...formik.getFieldProps("email")}
            color={
              formik.touched.email && formik.errors.email
                ? "failure"
                : undefined
            }
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            {...formik.getFieldProps("password")}
            color={
              formik.touched.password && formik.errors.password
                ? "failure"
                : undefined
            }
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            shadow
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button
          disabled={formik.isSubmitting}
          isProcessing={formik.isSubmitting}
          type="submit"
        >
          {formik.isSubmitting ? "Processing..." : "Register new account"}
        </Button>
      </form>
    </div>
  );
}
