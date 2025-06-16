import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termsandcondition")({
  component: TermsAndConditionsComponent,
});

function TermsAndConditionsComponent() {
  return (
    <div className="font-agriox text-agriox-primary bg-agriox-base container mx-auto min-h-screen px-4 py-8 pt-20">
      <h1 className="text-agriox-primary animate-fade-in-up mb-6 text-center text-4xl font-bold md:text-5xl">
        Terms & Conditions
      </h1>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Welcome to Agribid, an online platform dedicated to simplifying
        agricultural trade. Before you explore and benefit from our services,
        please take a moment to review these Terms and Conditions carefully.
        Your use of our website is subject to the following terms and
        conditions:
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Eligibility
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        You must be at least 18 years of age or the legal age in your
        jurisdiction to use our services. By using Agribid, you represent and
        warrant that you have the legal capacity to enter into these Terms and
        Conditions.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Privacy
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Your privacy is important to us. Please review our Privacy Policy to
        understand how we collect, use, and protect your personal information.
        By using our platform, you consent to the data practices described in
        our Privacy Policy.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Use of the Platform
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        You may use Agribid for personal or business purposes in accordance with
        these Terms and Conditions. You agree not to use our platform for any
        unlawful or prohibited activities.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Account Registration
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        To access certain features of our platform, you may be required to
        register an account. You are responsible for maintaining the
        confidentiality of your account details and for any activities that
        occur under your account. Please notify us immediately of any
        unauthorized use of your account.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Intellectual Property
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        All content on Agribid, including text, images, logos, software, and
        other materials, is protected by intellectual property rights and is
        owned by or licensed to Agribid. You may not use, reproduce, or
        distribute our content without our explicit written permission.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Limited Liability
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid serves as a platform connecting users, including farmers,
        aggregators, and buyers. We are not responsible for the quality, safety,
        or legality of the products or services listed on our platform. Any
        transactions or agreements made between users are solely the
        responsibility of the parties involved.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Termination
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid reserves the right to terminate or suspend your account or
        access to our services at our discretion, without notice, if we believe
        you have violated these Terms and Conditions or engaged in
        inappropriate, fraudulent, or illegal activities.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Changes to Terms
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We may modify these Terms and Conditions at any time. Such modifications
        will become effective upon posting a revised version on our platform. It
        is your responsibility to review these terms periodically. Your
        continued use of our platform after changes indicate your acceptance of
        the modified terms.
      </p>

      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We appreciate your choice of Agribid for your agricultural trade needs.
        These Terms and Conditions are designed to ensure a secure and
        productive experience on our platform. If you have any questions or
        require clarification about any aspect of these terms, please do not
        hesitate to reach out to us.
      </p>
    </div>
  );
}
