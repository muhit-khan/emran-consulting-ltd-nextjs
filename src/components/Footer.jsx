"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import React, { useState } from "react";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
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
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="b80ed2d6-e70c-4860-8a2c-be137a53c0bf" />
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and inspiration.
      </p>
      <div className="relative mt-6">
        <input
          name="News_Letter_Email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
      {formStatus && <p className={`mt-2 text-sm ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>{formMessage}</p>}
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover>
              Emran Consulting Ltd.
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © Emran Consulting Ltd. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
