"use client";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('');
    setFormMessage('');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Your message has been sent successfully!');
      } else {
        setFormStatus('error');
        setFormMessage('There was an issue sending the message. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('There was an issue sending the message. Please try again.');
    }
  };

  return (
    <FadeIn>
      <form className="" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="b80ed2d6-e70c-4860-8a2c-be137a53c0bf" />
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$25K – $50K" name="budget" value="25" />
              <RadioInput label="$50K – $100K" name="budget" value="50" />
              <RadioInput label="$100K – $150K" name="budget" value="100" />
              <RadioInput label="More than $150K" name="budget" value="150" />
            </div>
          </div> */}
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
      {formStatus && (
        <div className={`mt-4 ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {formMessage}
        </div>
      )}
    </FadeIn>
  );
};

export default ContactForm;
