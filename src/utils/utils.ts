const removeTrailingTags = (str: string) => {
  const tags = ["<", "<b", "<br", "<br>"];
  const pattern = new RegExp(`(${tags.join("|")})$`);
  return str.replace(pattern, "");
};

export const truncateText = (
  text: string,
  maxLen: number,
  withDotted = true
) => {
  if (text?.length > maxLen) {
    const result = removeTrailingTags(text.slice(0, maxLen));
    return withDotted ? result + "..." : result;
  }
  return text;
};
