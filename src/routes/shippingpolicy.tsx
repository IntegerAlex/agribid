import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shippingpolicy")({
  component: ShippingPolicyComponent,
});

function ShippingPolicyComponent() {
  return (
    <div className="font-agriox text-agriox-primary bg-agriox-base container mx-auto min-h-screen px-4 py-8 pt-20">
      <h1 className="text-agriox-primary animate-fade-in-up mb-6 text-center text-4xl font-bold md:text-5xl">
        Shipping Policy
      </h1>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        At Agribid, we are committed to providing you with a seamless and
        efficient experience when it comes to shipping your agricultural
        products. This Shipping Information page outlines the key details
        related to shipping on our platform.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Delivery Partners
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        We work with trusted and reliable delivery partners to ensure the safe
        and timely transportation of your agricultural commodities. Our partners
        are chosen for their experience and expertise in handling agricultural
        products.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Shipping Regions
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid currently facilitates shipping services across various regions.
        Whether you are a farmer looking to transport your produce to a buyer or
        an aggregator in need of distribution, we offer services that cater to
        your specific location.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Shipping Costs
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Shipping costs are determined by several factors, including the
        distance, quantity, and type of agricultural products being transported.
        Agribid strives to provide competitive and transparent pricing, so you
        can make informed decisions about shipping your commodities.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Shipping Duration
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        The time it takes for your products to reach their destination depends
        on several variables, such as the delivery location, transportation
        mode, and the quantity of products being shipped. We aim to provide
        estimated delivery times to give you a general idea of when to expect
        your products.
      </p>

      <h2 className="text-agriox-secondary animate-fade-in-up mb-4 text-3xl font-semibold md:text-4xl">
        Packaging Guidelines
      </h2>
      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Proper packaging is crucial to the safety and quality of your
        agricultural products during transportation. We encourage all users to
        adhere to our packaging guidelines, which help prevent damage and
        spoilage during shipping.
      </p>

      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Agribid is committed to providing the best shipping services for all our
        users. We believe that efficient and reliable shipping is essential to
        the success of agricultural trade. Our platform aims to be a bridge
        between farmers, aggregators, and buyers, facilitating the
        transportation of agricultural products while maintaining the quality
        and freshness that our customers expect.
      </p>

      <p className="animate-fade-in-up-slow mb-4 text-lg">
        If you have any questions or need further information about our shipping
        services, please do not hesitate to contact us.
      </p>

      <p className="animate-fade-in-up-slow mb-4 text-lg">
        Thank you for choosing Agribid for your agricultural trade and shipping
        needs. We are dedicated to providing you with a secure and efficient
        shipping experience.
      </p>
    </div>
  );
}
