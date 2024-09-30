import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        Created by <span style={styles.creator}>Amogh</span>,{" "}
        <span style={styles.creator}>Aaditya</span>, and{" "}
        <span style={styles.creator}>Sovan</span>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#CBE4DE",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #2C3333",
  },
  footerText: {
    color: "#2C3333",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center",
  },
  creator: {
    color: "#2C3333",
    fontFamily: "Georgia, serif",
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "4px",
    marginRight: "4px",
  },
};

export default Footer;
