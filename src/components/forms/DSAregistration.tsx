import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import HeroSection from "@/components/about/HeroSection";

interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

interface DSAFormData {
  dsaName: string;
  mobileNumber: string;
  registrationNumber: string;
  email: string;
  address: string;
  dateOfRegistration: string;
  contactPersonFullName: string;
  gstNumber: string;
  city: string;
  state: string;
  pinCode: string;
  panNumber: string;
  numberOfDirectors: string;
  numberOfMembers: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  confirmBankAccountNumber: string;
  ifscCode: string;
  micrCode: string;
  bankBranchName: string;
  password: string;
  confirmPassword: string;
  commoditySelections: Record<string, string | null>;
  panCardFile: File | null;
}

const DSAregistration = () => {
  const commodityData = {
    Cereals: ["Wheat", "Rice", "Maize", "Barley", "Oats"],
    Fruits: ["Apple", "Banana", "Grape", "Mango", "Orange"],
    Nuts: ["Almond", "Cashew", "Pistachio", "Walnut"],
    "Processed Foods": ["Flour", "Bread", "Pasta", "Canned Goods"],
    Pulses: ["Lentils", "Chickpeas", "Beans", "Peas"],
    Spices: ["Cumin", "Turmeric", "Coriander", "Chilli"],
    Vegetables: ["Potato", "Tomato", "Onion", "Spinach", "Carrot"],
    Others: ["Other Agricultural Products"],
  };

  const [formData, setFormData] = useState<DSAFormData>({
    dsaName: "",
    mobileNumber: "",
    registrationNumber: "",
    email: "",
    address: "",
    dateOfRegistration: "",
    contactPersonFullName: "",
    gstNumber: "",
    city: "",
    state: "",
    pinCode: "",
    panNumber: "",
    numberOfDirectors: "",
    numberOfMembers: "",
    bankName: "",
    bankAccountName: "",
    bankAccountNumber: "",
    confirmBankAccountNumber: "",
    ifscCode: "",
    micrCode: "",
    bankBranchName: "",
    password: "",
    confirmPassword: "",
    commoditySelections: Object.fromEntries(
      Object.keys(commodityData).map((key) => [key, null]),
    ),
    panCardFile: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCommodityChange = (
    mainCommodity: string,
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      commoditySelections: {
        ...prevData.commoditySelections,
        [mainCommodity]:
          value === `-- Select ${mainCommodity} --` ? null : value,
      },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, panCardFile: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here
  };

  const cities = ["-- Select City --", "City A", "City B", "City C"]; // Placeholder data
  const states = ["-- Select State --", "State X", "State Y", "State Z"]; // Placeholder data

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-16"
      style={
        {
          "--agriox-font": "'DM Sans', sans-serif",
          "--agriox-font-2": "'Averia Sans Libre', cursive",
          "--agriox-primary": "#334b35",
          "--agriox-secondary": "#6d8c54",
          "--agriox-color-1": "#687469",
        } as CustomCSSProperties
      }
    >
      {/* Background Elements */}
      <div
        className="animate-fade-in-up-slow absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(var(--agriox-primary-rgb), 0.1) 0%, transparent 70%), radial-gradient(ellipse at top, rgba(var(--agriox-secondary-rgb), 0.1) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="animate-pulse-slow absolute inset-0 z-0 opacity-50"
        style={{ background: "url(/images/grain-pattern.png) repeat" }}
      ></div>

      <div className="animate-fade-in-up-slow relative z-10 h-full w-full rounded-none bg-white/80 p-4 shadow-none backdrop-blur-sm">
        <HeroSection
          title="AGRIBID - DSA EMPANELMENT FORM"
          content="Please fill this form so that we can empanel you and send you the MOU agreement copy"
        />

        <form onSubmit={handleSubmit} className="mt-4 space-y-2 text-left">
          {/* DSA Information Section */}
          <section
            aria-labelledby="dsa-info-heading"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <h2
              id="dsa-info-heading"
              className="col-span-full mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              DSA Information
            </h2>

            <div>
              <label
                htmlFor="dsaName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Name of the DSA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="dsaName"
                name="dsaName"
                value={formData.dsaName}
                onChange={handleChange}
                placeholder="Enter Name Of DSA"
                required
                aria-label="Name of the DSA"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="mobileNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                required
                aria-label="Mobile Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="registrationNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Registration Number
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="Enter Registration Number"
                aria-label="Registration Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Email id <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email ID"
                required
                aria-label="Email ID"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Full Address"
                required
                aria-label="Full Address"
                rows={3}
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="dateOfRegistration"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Date of Registration
              </label>
              <input
                type="date"
                id="dateOfRegistration"
                name="dateOfRegistration"
                value={formData.dateOfRegistration}
                onChange={handleChange}
                aria-label="Date of Registration"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="contactPersonFullName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Contact Person Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactPersonFullName"
                name="contactPersonFullName"
                value={formData.contactPersonFullName}
                onChange={handleChange}
                placeholder="Enter Contact Person's Full Name"
                required
                aria-label="Contact Person's Full Name"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="gstNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                GST Number
              </label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                placeholder="Enter GST Number"
                aria-label="GST Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                City <span className="text-red-500">*</span>
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                aria-label="City"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              >
                {cities.map((cityOption) => (
                  <option key={cityOption} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="state"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                State <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                aria-label="State"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              >
                {states.map((stateOption) => (
                  <option key={stateOption} value={stateOption}>
                    {stateOption}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="pinCode"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter Pin Code"
                required
                aria-label="Pin Code"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="panNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                PAN Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="Enter PAN Number"
                required
                aria-label="PAN Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="numberOfDirectors"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Number of Directors
              </label>
              <input
                type="number"
                id="numberOfDirectors"
                name="numberOfDirectors"
                value={formData.numberOfDirectors}
                onChange={handleChange}
                placeholder="Enter Number of Directors"
                aria-label="Number of Directors"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="numberOfMembers"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Number of Members
              </label>
              <input
                type="number"
                id="numberOfMembers"
                name="numberOfMembers"
                value={formData.numberOfMembers}
                onChange={handleChange}
                placeholder="Enter Number of Members"
                aria-label="Number of Members"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>
          </section>

          {/* Bank Details Section */}
          <section
            aria-labelledby="bank-details-heading"
            className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2"
          >
            <h2
              id="bank-details-heading"
              className="col-span-full mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Bank Details
            </h2>

            <div>
              <label
                htmlFor="bankName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Bank Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Enter Bank Name"
                required
                aria-label="Bank Name"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="bankAccountName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Bank Account Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bankAccountName"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleChange}
                placeholder="Enter Bank Account Name"
                required
                aria-label="Bank Account Name"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="bankAccountNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Bank Account Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                placeholder="Enter Bank Account Number"
                required
                aria-label="Bank Account Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="confirmBankAccountNumber"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Confirm Bank Account Number{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="confirmBankAccountNumber"
                name="confirmBankAccountNumber"
                value={formData.confirmBankAccountNumber}
                onChange={handleChange}
                placeholder="Confirm Bank Account Number"
                required
                aria-label="Confirm Bank Account Number"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="ifscCode"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                IFSC Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC Code"
                required
                aria-label="IFSC Code"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="micrCode"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                MICR Code
              </label>
              <input
                type="text"
                id="micrCode"
                name="micrCode"
                value={formData.micrCode}
                onChange={handleChange}
                placeholder="Enter MICR Code"
                aria-label="MICR Code"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="bankBranchName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Bank Branch Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bankBranchName"
                name="bankBranchName"
                value={formData.bankBranchName}
                onChange={handleChange}
                placeholder="Enter Bank Branch Name"
                required
                aria-label="Bank Branch Name"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>
          </section>

          {/* Security Section */}
          <section
            aria-labelledby="security-heading"
            className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2"
          >
            <h2
              id="security-heading"
              className="col-span-full mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Security
            </h2>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Enter Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                aria-label="Password"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                aria-label="Confirm Password"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>
          </section>

          {/* Commodity Types Section */}
          <section aria-labelledby="commodity-types-heading" className="pt-4">
            <h2
              id="commodity-types-heading"
              className="mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Commodity Types
            </h2>
            <p className="mb-4 text-sm text-[var(--agriox-primary)]">
              * Selecting at least one commodity is mandatory
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(commodityData).map(
                ([mainCommodity, subCommodities]) => (
                  <div key={mainCommodity}>
                    <label
                      htmlFor={mainCommodity}
                      className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                    >
                      {mainCommodity} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id={mainCommodity}
                      name={mainCommodity}
                      value={formData.commoditySelections[mainCommodity] || ""}
                      onChange={(e) => handleCommodityChange(mainCommodity, e)}
                      required
                      aria-label={mainCommodity}
                      className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                    >
                      <option value="">-- Select {mainCommodity} --</option>
                      {subCommodities.map((subCommodity) => (
                        <option key={subCommodity} value={subCommodity}>
                          {subCommodity}
                        </option>
                      ))}
                    </select>
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Documents Upload Section */}
          <section aria-labelledby="documents-heading" className="pt-4">
            <h2
              id="documents-heading"
              className="col-span-full mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Documents
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="panCardFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  PAN Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="panCardFile"
                  name="panCardFile"
                  onChange={handleFileChange}
                  required
                  aria-label="PAN Card Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
            </div>
          </section>

          {/* Corporate Office Information
          <section aria-labelledby="corporate-office-heading" className="pt-4">
            <h2
              id="corporate-office-heading"
              className="mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Corporate Office
            </h2>
            <address className="text-[var(--agriox-primary)] not-italic">
              Agribid Private Limited, B-204 Kanakia Wall Street Chakala,
              Andheri (E) Mumbai - 400093
              <br />
              Phone: 022 6971 9417
              <br />
              Email: support@agribidindia.com
            </address>
          </section> */}

          {/* Grievance Officer Information
          <section aria-labelledby="grievance-officer-heading" className="pt-4">
            <h2
              id="grievance-officer-heading"
              className="mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              Grievance Officer
            </h2>
            <p className="text-[var(--agriox-primary)]">
              Amit Mishra
              <br />
              Email: grievance@agribidindia.com
            </p>
          </section> */}

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-[var(--agriox-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--agriox-secondary)] hover:shadow-xl"
              aria-label="Submit Registration"
            >
              Register DSA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DSAregistration;
