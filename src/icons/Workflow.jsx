import React from "react";

const Workflow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
  >
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <line x1="6" y1="9" x2="6" y2="12" />
    <line x1="18" y1="9" x2="18" y2="12" />
    <line x1="6" y1="12" x2="12" y2="15" />
    <line x1="18" y1="12" x2="12" y2="15" />
  </svg>
);

export default Workflow;
