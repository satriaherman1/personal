import { useEffect } from "react";

export default function useStyleRewrite() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyStyles = () => {
      const bodyWrapper = document.querySelector(
        ".html-rendered"
      ) as HTMLElement;
      if (bodyWrapper) bodyWrapper.style.fontSize = "19px";

      document.querySelectorAll(".html-rendered p").forEach((p) => {
        (p as HTMLElement).classList.add("mt-6");
      });

      document.querySelectorAll(".html-rendered ul").forEach((ul) => {
        const ulElement = ul as HTMLElement;
        ulElement.style.listStyle = "outside";
        ulElement.style.paddingLeft = "16px";
        ulElement.classList.add("mt-6");

        ulElement.querySelectorAll("li").forEach((li) => {
          (li as HTMLElement).style.listStyle = "outside";
        });
      });

      document.querySelectorAll(".html-rendered ol").forEach((ol) => {
        const olElement = ol as HTMLElement;
        olElement.classList.add("list-outside");
        olElement.style.paddingLeft = "16px";
        olElement.style.listStyle = "decimal";
        olElement.style.display = "flex";
        olElement.style.flexDirection = "column";
        olElement.style.gap = "20px";
      });

      document.querySelectorAll(".html-rendered a").forEach((link) => {
        (link as HTMLElement).classList.add("custom-link");
      });

      const headings = [
        { selector: "h1", class: "text-4xl font-bold" },
        { selector: "h2", class: "text-3xl font-semibold" },
        { selector: "h3", class: "text-2xl font-bold" },
        { selector: "h4", class: "text-xl font-bold" },
        { selector: "h5", class: "text-lg font-bold" },
        { selector: "h6", class: "text-base font-bold" },
      ];

      headings.forEach(({ selector, class: className }) => {
        document
          .querySelectorAll(`.html-rendered ${selector}`)
          .forEach((el) => {
            (el as HTMLElement).classList.add("mt-6", ...className.split(" "));
          });
      });
    };

    applyStyles(); // Run once on mount

    // Observe changes to .html-rendered
    const targetNode = document.querySelector(".html-rendered");
    if (!targetNode) return;

    const observer = new MutationObserver(() => applyStyles());
    observer.observe(targetNode, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}
