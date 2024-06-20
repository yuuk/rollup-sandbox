import React from "react";
import classNames from "classnames";

export const Main = () => {
    return (
        <div>
            <p
                className={classNames("dw-text-20 cq-pc:dw-text-12", {
                    "cq-pc:hover:text-12.5": true,
                    "cq-mobile:text-100 dw-text-100": false,
                })}
            >
                段落1
            </p>

            <p className="dw-text-black cq-pc:hover:dw-text-[#ececec]">段落2</p>

            <p
                className={classNames(
                    "dw-bg-white",
                    "cq-pc:hover:dw-text-[#ececec]",
                    {
                        "cq-pc:hover:text-12.5": true,
                    }
                )}
            >
                段落3
            </p>
        </div>
    );
};
