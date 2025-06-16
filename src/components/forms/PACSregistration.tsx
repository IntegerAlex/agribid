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

interface PACSFormData {
  pacsName: string;
  mobileNumber: string;
  registrationNumber: string;
  email: string;
  address: string;
  dateOfRegistration: string;
  contactPersonFullName: string;
  gstNumber: string;
  city: string;
  taluka: string;
  district: string;
  state: string;
  pinCode: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  confirmBankAccountNumber: string;
  ifscCode: string;
  bankBranchName: string;
  password: string;
  confirmPassword: string;
  commoditySelections: Record<string, string | null>;
  panCardFile: File | null;
  gstFile: File | null;
  certificateOfIncorporationFile: File | null;
  promoterListFile: File | null;
  bankCertificateFile: File | null;
  workingExplanationFile: File | null;
  byLawSocietyFile: File | null;
  registrationChargesProofFile: File | null;
  affidavitIndemnityBondFile: File | null;
  presidentAadharFile: File | null;
  societyAddressProofFile: File | null;
}

const PACSregistration = () => {
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

  const [formData, setFormData] = useState<PACSFormData>({
    pacsName: "",
    mobileNumber: "",
    registrationNumber: "",
    email: "",
    address: "",
    dateOfRegistration: "",
    contactPersonFullName: "",
    gstNumber: "",
    city: "",
    taluka: "",
    district: "",
    state: "",
    pinCode: "",
    bankName: "",
    bankAccountName: "",
    bankAccountNumber: "",
    confirmBankAccountNumber: "",
    ifscCode: "",
    bankBranchName: "",
    password: "",
    confirmPassword: "",
    commoditySelections: Object.fromEntries(
      Object.keys(commodityData).map((key) => [key, null]),
    ),
    panCardFile: null,
    gstFile: null,
    certificateOfIncorporationFile: null,
    promoterListFile: null,
    bankCertificateFile: null,
    workingExplanationFile: null,
    byLawSocietyFile: null,
    registrationChargesProofFile: null,
    affidavitIndemnityBondFile: null,
    presidentAadharFile: null,
    societyAddressProofFile: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof PACSFormData,
  ) => {
    if (e.target.files) {
      setFormData({ ...formData, [fieldName]: e.target.files[0] });
    }
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
          title="AGRIBID - PACS EMPANELMENT FORM"
          content="Please fill this form so that we can empanel you"
        />

        <form onSubmit={handleSubmit} className="mt-4 space-y-2 text-left">
          {/* PACS Information Section */}
          <section
            aria-labelledby="pacs-info-heading"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <h2
              id="pacs-info-heading"
              className="col-span-full mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
            >
              PACS Information
            </h2>

            <div>
              <label
                htmlFor="pacsName"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Name of the PACS <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pacsName"
                name="pacsName"
                value={formData.pacsName}
                onChange={handleChange}
                placeholder="Enter name of the pacs"
                required
                aria-label="Name of the PACS"
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
                htmlFor="taluka"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                Taluka
              </label>
              <input
                type="text"
                id="taluka"
                name="taluka"
                value={formData.taluka}
                onChange={handleChange}
                placeholder="Enter Taluka"
                aria-label="Taluka"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="district"
                className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Enter District"
                aria-label="District"
                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
              />
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
            <p className="mb-4 text-sm text-[var(--agriox-color-1)]">
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
                  onChange={(e) => handleFileChange(e, "panCardFile")}
                  required
                  aria-label="PAN Card Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="gstFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  GST File
                </label>
                <input
                  type="file"
                  id="gstFile"
                  name="gstFile"
                  onChange={(e) => handleFileChange(e, "gstFile")}
                  aria-label="GST File Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="certificateOfIncorporationFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Certificate of Incorporation{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="certificateOfIncorporationFile"
                  name="certificateOfIncorporationFile"
                  onChange={(e) =>
                    handleFileChange(e, "certificateOfIncorporationFile")
                  }
                  required
                  aria-label="Certificate of Incorporation Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="promoterListFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Promoter List <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="promoterListFile"
                  name="promoterListFile"
                  onChange={(e) => handleFileChange(e, "promoterListFile")}
                  required
                  aria-label="Promoter List Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="bankCertificateFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Bank Certificate <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="bankCertificateFile"
                  name="bankCertificateFile"
                  onChange={(e) => handleFileChange(e, "bankCertificateFile")}
                  required
                  aria-label="Bank Certificate Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="workingExplanationFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Working Explanation <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="workingExplanationFile"
                  name="workingExplanationFile"
                  onChange={(e) =>
                    handleFileChange(e, "workingExplanationFile")
                  }
                  required
                  aria-label="Working Explanation Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="byLawSocietyFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  By-Law Society <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="byLawSocietyFile"
                  name="byLawSocietyFile"
                  onChange={(e) => handleFileChange(e, "byLawSocietyFile")}
                  required
                  aria-label="By-Law Society Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="registrationChargesProofFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Registration Charges Proof{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="registrationChargesProofFile"
                  name="registrationChargesProofFile"
                  onChange={(e) =>
                    handleFileChange(e, "registrationChargesProofFile")
                  }
                  required
                  aria-label="Registration Charges Proof Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="affidavitIndemnityBondFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Affidavit Indemnity Bond{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="affidavitIndemnityBondFile"
                  name="affidavitIndemnityBondFile"
                  onChange={(e) =>
                    handleFileChange(e, "affidavitIndemnityBondFile")
                  }
                  required
                  aria-label="Affidavit Indemnity Bond Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="presidentAadharFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  President Aadhar <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="presidentAadharFile"
                  name="presidentAadharFile"
                  onChange={(e) => handleFileChange(e, "presidentAadharFile")}
                  required
                  aria-label="President Aadhar Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="societyAddressProofFile"
                  className="mb-1 block text-sm font-medium text-[var(--agriox-primary)]"
                >
                  Society Address Proof <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="societyAddressProofFile"
                  name="societyAddressProofFile"
                  onChange={(e) =>
                    handleFileChange(e, "societyAddressProofFile")
                  }
                  required
                  aria-label="Society Address Proof Upload"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-[var(--agriox-primary)] transition duration-200 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--agriox-secondary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--agriox-primary)] focus:border-[var(--agriox-primary)] focus:ring-[var(--agriox-primary)]"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-[var(--agriox-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--agriox-secondary)] hover:shadow-xl"
              aria-label="Submit Registration"
            >
              Register PACS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PACSregistration;
