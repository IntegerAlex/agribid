import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#334b35",
        color: "#ffffff",
      }}
      className="font-agriox"
    >
      <div
        className="footer-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Logo + About */}
          <div style={{ flex: "1 1 250px" }}>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "16px" }}>
                <img
                  src="/agribid.png"
                  alt="AgriBid Logo"
                  style={{
                    width: "140px",
                    height: "40px",
                    borderRadius: "4px",
                    backgroundColor: "#f1cf69",
                    padding: "5px",
                  }}
                />
              </div>
              <h4 style={{ color: "#f1cf69", marginBottom: "8px" }}>
                Corporate Office
              </h4>
              <p style={{ color: "#dddddd", marginBottom: "12px" }}>
                Agribid Private Limited,
                <br /> B-204 Kanakia Wall Street Chakala,
                <br /> Andheri (E) Mumbai - 400093
              </p>
              <div style={{ marginTop: "20px", fontSize: "14px" }}>
                <p
                  style={{
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Phone size={16} style={{ marginRight: 8 }} />
                  <a
                    href="tel:02269719417"
                    style={{ color: "#f1cf69", textDecoration: "none" }}
                  >
                    022 6971 9417
                  </a>
                </p>
                <p
                  style={{
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Mail size={16} style={{ marginRight: 8 }} />
                  <a
                    href="mailto:support@agribidindia.com"
                    style={{ color: "#f1cf69", textDecoration: "none" }}
                  >
                    support@agribidindia.com
                  </a>
                </p>
              </div>
              {/* Social Media Icons */}
              <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <a href="#" style={{ color: "#f1cf69" }} aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" style={{ color: "#f1cf69" }} aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" style={{ color: "#f1cf69" }} aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" style={{ color: "#f1cf69" }} aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Grievance Officer Section */}
          <div style={{ flex: "1 1 250px" }}>
            <h4 style={{ color: "#f1cf69", marginBottom: "16px" }}>
              Grievance Officer
            </h4>
            <p
              style={{
                color: "#dddddd",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Amit Mishra
            </p>
            <p
              style={{
                color: "#dddddd",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Mail size={16} style={{ marginRight: 8 }} />
              <a
                href="mailto:grievance@agribidindia.com"
                style={{ color: "#f1cf69", textDecoration: "none" }}
              >
                grievance@agribidindia.com
              </a>
            </p>
          </div>

          {/* Useful Links Section */}
          <div style={{ flex: "1 1 180px" }}>
            <h4 style={{ color: "#f1cf69", marginBottom: "16px" }}>
              Useful Links
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flex: "1 1 45%",
                }}
              >
                {["Home", "FPO", "Market Place", "About Us", "Mandi Price"].map(
                  (item, idx) => (
                    <li key={idx} style={{ marginBottom: "10px" }}>
                      <a
                        href="#"
                        style={{ color: "#ffffff", textDecoration: "none" }}
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flex: "1 1 45%",
                }}
              >
                {[
                  {
                    label: "Privacy Policy",
                    href: "/privacypolicy",
                  },
                  {
                    label: "T & C",
                    href: "/tandc",
                  },
                  {
                    label: "Return Policy",
                    href: "/returnpolicy",
                  },
                  {
                    label: "Shipping Policy",
                    href: "/shippingpolicy",
                  },
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "10px" }}>
                    <a
                      href={item.href}
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ flex: "1 1 300px" }}>
            <h4 style={{ color: "#f1cf69", marginBottom: "16px" }}>
              Newsletter
            </h4>
            <p style={{ marginBottom: "16px", color: "#cccccc" }}>
              Sign up now to get daily latest news & updates from us.
            </p>
            <form style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: "1 1 60%",
                  padding: "10px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f1cf69",
                  color: "#334b35",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
