import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/returnpolicy")({
  component: ReturnPolicyComponent,
});

function ReturnPolicyComponent() {
  return (
    <div className="font-agriox text-agriox-primary bg-agriox-base container mx-auto min-h-screen px-4 py-8 pt-20">
      <h1 className="text-agriox-primary animate-fade-in-up mb-6 text-center text-4xl font-bold md:text-5xl">
        Return Policy
      </h1>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        At Agribid, we strive to ensure your complete satisfaction with every
        transaction. If, for any reason, you are not entirely pleased with your
        purchase, we are here to help. Please review our Return Policy to
        understand your rights and obligations when it comes to returning
        products you have purchased through our platform.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Eligible Products for Return
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We accept returns for eligible products that meet the following
        conditions:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          The product must be in its original packaging and undamaged.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          It should be in a resalable condition.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Products must be within their stated shelf life or use-by date.
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Non-Returnable Items
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Certain items are non-returnable, including:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">Perishable goods.</li>
        <li className="animate-fade-in-up-slow mb-3">
          Items that have been opened, used, or tampered with.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Products with damaged packaging.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Items that are past their shelf life or use-by date.
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Return Request Process
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        If you believe your product is eligible for return, please follow these
        steps:
      </p>
      <ul className="text-agriox-accent mb-6 list-disc pl-5 leading-relaxed">
        <li className="animate-fade-in-up-slow mb-3">
          Contact our Customer Support team at support@agribindia.com within [X]
          days of receiving your order.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Provide details about the product and the reason for return.
        </li>
        <li className="animate-fade-in-up-slow mb-3">
          Our team will assess your request and provide guidance on the next
          steps.
        </li>
      </ul>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Inspection and Approval
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Once your return request is received, we will inspect the product to
        ensure it meets the return criteria mentioned above. If approved, you
        will receive instructions on how to return the product.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Refund or Replacement
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        After we receive and inspect the returned product, you have the option
        for a refund or a replacement, depending on product availability and
        your preference.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Return Shipping
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        The cost of return shipping may be your responsibility unless the return
        is due to an error on our part. In such cases, we will provide a prepaid
        shipping label.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Processing Time
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        The processing time for returns may vary based on factors such as the
        nature of the product and the shipping time. We aim to complete the
        process as swiftly as possible, and our team will keep you updated
        throughout.
      </p>

      <p className="animate-fade-in-up-slow mb-4 text-lg">
        If you have any questions or need assistance with a return request,
        please reach out to our Customer Support team at support@agribindia.com.
        We are here to assist you.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Policy Updates
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Please note that our Return Policy is subject to periodic updates. It is
        advisable to review this policy before making a return request to ensure
        that you are aware of any changes.
      </p>
    </div>
  );
}
