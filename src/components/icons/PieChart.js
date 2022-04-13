import * as React from 'react';

function SvgPieChart(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pie-chart_svg__ionicon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0189.12 330.65"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
            />
            <path
                d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0018.09 85L256 256z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
        </svg>
    );
}

export default SvgPieChart;
