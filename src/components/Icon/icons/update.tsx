import React from 'react';

const updateIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>update icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.1 12.0187C19.6029 12.0187 19.2058 12.4232 19.1436 12.9164C19.0044 14.0193 18.61 15.0794 17.9866 16.0105C17.1954 17.1921 16.0709 18.113 14.7553 18.6568C13.4397 19.2006 11.992 19.3429 10.5954 19.0657C9.19869 18.7884 7.91577 18.1041 6.90883 17.0993C5.9019 16.0944 5.21616 14.8142 4.93835 13.4204C4.66054 12.0267 4.80312 10.582 5.34807 9.26911C5.89302 7.95622 6.81586 6.83407 7.9999 6.04456C9.18393 5.25506 10.576 4.83367 12 4.83367V3.03741C11.1455 3.03741 10.3001 3.15881 9.48837 3.39423C8.6092 3.6492 7.76939 4.03792 6.99987 4.55103C5.51983 5.53791 4.36628 6.94059 3.68509 8.58171C3.0039 10.2228 2.82567 12.0287 3.17294 13.7709C3.5202 15.5131 4.37737 17.1134 5.63604 18.3694C6.89471 19.6255 8.49836 20.4809 10.2442 20.8274C11.99 21.174 13.7996 20.9961 15.4442 20.3163C17.0887 19.6366 18.4943 18.4854 19.4832 17.0084C19.9974 16.2405 20.3869 15.4025 20.6424 14.5251C20.7951 14.001 20.8999 13.4628 20.9549 12.9172C21.0047 12.4226 20.5971 12.0187 20.1 12.0187Z"
            fill={fill}
        />
        <path
            d="M15.3988 3.43747C15.811 3.67985 15.811 4.27478 15.3988 4.51715L12.5281 6.86691C12.1095 7.11306 11.5814 6.81191 11.5814 6.32707V1.62755C11.5814 1.14271 12.1095 0.841562 12.5281 1.08771L15.3988 3.43747Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8732 8.78017C16.2206 9.12683 16.2206 9.68889 15.8732 10.0356L11.3732 14.5262C11.2064 14.6927 10.9801 14.7862 10.7442 14.7862C10.5083 14.7862 10.282 14.6927 10.1152 14.5262L8.12682 12.542C7.77943 12.1953 7.77943 11.6332 8.12682 11.2866C8.4742 10.9399 9.03742 10.9399 9.38481 11.2866L10.7442 12.6431L14.6152 8.78017C14.9626 8.43351 15.5258 8.43351 15.8732 8.78017Z"
            fill={fill}
        />
    </svg>
);
export default updateIcon;
