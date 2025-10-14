"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "@/varConstant";

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  work_email: Yup.string().email("Invalid email").required("Work Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  country: Yup.string().required("Country is required"),
  company_name: Yup.string().required("Company Name is required"),
  department: Yup.string().required("Department is required"),
  job_title: Yup.string().required("Job Title is required"),
  number_of_employees: Yup.number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Number of Employees is required"),
  message: Yup.string().required("Message is required"),
});

const DemoForm = () => {
  const countryOptions = React.useMemo(() => countryList().getData(), []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch(API_ENDPOINTS.SLACK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Submitted successfully!");
        setStatus({ success: "Form submitted successfully!" });
        resetForm();
      } else {
        toast.error(data.error || "Failed to send email.");
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send email.");
      setStatus({ error: error.message });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        work_email: "",
        phoneNumber: "",
        country: "",
        company_name: "",
        department: "",
        job_title: "",
        number_of_employees: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className="w-full"
    >
      {({ values, setFieldValue, isSubmitting, status }) => (
        <Form className="space-y-4 w-full">
          <div>
            <Field type="text" name="name" placeholder="Full Name" className="w-full input" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field type="email" name="work_email" placeholder="Work Email" className="w-full input" />
            <ErrorMessage name="work_email" component="div" className="text-red-500 text-sm" />
          </div>

          {isClient && (
            <div>
              <PhoneInput
                country={"bh"}
                value={values.phoneNumber || ""}
                onChange={(phone) => {
                  setFieldValue("phoneNumber", phone || "");
                }}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                }}
                containerClass="!w-[100%] input !pl-0"
                inputClass="!w-[100%] !border-none p-3 rounded-lg !py-0 !text-[1rem] !background-white"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
            </div>
          )}

          {isClient && (
            <div>
              <Select
                options={countryOptions}
                value={countryOptions.find((option) => option.label === values.country)}
                onChange={(selectedOption) => setFieldValue("country", selectedOption.label)}
                placeholder="Select or type your country"
                className="!w-[100%] input"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    width: "100%",
                    boxShadow: "none",
                    "&:hover": {
                      border: "none",
                    },
                  }),
                }}
              />
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>
          )}

          <div>
            <Field type="text" name="company_name" placeholder="Company Name" className="w-full input" />
            <ErrorMessage name="company_name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              as="select"
              name="department"
              className="input text-paragraphColor p-2 text-paragraphColor w-full"
            >
              <option value="" disabled className="paragraphColor">Select Department</option>
              <option value="Sales" className="text-paragraphColor">Sales</option>
              <option value="Support" className="text-paragraphColor">Support</option>
              <option value="Marketing" className="text-paragraphColor">Marketing and Press</option>
              <option value="General" className="text-paragraphColor">General Inquiries</option>
            </Field>
            <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field type="text" name="job_title" placeholder="Job Title" className="w-full input" />
            <ErrorMessage name="job_title" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field type="number" name="number_of_employees" placeholder="Number of Employees" min="1" className="w-full input" />
            <ErrorMessage name="number_of_employees" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              className="w-full input"
              rows={14}
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
          </div>

          <button className="contained-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DemoForm;
