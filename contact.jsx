import { useState } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const {
    formData,
    errors,
    handleChange,
    validate,
    resetForm,
  } = useForm({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");
    setSubmitError("");

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);

      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      setSuccessMessage(
        "Your form has been submitted successfully!"
      );

      resetForm();
    } catch (error) {
      setSubmitError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Contact Us</h2>

            {successMessage && (
              <div className="alert alert-success">
                {successMessage}
              </div>
            )}

            {submitError && (
              <div className="alert alert-danger">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                {errors.fullName && (
                  <small className="text-danger">
                    {errors.fullName}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <small className="text-danger">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />

                {errors.password && (
                  <small className="text-danger">
                    {errors.password}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message && (
                  <small className="text-danger">
                    {errors.message}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;