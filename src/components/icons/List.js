import * as React from 'react';

function SvgList(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="list_svg__ionicon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M160 144h288M160 256h288M160 368h288"
            />
            <circle
                cx={80}
                cy={144}
                r={16}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <circle
                cx={80}
                cy={256}
                r={16}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <circle
                cx={80}
                cy={368}
                r={16}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
        </svg>
    );
}

export default SvgList;
