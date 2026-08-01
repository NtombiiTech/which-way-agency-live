"use client";

import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ProposalForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your project enquiry has been received, and our team will respond shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent.");
    }
  }

  return (
    <form className="proposal-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
        <Field label="Organisation" name="organisation" autoComplete="organization" required />
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Service</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Creative Solutions</option>
            <option>Brand Experiences</option>
            <option>Events and Activations</option>
            <option>Strategic Storytelling</option>
            <option>Community Impact</option>
            <option>Not sure yet</option>
          </select>
          <small>Choose the closest fit. We can refine it together.</small>
        </label>

        <label className="field">
          <span>Indicative budget</span>
          <select name="budget" defaultValue="">
            <option value="">Select a range</option>
            <option>Under R50,000</option>
            <option>R50,000 - R150,000</option>
            <option>R150,000 - R500,000</option>
            <option>R500,000+</option>
            <option>Budget not confirmed</option>
          </select>
          <small>A range helps us recommend the right scale.</small>
        </label>

        <Field label="Event or launch date" name="eventDate" type="date" />
        <Field label="Location" name="location" autoComplete="address-level2" />
      </div>

      <label className="field field-wide">
        <span>Tell us about the project</span>
        <textarea
          name="details"
          rows={7}
          minLength={20}
          required
          placeholder="What are you creating, who is it for, and what should the experience achieve?"
        />
        <small>Please include any important timing, audience or delivery requirements.</small>
      </label>

      <label className="honeypot" aria-hidden="true">
        Company website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "success" ? (
        <div className="form-message form-success" role="status">
          <CheckCircle weight="fill" aria-hidden="true" />
          <p>{message}</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-message form-error" role="alert">
          <WarningCircle weight="fill" aria-hidden="true" />
          <p>
            {message} You can also email us directly at{" "}
            <a href="mailto:info@whichwayagency.co.za">info@whichwayagency.co.za</a>.
          </p>
        </div>
      ) : null}

      <button className="button button-primary submit-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending enquiry..." : "Send enquiry"}
        {status !== "submitting" ? <ArrowRight weight="bold" aria-hidden="true" /> : null}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} required={required} />
    </label>
  );
}
