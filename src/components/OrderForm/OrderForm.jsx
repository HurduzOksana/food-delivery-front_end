import React from "react";
import { useFormik } from "formik";
import {
  FormContainer,
  FormWrapper,
  Form,
  FormInput,
  FormButton,
} from "./OrderForm.styled";

const OrderForm = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const handleNameChange = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched("name", true);
  };

  const handleEmailChange = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched("email", true);
  };

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched("password", true);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            placeholder="Name"
            onChange={handleNameChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            autoComplete="off"
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}

          <FormInput
            placeholder="Email"
            onChange={handleEmailChange}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            autoComplete="off"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}

          <FormInput
            placeholder="address"
            onChange={handlePasswordChange}
            onBlur={formik.handleBlur}
            type="address"
            name="address"
            autoComplete="off"
            value={formik.values.address}
          />

          <FormButton type="submit">Order</FormButton>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default OrderForm;
