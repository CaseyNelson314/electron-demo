window.addEventListener("DOMContentLoaded", () => {
  // DOM要素のテキストを変更します
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.textContent = text;
    }
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    // HTMLページ内の文言を差し替えます
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});