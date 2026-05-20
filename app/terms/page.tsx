export const metadata = {
  title: "Terms of Service | Y2K Group LLC",
  description:
    "The terms and conditions that govern your use of Y2K Group LLC's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-16 text-gray-900">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

      <p className="mb-6 text-gray-700">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of Y2K Group LLC&apos;s website at{" "}
        <a href="/" className="text-blue-400 underline">
          y2kgroupit.com
        </a>{" "}
        and any services we provide. By using our site or engaging our
        services, you agree to these Terms.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Use of the site</h2>
      <p className="mb-6 text-gray-700">
        You agree to use this site only for lawful purposes. You will not
        attempt to gain unauthorized access to any portion of the site, disrupt
        its operation, or use it to transmit malicious code.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Services</h2>
      <p className="mb-6 text-gray-700">
        Y2K Group LLC provides IT consulting, managed services, cloud
        solutions, cybersecurity, and related services. Specific terms,
        deliverables, and pricing for engaged services are governed by separate
        service agreements between Y2K Group LLC and the client.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Communications</h2>
      <p className="mb-6 text-gray-700">
        By submitting our contact form, calling us, or texting us, you consent
        to be contacted by Y2K Group LLC in response. SMS communication is
        governed by our{" "}
        <a href="/sms" className="text-blue-400 underline">
          SMS Terms
        </a>
        , and all personal information is handled in accordance with our{" "}
        <a href="/privacy" className="text-blue-400 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Intellectual property</h2>
      <p className="mb-6 text-gray-700">
        All content on this site, including text, graphics, logos, and code, is
        the property of Y2K Group LLC or its licensors and is protected by
        applicable copyright and trademark laws. You may not reproduce or
        redistribute it without our written permission.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Disclaimer</h2>
      <p className="mb-6 text-gray-700">
        The site and its content are provided &quot;as is&quot; without
        warranties of any kind, express or implied. Y2K Group LLC does not
        warrant that the site will be uninterrupted or error-free.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Limitation of liability</h2>
      <p className="mb-6 text-gray-700">
        To the fullest extent permitted by law, Y2K Group LLC shall not be
        liable for any indirect, incidental, special, or consequential damages
        arising out of or in connection with your use of the site.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Governing law</h2>
      <p className="mb-6 text-gray-700">
        These Terms are governed by the laws of the State of Maryland, without
        regard to its conflict of laws principles.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Contact</h2>
      <p className="mb-6 text-gray-700">
        Questions about these Terms?
        <br />
        Y2K Group LLC
        <br />
        6706 Old Stage Rd, Rockville, MD 20852
        <br />
        Email:{" "}
        <a
          href="mailto:info@y2kgroupit.com"
          className="text-blue-400 underline"
        >
          info@y2kgroupit.com
        </a>
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Changes to these terms</h2>
      <p className="mb-6 text-gray-700">
        We may update these Terms from time to time. The current version will
        always be posted on this page with an updated &quot;Last updated&quot;
        date.
      </p>

      <p className="mt-12 text-sm text-gray-500">
        Last updated: May 20, 2026
      </p>
    </main>
  );
}