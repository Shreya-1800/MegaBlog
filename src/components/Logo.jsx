import React from 'react';

function Logo({ width = '80px', height = '80px' }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80.3 80.3"
      style={{ enableBackground: 'new 0 0 80.3 80.3' }}
      width={width}
      height={height}
    >
      <style>
        {`
          .st2 { fill: #55ab99; }
          .st4 { fill: #fff; }
          .st5 { fill: #ed6b5a; }
          .st6 { fill: #0c2c48; }
          .st7 { fill: #f1cc4b; }
          .st21 { fill: #f6a09c; }
        `}
      </style>
      <circle className="st21" cx="40.2" cy="40.2" r="40.2" />
      <path className="st4" d="M67.7 56.2c0 .7-.5 1.2-1.2 1.2H13.8c-.7 0-1.2-.5-1.2-1.2V17.4c0-.7.5-1.2 1.2-1.2h52.8c.7 0 1.2.5 1.2 1.2v38.8z" />
      <path style={{ fill: '#bababa' }} d="M29.8 56.3h20.7v7H29.8z" />
      <path className="st6" d="M15.5 18.6h49.3v30.5H15.5z" />
      <path className="st4" d="M12.6 48.1v8.1c0 .7.5 1.2 1.2 1.2h52.8c.7 0 1.2-.5 1.2-1.2v-8.1H12.6zM55.7 68.1v-2.2c0-1.7-1.3-3-3-3h-25c-1.7 0-3 1.3-3 3v2.2h31z" />
      <circle className="st6" cx="40.2" cy="52.5" r="1.5" />
      <g>
        <path className="st7" d="M55.1 32.1H43.6V20.6h7.7l3.8 3.5z" />
        <path style={{ fill: '#fff3c9' }} d="M55.1 24.1h-3.8v-3.5z" />
        <path className="st2" d="M45.3 23.2h5.5v1h-5.5zM45.3 25.9h8.1v1h-8.1zM45.3 28.6h8.1v1h-8.1z" />
        <g>
          <path className="st5" d="M38.4 46.5H26.9V35.1h7.7l3.8 3.5z" />
          <path className="st21" d="M38.4 38.6h-3.8v-3.5zM28.6 37.7h5.5v1h-5.5zM28.6 40.4h8.1v1h-8.1zM28.6 43h8.1v1h-8.1z" />
        </g>
        <g>
          <path className="st5" d="M29.3 33.9h-1v-9c0-1.4 1.1-2.5 2.5-2.5h9.1v1h-9.1c-.8 0-1.5.7-1.5 1.5v9z" />
          <path className="st5" d="m39.6 25.2 2.4-2.3-2.4-2.3z" />
        </g>
        <g>
          <path className="st7" d="M52.5 33.4h1v8.8c0 1.4-1.1 2.5-2.5 2.5h-9.1v-1H51c.8 0 1.5-.7 1.5-1.5v-8.8z" />
          <path className="st7" d="m42.3 41.9-2.5 2.3 2.5 2.3z" />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
