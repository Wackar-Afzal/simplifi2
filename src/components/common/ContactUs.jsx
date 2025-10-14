"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "@/varConstant";

// Yup validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    company_name: Yup.string().required("Company Name is required"),
    country: Yup.string().required("Country is required"),
    message: Yup.string().required("Message is required"),
});

export const ContactUs = () => {
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
                toast.error(data.error || "Failed to submit. Please try again.");
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error) {
            toast.error(error.message || "Failed to submit. Please try again.");
            setStatus({ error: error.message });
        }
        setSubmitting(false);
    };

    return (
        <div className="w-full" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div>
                    <h1 className="heading-style-h2_big is-cta-title text-black">
                    We're here to support you
                    </h1>
                </div>

                <div>
                    <Formik
                        initialValues={{
                            name: "",
                            company_name: "",
                            country: "",
                            message: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue, isSubmitting }) => (
                            <Form>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <div className="mt-3">
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Your full name"
                                            className="custom-input w-full"
                                        />
                                    </div>
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                
                                <div className="form-group mt-4">
                                    <label className="form-label">Company Name</label>
                                    <div className="mt-3">
                                        <Field
                                            type="text"
                                            name="company_name"
                                            placeholder="Your company name"
                                            className="custom-input w-full"
                                        />
                                    </div>
                                    <ErrorMessage name="company_name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                
                                <div className="form-group mt-4">
  <label className="form-label">Country</label>

  <div
    className="
      mt-3
      !p-0
     custom-input
     flex justify-center items-center
    "
  >
    {isClient && (
      <Select
        options={countryOptions}
        value={countryOptions.find((option) => option.label === values.country)}
        onChange={(selectedOption) => setFieldValue("country", selectedOption.label)}
        placeholder="Select your country"
        className="w-full bg-transparent border-none outline-none focus:outline-none"
        styles={{
          control: (base) => ({
            ...base,
            border: "none",
            boxShadow: "none",
            background: "transparent",
            "&:hover": { border: "none" },
          }),
        }}
      />
    )}
  </div>

  <ErrorMessage
    name="country"
    component="div"
    className="text-red-500 text-sm mt-1"
  />
</div>

                                <div className="from-group mt-4">
                                    <label htmlFor="" className="form-label">Your Message</label>
                                    <div className="mt-3">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            type="text"
                                            placeholder="Your Text"
                                            className="custom-input is-textarea w-full !h-[6rem] resize-none overflow-y-auto"
                                        />
                                    </div>
                                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                
                                <button type="submit" className="button-submit w-full my-8" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : "Get in Touch"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

