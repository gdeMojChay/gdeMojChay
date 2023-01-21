<img align="left" alt="girl" src="https://thumbs.gfycat.com/ThunderousRecklessHumpbackwhale-size_restricted.gif" width="165"/>

```typescript
export class Local extends Developer {
  Username: string = "Local";
  WhoAmI: string = "Full stack developer";
  Languages: string[] = ["Python", "C#", "JavaScript", "TypeScript"];
  Utils: string[] = ["Figma", "Docker", "Dokku", "Terminal"];
  Hobbies: string[] = ["Videogames", "Coding", "Watching anime"];
  WorksIn: string = "Tap Team";
  
  public greeting(whom: string): string {
    console.log(this.Username, "greet", whom)
  }
}
```
