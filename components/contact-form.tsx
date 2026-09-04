"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" size={28} />
        <div>
          <h3>Thank you.</h3>
          <p>
            Your asset challenge has been sent to Birdseye. Our team will review the information
            and contact you using your preferred method.
          </p>
          <button className="text-link" onClick={() => setSent(false)} type="button">Send another enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" required type="text" />
        </label>
        <label>
          Work email
          <input name="email" required type="email" />
        </label>
        <label>
          Company
          <input name="company" required type="text" />
        </label>
        <label>
          Project location
          <input name="location" type="text" />
        </label>
      </div>
      <label>
        What is difficult to inspect, measure, digitize or assess?
        <textarea name="challenge" required rows={6} />
      </label>
      <button className="button" type="submit">
        Discuss My Asset Challenge <ArrowRight aria-hidden="true" size={18} />
      </button>
      <p className="form-note">You do not need to select a technology or product.</p>
    </form>
  );
}
