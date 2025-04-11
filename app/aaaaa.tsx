"use client";

// components/LatexRenderer.tsx
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
};

type Props = {
  latex: string;
};

export default function LatexRenderer({ latex }: Props) {
  return (
    <MathJaxContext config={config}>
      <MathJax inline dynamic>
        {"\\(" + latex + "\\)"}
      </MathJax>
    </MathJaxContext>
  );
}
