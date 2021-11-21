import React from "react";

export const filterArrowDownSvg = (isDisabled = false) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    key="filter-down"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" />
      <g>
        <path d="M0 0H24V24H0z" transform="rotate(-90 12 12)" />
        <path
          fill={isDisabled ? "#9a9a9a" : "#343434"}
          fillRule="nonzero"
          d="M14.634 5.228c.313-.304.82-.304 1.132 0 .284.276.31.708.077 1.013l-.077.087L9.932 12l5.834 5.672c.284.276.31.708.077 1.013l-.077.087c-.284.276-.729.301-1.042.076l-.09-.076-6.4-6.222c-.284-.276-.31-.708-.077-1.013l.077-.087 6.4-6.222z"
          transform="rotate(-90 12 12)"
        />
      </g>
    </g>
  </svg>
);

export const filterArrowUpSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    key="filter-up"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" />
      <g>
        <path d="M0 0H24V24H0z" transform="rotate(-90 12 12)" />
        <path
          fill="#343434"
          fillRule="nonzero"
          d="M9.366 5.228c-.313-.304-.82-.304-1.132 0-.284.276-.31.708-.077 1.013l.077.087L14.068 12l-5.834 5.672c-.284.276-.31.708-.077 1.013l.077.087c.284.276.729.301 1.042.076l.09-.076 6.4-6.222c.284-.276.31-.708.077-1.013l-.077-.087-6.4-6.222z"
          transform="rotate(-90 12 12)"
        />
      </g>
    </g>
  </svg>
);
