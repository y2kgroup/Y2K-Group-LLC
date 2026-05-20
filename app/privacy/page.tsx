export const metadata = {
  title: "Privacy Policy | Y2K Group LLC",
  description:
    "How Y2K Group LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <p className="mb-6 text-slate-300">
        Y2K Group LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        respects your privacy. This Privacy Policy explains what information we
        collect, how we use it, and the choices you have regarding it.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Information we collect
      </h2>
      <p className="mb-4 text-slate-300">
        We collect information you provide directly to us, such as when you:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-slate-300">
        <li>Submit our contact form (name, email, phone, and message)</li>
        <li>Send us an email or text message</li>
        <li>Call us</li>
        <li>Engage our services as a customer</li>
      </ul>
      <p className="mb-6 text-slate-300">
        We may also automatically collect limited technical information when you
        visit our website, including your IP address, browser type, pages
        viewed, and time of visit, for security and analytics purposes.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        How we use your information
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-slate-300">
        <li>Respond to your inquiries and provide the services you request</li>
        <li>
          Communicate with you about scheduling, billing, support, and other
          account matters
        </li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">SMS and text messaging</h2>
      <p className="mb-6 text-slate-300">
        Phone numbers obtained for SMS communication are used solely to
        communicate with you and are not shared with third parties for marketing
        purposes. SMS opt-in consent is not shared with any third party. See our{" "}
        <a href="/sms" className="text-blue-400 underline">
          SMS Terms
        </a>{" "}
        for details on text messaging.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Information sharing</h2>
      <p className="mb-6 text-slate-300">
        We do not sell your personal information. We may share information with
        trusted service providers who help us operate our business (such as
        hosting, communications, or payment providers), and only to the extent
        necessary for them to provide their services. We may also disclose
        information when required by law.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Data retention</h2>
      <p className="mb-6 text-slate-300">
        We retain your information only as long as needed to provide our
        services, respond to your inquiry, comply with legal requirements, or
        resolve disputes.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Your choices</h2>
      <p className="mb-6 text-slate-300">
        You can request access to, correction of, or deletion of your personal
        information at any time by emailing{" "}
        <a
          href="mailto:info@y2kgroupit.com"
          className="text-blue-400 underline"
        >
          info@y2kgroupit.com
        </a>
        .
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Contact us</h2>
      <p className="mb-6 text-slate-300">
        Y2K Group LLC
        <br />
        6706 Old Stage Rd
        <br />
        Rockville, MD 20852
        <br />
        Email:{" "}
        <a
          href="mailto:info@y2kgroupit.com"
          className="text-blue-400 underline"
        >
          info@y2kgroupit.com
        </a>
        <br />
        Phone: +1 (240) 869-3917
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Changes to this policy</h2>
      <p className="mb-6 text-slate-300">
        We may update this Privacy Policy from time to time. We will post the
        revised version on this page with an updated &quot;Last updated&quot;
        date.
      </p>

      <p className="mt-12 text-sm text-slate-400">
        Last updated: May 20, 2026
      </p>
    </main>
  );
}
