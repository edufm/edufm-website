export type Principle = {
  title: string
  summary: string
  description: string
}

export const principles: Principle[] = [
  {
    title: "Technology is a means, not an end",
    summary: "Tools only matter when they help solve real problems.",
    description:
      "I have little interest in technology as a showcase. What matters to me is its ability to reduce friction, improve decisions, and make processes more efficient. When the tool becomes the protagonist, the problem was usually framed poorly.",
  },
  {
    title: "Clarity reduces rework",
    summary: "Good communication saves time, energy, and misalignment.",
    description:
      "A lot of inefficiency comes from vague goals, unclear ownership, and implicit decisions. Clear context, criteria, and direction usually prevent more rework than any marginal gain in speed ever could.",
  },
  {
    title: "Speed matters, but direction matters more",
    summary: "Moving fast in the wrong direction only accelerates waste.",
    description:
      "Fast execution is a competitive advantage, but it only creates value when there is a solid understanding of the problem and the priorities. Before accelerating, it is worth making sure the effort is being applied in the right place.",
  },
  {
    title: "Good systems scale decisions, not just tasks",
    summary: "True automation improves the quality of operations.",
    description:
      "The best systems do more than automate repetitive work: they organize information, make criteria explicit, and help people make better decisions. Scaling tasks is useful; scaling good decisions is transformative.",
  },
  {
    title: "Well-executed simplicity beats poorly maintained complexity",
    summary: "Elegant solutions are often more robust than excessive architectures.",
    description:
      "Complexity is sometimes unavoidable, but it should rarely be the starting point. Whenever possible, I prefer structures that are simple, readable, and sustainable, because they tend to survive growth, maintenance, and time much better.",
  },
]