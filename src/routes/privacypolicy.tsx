import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacypolicy")({
  component: PrivacyPolicyComponent,
});

function PrivacyPolicyComponent() {
  return (
    <div className="font-agriox text-agriox-primary bg-agriox-base container mx-auto min-h-screen px-4 py-8 pt-20">
      <h1 className="text-agriox-primary animate-fade-in-up mb-6 text-center text-4xl font-bold md:text-5xl">
        Privacy Policy
      </h1>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Your Privacy Matters to Agribid Private Limited (AGRIBID).
      </p>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        At Agribid, your trust is our most valuable asset. We are committed to
        protecting your personal information and using it only in ways that you
        expect and authorize. This Privacy Policy outlines how we collect, use,
        and safeguard your information, ensuring that your data is handled with
        integrity, confidentiality, and transparency.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Our Privacy Commitment
      </h2>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Security and Confidentiality :
          </strong>{" "}
          We maintain rigorous standards of security and confidentiality to
          protect any personal information you share with us. Your data is
          managed with the utmost care and in accordance with best practices.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Minimal Data Collection :
          </strong>{" "}
          We collect only the data necessary to provide high-quality services.
          This includes keeping you informed about our products, services, and
          business opportunities, and effectively managing our operations.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">Authorized Access :</strong>{" "}
          Access to your personal information is restricted to authorized
          Agribid personnel who are trained in handling customer data
          responsibly. Any breach of our privacy standards will lead to
          disciplinary action.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">Non-Disclosure:</strong> Your
          information is never shared with external entities without your
          consent, except when required by law, or when previously disclosed to
          you through an agreement. We do not sell or rent your data.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Confidentiality Control :
          </strong>{" "}
          We maintain strict control over the confidentiality of your
          information. You can be assured that your data remains secure with us.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Third-Party Compliance :
          </strong>{" "}
          If we engage third-party service providers, we ensure that they comply
          with our strict privacy standards. These partners may be audited
          periodically to confirm compliance.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">Data Accuracy :</strong> We
          aim to keep your data accurate and up-to-date. We provide convenient
          access to your account information (unless restricted by law), and we
          promptly correct any reported errors.
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Payment Gateways
      </h2>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">Secure Transactions :</strong>{" "}
          We partner with secure and reputable payment gateways to ensure that
          your financial data is protected during transactions using
          industry-standard encryption and security protocols.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">Data Privacy :</strong> We do
          not store your payment information on our platform. Your sensitive
          financial data is securely transmitted to and processed by our trusted
          payment gateway partners.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Third-Party Payment Providers :
          </strong>{" "}
          During payment, you may be redirected to the platforms of our secure
          third-party providers. These providers are selected for their
          adherence to privacy and security best practices.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">
            Payment Gateway Partners :
          </strong>{" "}
          Our payment partners are responsible for securely processing your
          transactions. We only work with trusted providers who comply with
          regulatory standards to protect your information.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          <strong className="text-agriox-primary">User Responsibility :</strong>{" "}
          We encourage all users to remain vigilant when making online payments.
          Never share your payment details and always ensure you are on a secure
          network.
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Data Collection by Agribid
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        To deliver a seamless trading experience, Agribid may collect the
        following personal details:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">Full Name</li>
        <li className="animate-fade-in-up-slow mb-3">Address</li>
        <li className="animate-fade-in-up-slow mb-3">Contact Information</li>
        <li className="animate-fade-in-up-slow mb-3">
          PAN and Aadhaar Details
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Login Credentials for the Agribid website/app
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Financial details including payment instrument data
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Trading activity on Agribid platforms
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Other relevant trading information
        </li>
      </ul>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Sensitive personal information is protected as per applicable legal
        standards and is stored securely in Mumbai, India.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Purpose of Data Collection
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We use collected data to:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          Facilitate trading and transactions on our platform
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Enhance and personalize your experience
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Fulfill legal and regulatory obligations
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Communicate regarding transactions, services, and promotions
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Evaluate creditworthiness and share relevant data with financial
          institutions for trade financing
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Use of Cookies and Identifiers
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We use cookies and similar technologies to:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          Recognize users and tailor user experiences
        </li>
        <li className="animate-fade-in-up-slow mb-3">Save user preferences</li>
        <li className="animate-fade-in-up-slow mb-3">
          Improve platform functionality
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Prevent fraud and boost platform security
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Information Sharing with Third Parties
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid shares personal data only when necessary, such as:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          With banks and financial institutions for trade-related financing
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          With public or private agencies for auction participation
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          With vetted third-party providers for logistics, marketing,
          assessment, and payment processing under confidentiality agreements
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          During business mergers, transfers, or acquisitions
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          To comply with legal obligations and law enforcement requests
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Information Security
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid is committed to safeguarding your data through:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          Encryption and secure data transmission
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Physical, electronic, and procedural safeguards
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Identity verification processes before disclosure
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          A documented and enforced security policy
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Data Retention
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We retain your information for as long as necessary to provide services
        and meet legal requirements thereafter.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        User Rights
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        You have the right to access, correct, or withdraw your personal
        information at any time. However, please note that withdrawing certain
        information may impact our ability to offer services.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Policy Updates
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We may periodically update this Privacy Policy. We encourage you to
        review this document regularly to stay informed. Continued use of our
        services constitutes acceptance of any updates.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Contact Us
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        For any questions, feedback, or privacy concerns, please contact us:
      </p>
      <p className="mb-2 text-lg leading-relaxed">
        <strong className="text-agriox-primary">Agribid Private Limited</strong>
        <br />
        E-mail : support@agribindia.com
        <br />
        Address: B-204 Kanakia Wall Street, Chakala, Andheri (E), Mumbai -
        400093
        <br />
        Phone: 022 6971 9417
      </p>
    </div>
  );
}
