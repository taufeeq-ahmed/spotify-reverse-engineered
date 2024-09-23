import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
            {...props}
        >
            <path d="M8 0a5.5 5.5 0 0 0-5.5 5.5v3.069L.307 12.376A.75.75 0 0 0 .25 13h15.5a.75.75 0 0 0-.057-.624L13.5 8.567V5.5A5.5 5.5 0 0 0 8 0zm1.937 14.5H6.063a2 2 0 0 0 3.874 0z"></path>
        </svg>
    );
}

export default BellIcon;
