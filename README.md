<img align="left" alt="girl" src="https://thumbs.gfycat.com/ThunderousRecklessHumpbackwhale-size_restricted.gif" width="220"/>

```typescript
export class Local extends Developer {
  Username: string = "Local";
  WhoAmI: string = "Full stack developer";
  Languages: string[] = ["Python", "C#", "TypeScript"];
  Utils: string[] = ["Figma", "Docker", "Dokku"];
  Hobbies: string[] = ["Videogames", "Coding", "Watching anime"];
  WorksIn: Record<string, Record<string, string>> = {
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
