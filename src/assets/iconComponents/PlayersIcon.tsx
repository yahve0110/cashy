type PlayersIconProps = {
  width?: number;
  height?: number;
  className?: string;
  active?: boolean;
};

const PlayersIcon = ({
  width = 32,
  height = 32,
  className = "",
  active = false,
}: PlayersIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_12487_16893)">
        <path
          d="M11.9185 18.907V31.159H2.07488C0.931063 31.159 0 30.228 0 29.0842V20.9819C0 19.8374 0.931063 18.907 2.07488 18.907L11.9185 18.907Z"
          fill={active ? "url(#paint0_linear_12487_16893)" : "#EDF4FF"}
        />
        <path
          d="M32 24.7223V29.0841C32 30.2279 31.0696 31.159 29.9258 31.159H20.0822V22.6481H29.9258C31.0696 22.6481 32 23.5785 32 24.7223Z"
          fill={active ? "url(#paint1_linear_12487_16893)" : "#8BA3CD"}
        />
        <path
          d="M21.9179 16.2841V31.1591H10V16.2841C10 15.1403 10.9304 14.2098 12.0743 14.2098H19.843C20.9874 14.2099 21.9179 15.1403 21.9179 16.2841Z"
          fill={active ? "url(#paint2_linear_12487_16893)" : "#C3DAFF"}
        />
        <path
          d="M20.9662 5.76656L19.2737 7.41656L19.6735 9.74606C19.7442 10.1578 19.5777 10.5658 19.2399 10.8116C19.049 10.9506 18.825 11.0213 18.6004 11.0213C18.427 11.0213 18.2531 10.9793 18.0923 10.8949L16 9.79488L13.9082 10.8949C13.5384 11.0889 13.0985 11.0576 12.7607 10.8116C12.4222 10.5664 12.2564 10.1578 12.327 9.74606L12.7262 7.41656L11.0337 5.76656C10.7346 5.475 10.6289 5.047 10.7584 4.64969C10.8872 4.25175 11.2245 3.96769 11.6381 3.90763L13.977 3.56788L15.0225 1.44863C15.2077 1.07381 15.5825 0.841064 15.9999 0.841064C16.2089 0.841064 16.4066 0.899252 16.5755 1.00438C16.7445 1.1095 16.8847 1.26156 16.9772 1.44863L18.0234 3.56788L20.3623 3.90763C20.7759 3.96769 21.1125 4.25175 21.242 4.64906C21.371 5.04631 21.2653 5.47494 20.9662 5.76656Z"
          fill={active ? "url(#paint3_linear_12487_16893)" : "#C3DAFF"}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_12487_16893"
          x1="13.9386"
          y1="25.0472"
          x2="-1.79788"
          y2="25.0472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C57339" />
          <stop offset="0.494792" stopColor="#F1BFAC" />
          <stop offset="1" stopColor="#CB9279" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_12487_16893"
          x1="34.02"
          y1="26.9134"
          x2="18.2844"
          y2="26.9134"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C1C1C1" />
          <stop offset="0.4375" stopColor="white" />
          <stop offset="1" stopColor="#D9D9D9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_12487_16893"
          x1="23.1251"
          y1="22.6447"
          x2="8.20216"
          y2="22.6694"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D3A84C" />
          <stop offset="0.484375" stopColor="#FFEC95" />
          <stop offset="1" stopColor="#E6BE69" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_12487_16893"
          x1="22.369"
          y1="5.90726"
          x2="9.10618"
          y2="5.93981"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D3A84C" />
          <stop offset="0.484375" stopColor="#FFEC95" />
          <stop offset="1" stopColor="#E6BE69" />
        </linearGradient>
        <clipPath id="clip0_12487_16893">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayersIcon;
