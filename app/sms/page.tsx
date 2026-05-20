export const metadata = {
  title: "SMS Terms & Privacy | Y2K Group LLC",
  description:
    "SMS terms, consent, and privacy disclosure for Y2K Group LLC's business text messaging.",
};

export default function SmsTermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <h1 className="mb-8 text-4xl font-bold">SMS Terms &amp; Privacy</h1>

      <p className="mb-6 text-lg text-slate-300">
        You may contact Y2K Group LLC via text message at{" "}
        <strong>+1 (938) 348-4842</strong>. By sending us an SMS, you consent to
        receive SMS replies from us related to your inquiry, account,
        scheduling, and support.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        What we may text you about
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-slate-300">
        <li>Replies to questions or service requests you initiated</li>
        <li>Appointment confirmations and reminders</li>
        <li>Account, billing, or service notifications relevant to you</li>
        <li>Follow-ups to ongoing conversations</li>
      </ul>
      <p className="mb-6 text-slate-300">
        We do not send marketing or promotional text messages, and we do not
        share your phone number with third parties for marketing.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Message frequency</h2>
      <p className="mb-6 text-slate-300">
        Message frequency varies based on your inquiries. Standard message and
        data rates from your carrier may apply.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Opt-out</h2>
      <p className="mb-6 text-slate-300">
        Reply <strong>STOP</strong> at any time to opt out of all future SMS
        from Y2K Group LLC. You will receive one confirmation message and no
        further texts.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Help</h2>
      <p className="mb-6 text-slate-300">
        Reply <strong>HELP</strong> for assistance, or contact us at{" "}
        <a
          href="mailto:info@y2kgroupit.com"
          className="text-blue-400 underline"
        >
          info@y2kgroupit.com
        </a>{" "}
        or <strong>+1 (938) 348-4842</strong>.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Privacy</h2>
      <p className="mb-6 text-slate-300">
        Phone numbers and message contents are stored only for the purpose of
        responding to your inquiry and maintaining a record of our
        communication with you. See our{" "}
        <a href="/privacy" className="text-blue-400 underline">
          Privacy Policy
        </a>{" "}
        for full details.
      </p>

      <p className="mt-12 text-sm text-slate-400">
        Last updated: May 20, 2026
      </p>
    </main>
  );
}
