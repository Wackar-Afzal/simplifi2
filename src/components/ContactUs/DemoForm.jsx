"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

// Yup validation schema
const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  business_email: Yup.string().email("Invalid email").required("Business Email is required"),
  department: Yup.string().required("Department is required"),
  message: Yup.string().required("Message is required"),
});

const DemoForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("/api/slack", {
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
        toast.error(data.error || "Failed to send message.");
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message.");
      setStatus({ error: error.message });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        business_email: "",
        department: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className="w-full"
    >
      {({ isSubmitting, status }) => (
        <Form className="space-y-4 w-full">
          <div>
            <Field type="text" name="first_name" placeholder="First Name" className="w-full input" />
            <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field type="text" name="last_name" placeholder="Last Name" className="w-full input" />
            <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field type="email" name="business_email" placeholder="Business Email" className="w-full input" />
            <ErrorMessage name="business_email" component="div" className="text-red-500 text-sm" />
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
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {status?.success && <p className="text-green-500">{status.success}</p>}
          {status?.error && <p className="text-red-500">{status.error}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default DemoForm;
