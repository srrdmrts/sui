import * as React from 'react';

function SvgClipboard(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="clipboard_svg__ionicon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <rect
                x={176}
                y={32}
                width={160}
                height={64}
                rx={26.13}
                ry={26.13}
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
            />
        </svg>
    );
}

export default SvgClipboard;
