import { usePage } from "@inertiajs/react";

export default function  MainNavLink ({ children, className, href, ...props}) {
    const { url } = usePage();
    className = 'font-bold ' + className;
    return (
        <a className={url == href ? 'btn-ghost btn-active ' + className : className} href={href} {...props} >{children}</a>
    );
};