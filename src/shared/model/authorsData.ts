export interface AuthorsData {
  name: string,
  surname: string,
  description: string,
  avatar: string,
}

export const authorsData: AuthorsData[] = [
  {
    name: "Пётр",
    surname: "Кузнецов",
    description: "Фронтенд-разработчик с более чем 4-летним опытом. Специализируется на React и Vue.js, работал над проектами для крупных e-commerce платформ.",
    avatar: require("AssetsImages/bestauthor/author/firstAvatar.png"),
  },
  {
    name: "Александр",
    surname: "Смирнов",
    description: "DevOps-инженер с 5 годами опыта. Владеет технологиями Docker, Kubernetes и облачными решениями, оптимизировал инфраструктуру для стартапов и международных компаний.",
    avatar: require("AssetsImages/bestauthor/author/secondAvatar.png"),
  },
  {
    name: "Марина",
    surname: "Скворцова",
    description: "Бэкенд-разработчик с 7-летним стажем. Эксперт по Python и Django, участвовала в создании масштабных веб-приложений для финансового сектора.",
    avatar: require("AssetsImages/bestauthor/author/thirdAvatar.png"),
  },
  {
    name: "Анна",
    surname: "Лебедева",
    description: "Full-stack разработчик с более чем 6-летним опытом. Специализируется на JavaScript, Node.js и базах данных, работала в ведущих IT-компаниях и активно занимается менторством.",
    avatar: require("AssetsImages/bestauthor/author/fourthAvatar.png"),
  },
]