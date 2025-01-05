"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from "yup";
import API from "../../api/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AuthSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export function Register() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: AuthSchema,
    onSubmit: async (values) => {
      try {
        const res = await API.post("user/register", values);

        localStorage.setItem("user", JSON.stringify(res.data)); //contains user:{email,fullname} && token
        if (state && state.fromCheckout) {
          navigate("/cart"); //goback to cart
        } else {
          navigate("/"); // redirect to home page
        }
      } catch (error) {
        console.log(error);
        toast.error("There was an error creating your account");
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
          <h1 className="font-semibold text-xl">Register Account</h1>
          <a href="/login" className="underline text-blue-600">
            Login
          </a>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Full Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="full name"
            required
            shadow
            {...formik.getFieldProps("fullName")}
            color={
              formik.touched.fullName && formik.errors.fullName
                ? "failure"
                : undefined
            }
            helperText={
              formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""
            }
          />
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            color={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "failure"
                : undefined
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
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
