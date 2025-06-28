"use client";

import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import { compileSync } from "@mdx-js/mdx";
import { Fragment } from "react";
import rehypePrism from "rehype-prism-plus";

interface Props {
  code: string;
}

export default function MdxRenderer({ code }: Props) {
  const Content = useMemo(() => {
    const compiled = compileSync(code, {
      outputFormat: "function-body",
      rehypePlugins: [rehypePrism],
    });

    const fn = new Function(
      "React",
      "mdx",
      "Fragment",
      "components",
      String(compiled)
    );
    return fn(runtime, runtime, Fragment, {}).default;
  }, [code]);

  return <Content />;
}
