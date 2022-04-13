import * as React from 'react';

function SvgLogOut(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="log-out_svg__ionicon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
        </svg>
    );
}

export default SvgLogOut;
