import React from "react";
import cx from "classnames";
const Input = ({ classNames, ...rest }) => {
    return (
        <input
            className={cx([
                "px-3 py-2 bg-slate-400/20 rounded border-2 border-slate-400/20 focus:outline-slate-950",
                classNames,
            ])}
            {...rest}
        />
    );
};

export default Input;
