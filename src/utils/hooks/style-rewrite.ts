import { useEffect } from "react";

export default function useStyleRewrite() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".html-rendered p");
    const lists = document.querySelectorAll(".html-rendered ul");
    const heading1 = document.querySelectorAll(".html-rendered h1");
    const heading2 = document.querySelectorAll(".html-rendered h2");
    const heading3 = document.querySelectorAll(".html-rendered h3");
    const heading4 = document.querySelectorAll(".html-rendered h4");
    const heading5 = document.querySelectorAll(".html-rendered h5");
    const heading6 = document.querySelectorAll(".html-rendered h6");
    const links = document.querySelectorAll(".html-rendered a");
    const orderedLists = document.querySelectorAll(".html-rendered ol");

    const bodyWrapper: any = document.querySelector(".html-rendered");

    if (bodyWrapper) {
      bodyWrapper.style.fontSize = "19px";
    }

    paragraphs.forEach((p: any) => {
      p.classList.add("mt-6");
    });

    orderedLists.forEach((ol: any) => {
      ol.classList.add("list-outside");
      //   ol.classList.add("list-o");
      ol.style.paddingLeft = "16px";
      ol.style.listStyle = "decimal";
      ol.style.display = "flex";
      ol.style.flexDirection = "column";
      ol.style.gap = "20px";
    });

    lists.forEach((ul: any) => {
      ul.style.listStyle = "outside";
      ul.style.paddingLeft = "16px";
      ul.classList.add("mt-6");
      ul.querySelectorAll("li").forEach((li: any) => {
        li.style.listStyle = "outside";
      });
    });

    const headings = [
      { elements: Array.from(heading1), class: "text-4xl font-bold" }, // Default styles for h1
      { elements: Array.from(heading2), class: "text-3xl font-semibold" }, // Default styles for h2
      { elements: Array.from(heading3), class: "text-2xl font-bold" }, // Default styles for h3
      { elements: Array.from(heading4), class: "text-xl font-bold" }, // Default styles for h4
      { elements: Array.from(heading5), class: "text-lg font-bold" }, // Default styles for h5
      { elements: Array.from(heading6), class: "text-base font-bold" }, // Default styles for h6
    ];

    // Add event listeners to each link
    links.forEach((link) => {
      link.classList.add("custom-link");
    });

    // Apply styles to headings
    headings.forEach((headingGroup) => {
      headingGroup.elements.forEach((heading) => {
        heading.classList.add("mt-6");
        heading.classList.add(...headingGroup.class.split(" "));
      });
    });
  }, []);
}
