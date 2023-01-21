<img align="left" alt="girl" src="https://thumbs.gfycat.com/ThunderousRecklessHumpbackwhale-size_restricted.gif" width="220"/>

```typescript
export class Local extends Developer {
  Username: string = "Local";
  WhoAmI: string = "Full stack developer";
  Languages: string[] = ["Python", "C#", "JavaScript", "TypeScript"];
  Utils: string[] = ["Figma", "Docker", "Dokku", "Terminal"];
  Hobbies: string[] = ["Videogames", "Coding", "Watching anime"];
  WorksIn: { [key: string]: any } = {
    "Tap Team": {
      GitHub: "https://github.com/Tap-Team",
      VK: "https://vk.com/tap_team_studio",
    },
  };
  
  public greeting(whom: string): string {
    console.log(this.Username, "greet", whom);
  }
}
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/l2700l/l2700l/output/github-contribution-grid-snake-dark.svg#gh-dark-mode-only">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/l2700l/l2700l/output/github-contribution-grid-snake.svg">
  <img alt="github-snake" src="github-snake.svg" align="center" width="100%">
</picture>
