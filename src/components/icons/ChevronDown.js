import * as React from 'react';

function SvgChevronDown(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chevron-down_svg__ionicon"
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
                strokeWidth={48}
                d="M112 184l144 144 144-144"
            />
        </svg>
    );
}

export default SvgChevronDown;
