import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
  "/demo/": [
    
    {text: "Demo",
      icon: "laptop-code",
      prefix: "",
      link: "/demo/",
      children: ["layout.md", "encrypt.md", "markdown.md"],
    },
  ],
});
