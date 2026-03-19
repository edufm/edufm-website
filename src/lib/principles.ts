import { principles as ptPrinciples } from "../content/pt/principles"
import { principles as enPrinciples } from "../content/en/principles"

export function getPrinciples(language: string) {
  return language === "en" ? enPrinciples : ptPrinciples
}