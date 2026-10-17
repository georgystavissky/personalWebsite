import { Fragment, ReactNode } from "react";

/** Превращает `**слово**` в <strong>, остальной текст оставляет как есть. */
export const renderBold = (text: string): ReactNode =>
  text
    .split("**")
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i}>{part}</strong>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
