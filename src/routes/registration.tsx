import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/registration")({
  component: RegistrationComponent,
});

function RegistrationComponent() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration requested for mobile number: ${mobileNumber}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(value);
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
      style={{
        background: "linear-gradient(to bottom right, #f1cf69, #ffffff)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Floating Icons */}
      <div className="animate-float-slow pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🌱</div>
        <div className="absolute right-12 bottom-16 text-5xl">🌼</div>
        <div className="absolute top-1/3 right-1/4 text-7xl">🍃</div>
      </div>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="z-10 w-full max-w-md rounded-xl p-8 shadow-xl backdrop-blur-sm"
        style={{ background: "#ffffffcc", border: "1px solid #6d8c54" }}
      >
        <h1
          className="mb-6 text-center text-3xl font-bold"
          style={{ color: "#334b35" }}
        >
          Registration
        </h1>

        <label
          htmlFor="mobileNumber"
          className="mb-2 block text-sm font-medium"
          style={{ color: "#6d8c54" }}
        >
          Mobile Number
        </label>

        <input
          type="text"
          inputMode="numeric"
          maxLength={10}
          value={mobileNumber}
          onChange={handleInputChange}
          placeholder="Enter 10-digit number"
          className="mb-4 w-full rounded-md border p-3 focus:ring-2 focus:outline-none"
          style={{
            borderColor: "#687469",
            color: "#334b35",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />

        <button
          type="submit"
          disabled={mobileNumber.length !== 10}
          className="w-full rounded-md py-3 font-semibold transition-transform hover:scale-105 disabled:opacity-50"
          style={{
            backgroundColor: "#334b35",
            color: "#ffffff",
          }}
        >
          Register
        </button>
      </form>

      {/* Floating animation */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float-slow > div {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
