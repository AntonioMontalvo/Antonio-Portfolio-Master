// portfoliosite/src/types.ts

export interface IProject {
  id: number;
  title: string;
  techStack: string;
  narrative: string;
  status: "Complete" | "In Progress" | "Planned" | "95% Complete";
  liveLink: string | null;
  codeLink: string | null;
}
