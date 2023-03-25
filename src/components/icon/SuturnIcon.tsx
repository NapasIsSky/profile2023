import React from "react";

interface ISuturnIcon {
  className?: string;
}

const SuturnIcon: React.FC<ISuturnIcon> = (props) => {
  const { className } = props;

  return (
    <svg
      width="225"
      height="265"
      viewBox="0 0 225 265"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="42" cy="115" r="150" fill="#5B5B52" />
      <path
        d="M122.002 209.653C-1.99837 136.153 -66.9994 -8.34683 -60.9996 -17.8468C-54.9998 -27.3468 -44.4996 -10.3468 -44.4996 -10.3468L-26.4997 -17.8468C-26.4997 -17.8468 -71.4998 -53.4468 -78.4998 -50.8468C-85.4998 -48.2469 -86.4999 -56.3468 -90.4998 -43.3468C-94.4997 -30.3468 -59.3986 96.9532 15.0014 166.153C108.001 252.653 173.478 270.203 214.002 257.153C243.502 247.653 201.502 196.653 177.501 184.653L166.501 201.153C216.001 242.653 144.002 227.653 122.002 209.653Z"
        fill="#5F77A3"
      />
    </svg>
  );
};

export default SuturnIcon;
