import * as React from 'react';

function SvgCash(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cash_svg__ionicon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                x={32}
                y={80}
                width={448}
                height={256}
                rx={16}
                ry={16}
                transform="rotate(180 256 208)"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M64 384h384M96 432h320"
            />
            <circle
                cx={256}
                cy={208}
                r={80}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <path
                d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
        </svg>
    );
}

export default SvgCash;
