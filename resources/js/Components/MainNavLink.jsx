import { Link, usePage } from "@inertiajs/react";

export default function  MainNavLink ({ children, className, href, ...props}) {
    const { url } = usePage();
    className = 'font-bold ' + className;
    return (
        <Link className={url == href ? 'btn-ghost btn-active ' + className : className} href={href} {...props} >{children}</Link>
    );
};