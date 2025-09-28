export function truncateText(item, maxLength = 400) {
  return item.text.slice(0, item.text.lastIndexOf(' ', maxLength)) + "...";
}

export default truncateText;