import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const InstagramIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    {/* Menggunakan path solid untuk TikTok agar lebih akurat */}
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.84 1.54-4.28 2.15-6.61 1.73-2.61-.47-4.88-2.12-6.02-4.49-1.04-2.15-1.11-4.71-.16-6.93 1.05-2.45 3.32-4.32 5.92-4.75 1.17-.19 2.37-.15 3.53.07v4.06c-1.39-.42-2.92-.1-4.08.76-.94.7-1.48 1.84-1.5 3.01-.02 1.48.81 2.91 2.12 3.52 1.35.63 3.04.47 4.19-.48 1.12-.92 1.7-2.34 1.68-3.81.02-5.75.02-11.51.02-17.26z" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    {/* Menggunakan path solid untuk YouTube agar terlihat seperti logo asli */}
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    {/* Menggunakan path solid untuk WhatsApp */}
    <path d="M11.95 0C5.352 0 .002 5.353.002 11.955c0 2.106.549 4.159 1.593 5.973L0 24l6.23-1.636a11.897 11.897 0 0 0 5.72 1.455h.005c6.596 0 11.948-5.354 11.948-11.954C23.903 5.26 18.548 0 11.95 0zm0 21.802h-.005a9.907 9.907 0 0 1-5.045-1.371l-.361-.214-3.75.983.998-3.657-.235-.373A9.912 9.912 0 0 1 1.996 11.95c0-5.5 4.475-9.972 9.98-9.972 5.501 0 9.973 4.475 9.973 9.972 0 5.5-4.473 9.972-9.972 9.972zm5.474-7.48c-.3-.15-1.776-.877-2.052-.977-.275-.1-.476-.15-.676.15-.201.301-.777.978-.952 1.178-.176.2-.352.226-.653.076-2.127-1.066-3.486-2.015-4.831-4.32-.176-.302.174-.277.752-1.428.075-.15.037-.276-.038-.426-.075-.15-.676-1.628-.926-2.228-.242-.581-.488-.503-.676-.512-.176-.009-.376-.009-.576-.009s-.527.075-.802.376c-.276.302-1.053 1.03-1.053 2.511 0 1.48 1.077 2.912 1.228 3.113.15.2 2.126 3.245 5.15 4.549 2.052.883 2.766.786 3.253.712.56-.086 1.776-.726 2.027-1.428.251-.702.251-1.304.176-1.429-.075-.125-.276-.2-.576-.35z" />
  </svg>
);