import React from "react";

// Fonction utilitaire pour gérer **gras** et \n
export function formatText(text) {
  return text
    .split("\n")
    .flatMap((line, i, arr) => {
      const segments = line.split(/(\*\*[^*]+\*\*)/g).map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      });

      // Ajoute un <br /> sauf pour la dernière ligne
      return i < arr.length - 1 ? [...segments, <br key={`br-${i}`} />] : segments;
    });
}

export default function RenderContent({ content }) {
  if (!content) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "p":
        return <p key={index}>{formatText(block.text)}</p>;

      case "ul":
        return (
          <ul key={index} className={block.className}>
            {block.items.map((item, idx) => {
              if (typeof item === "string") {
                return <li key={idx}>{formatText(item)}</li>;
              } else if (typeof item === "object" && item.type === "li") {
                return (
                  <li key={idx}>
                    {formatText(item.text)}
                    {item.sublist && <RenderContent content={[item.sublist]} />}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        );

      default:
        return null;
    }
  });
}
