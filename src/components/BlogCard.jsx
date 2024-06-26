import React from "react";
import clsx from "clsx";
import FadeIn from "./FadeIn";
import Border from "./Border";

export function BlogCard({ title, children, author, date, className, invert = false }) {
    return (
        <li
            className={clsx(
                "p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-2",
                invert
                    ? "bg-neutral-800 text-neutral-300"
                    : "bg-white text-neutral-600",
                className
            )}
            style={{ width: "350px" }}
        >
            <FadeIn>
                <Border position="left" className="pl-8" invert={invert}>
                    <strong
                        className={clsx(
                            "font-semibold",
                            invert ? "text-white" : "text-neutral-950"
                        )}
                    >
                        {title}.
                    </strong>
                    <p className="mt-2">{children}</p>
                    <div className="flex justify-between items-end mt-4">
                        <span className={clsx("text-sm", invert ? "text-neutral-400" : "text-neutral-500")}>
                            {author}
                        </span>
                        <span className={clsx("text-sm", invert ? "text-neutral-400" : "text-neutral-500")}>
                            {date}
                        </span>
                    </div>
                </Border>
            </FadeIn>
        </li>
    );
}
