<img align="left" alt="girl" src="https://thumbs.gfycat.com/ThunderousRecklessHumpbackwhale-size_restricted.gif" width="220"/>

```typescript
export class Local extends Developer {
  Username: string = "Local";
  WhoAmI: string = "Full stack developer";
  Languages: string[] = ["Python", "C#", "JavaScript", "TypeScript"];
  Utils: string[] = ["Figma", "Docker", "Dokku", "Simulator"];
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
