import React from "react";
import cx from "classnames";

export const Button = ({
    children,
    type = "button",
    role = "button",
    outline = false,
    pill = false,
    disabled = false,
    colour = "primary",
    size = "md",
    classNames,
    ...rest
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            role={role}
            className={cx([
                "transition-all duration-200 ease-in-out flex items-center justify-center border-2 select-none",
                {
                    "cursor-not-allowed opacity-75": disabled,
                    "cursor-pointer": !disabled,
                    "rounded-full": pill,
                    rounded: !pill,
                    "py-0 px-1 text-xs": size === "xs",
                    "py-1 px-2 text-sm": size === "sm",
                    "py-2 px-4 text-base": size === "md",
                    "py-3 px-6 text-lg": size === "lg",
                    "py-4 px-8 text-xl": size === "xl",
                    "border-transparent bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-700 disabled:bg-slate-100 disabled:text-slate-400":
                        colour === "primary" && !outline,
                    "border-transparent bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 disabled:bg-sky-100 disabled:text-sky-400":
                        colour === "secondary" && !outline,
                    "border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white active:border-slate-600 active:bg-slate-600 active:text-white disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent":
                        colour === "primary" && outline,
                    "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white active:border-sky-600 active:bg-sky-600 active:text-white disabled:border-sky-300 disabled:text-sky-300 disabled:hover:bg-transparent":
                        colour === "secondary" && outline,
                },
                classNames,
            ])}
            {...rest}
        >
            {children}
        </button>
    );
};
