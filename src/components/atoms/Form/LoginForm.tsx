"use client";

import { userSchema } from "@/validations/userSchema";
import { Forum } from "next/font/google";
import React, { useState } from "react";
import * as yup from "yup";


interface FormData {
  id: number;
  username: string;
  age: string;
  image: string;

}

interface FormErrors {
  [key: string]: string | undefined;
}

const LoginForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [data,setdata]=useState<FormData>({
    id: 0,
    username: "",
    age: "",
    image: ""
  });
  let nextId = 1;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({}); // Reset any previous errors
      
    const form = event.currentTarget;
    const formData: FormData = {
      id: form.id.value,
      username: form.username.value,
      age: form.age.value,
      image: form.image.value,
    };
    console.log('Form Data:', formData);
  

    try {
      await userSchema.validate(formData, { abortEarly: false });
    //  setdata(formData);
   
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessages: FormErrors = {};
        error.inner.forEach((e) => {
          if (e.path && typeof e.path === "string") {
            errorMessages[e.path] = e.message;
          }
        });
        setErrors(errorMessages);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start justify-start gap-4 flex-col">
          <input
            className="border border-gray-800"
            name="id"
            type="number"
            placeholder="Name..."
          />
          {errors.iddata && <p style={{ color: "red" }}>{errors.iddata}</p>}

          <input
            className="border border-gray-800"
            name="username"
            type="text"
            placeholder="enter username"
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

          <input
            className="border border-gray-800"
            name="age"
            type="text"
            placeholder="Enter age"
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
          <input
            className="border border-gray-800"
            name="image"
            type="file"
            placeholder="Enter age"
          />
          {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
