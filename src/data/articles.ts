export type Article = {
  title: string
  category: string
  date: string
  excerpt: string
  href: string
  image: string
}

export const articles: Article[] = [
  {
    title: "Tecnologia como meio, não como vaidade",
    category: "Tecnologia",
    date: "07 jan 2026",
    excerpt:
      "Uma reflexão sobre como times e empresas se perdem quando passam a adotar tecnologia como objetivo, e não como consequência de um problema bem formulado.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "LABs 2.0: como as grandes empresas podem inovar de verdade",
    category: "Inovação",
    date: "26 nov 2025",
    excerpt:
      "Por que estruturas lentas, ambientes travados e excesso de controle sufocam a experimentação e impedem que a inovação aconteça de forma real.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Abrir para crescer: quando compartilhar tecnologia vira estratégia",
    category: "Estratégia",
    date: "22 set 2025",
    excerpt:
      "Nem sempre proteger ao máximo é a melhor saída. Em alguns mercados, abrir parte da tecnologia pode acelerar adoção, ecossistema e distribuição.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "O segredo da IA confiável está na orquestração",
    category: "IA",
    date: "19 out 2025",
    excerpt:
      "Modelos sozinhos não bastam. Em produtos reais, confiabilidade depende de contexto, ferramentas, validação e fluxos bem desenhados.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
]