import React, {ComponentProps} from "react";
import clsx from "clsx";

import styles from './Button.module.scss';

type Props = ComponentProps<"button">;
export default function Button({
                                   className,
                                   children,
                                   ...otherProps
                               }: Props) {
    return (
        <button className={clsx(styles.button, className)} {...otherProps}>{children}</button>
    )
}