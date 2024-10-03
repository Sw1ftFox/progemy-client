export interface ItemData {
  area: string;
  price: string;
  rating: string;
  time: string;
  title: string;
  description: string;
}

export interface AuthorsData {
  name: string,
  surname: string,
  description: string,
  avatar: string,
}

export const coursesData: ItemData[] = [
  {
    area: "programming",
    price: "1000",
    rating: "4.7",
    time: "23",
    title: "Изучите C#",
    description:
      "Изучите популярный язык программирования C# от Microsoft, который используется для создания веб-сайтов, мобильных приложений и многого другого.",
  },
  {
    area: "design",
    price: "600",
    rating: "4.8",
    time: "15",
    title: "Изучите Figma",
    description: "Описание 2",
  },
  {
    area: "security",
    price: "1400",
    rating: "4.9",
    time: "32",
    title: "Изучите информационную безопасность",
    description: "Описание 3",
  },
  {
    area: "programming",
    price: "2100",
    rating: "5.0",
    time: "124",
    title: "Изучите Accembler",
    description: "Описание 4",
  },
  {
    area: "programming",
    price: "1000",
    rating: "4.7",
    time: "23",
    title: "Изучите C#",
    description:
      "Изучите популярный язык программирования C# от Microsoft, который используется для создания веб-сайтов, мобильных приложений и многого другого.",
  },
  {
    area: "design",
    price: "600",
    rating: "4.8",
    time: "15",
    title: "Изучите Figma",
    description: "Описание 2",
  },
  {
    area: "security",
    price: "1400",
    rating: "4.9",
    time: "32",
    title: "Изучите информационную безопасность",
    description: "Описание 3",
  },
  {
    area: "programming",
    price: "2100",
    rating: "5.0",
    time: "124",
    title: "Изучите Accembler",
    description: "Описание 4",
  },
];

export const popularCoursesData: ItemData[] = [
  {
    area: "programming",
    price: "1000",
    rating: "4.7",
    time: "23",
    title: "Изучите C#",
    description:
      "Изучите популярный язык программирования C# от Microsoft, который используется для создания веб-сайтов, мобильных приложений и многого другого.",
  },
  {
    area: "design",
    price: "600",
    rating: "4.8",
    time: "15",
    title: "Изучите Figma",
    description: "Описание 2",
  },
  {
    area: "security",
    price: "1400",
    rating: "4.9",
    time: "32",
    title: "Изучите информационную безопасность",
    description: "Описание 3",
  },
  {
    area: "programming",
    price: "2100",
    rating: "5.0",
    time: "124",
    title: "Изучите Accembler",
    description: "Описание 4",
  },
]

export const authorsData: AuthorsData[] = [
  {
    name: "Пётр",
    surname: "Кузнецов",
    description: "Фронтенд-разработчик с более чем 4-летним опытом. Специализируется на React и Vue.js, работал над проектами для крупных e-commerce платформ.",
    avatar: require("../assets/svg/bestauthor/author/firstAvatar.png"),
  },
  {
    name: "Александр",
    surname: "Смирнов",
    description: "DevOps-инженер с 5 годами опыта. Владеет технологиями Docker, Kubernetes и облачными решениями, оптимизировал инфраструктуру для стартапов и международных компаний.",
    avatar: require("../assets/svg/bestauthor/author/secondAvatar.png"),
  },
  {
    name: "Марина",
    surname: "Скворцова",
    description: "Бэкенд-разработчик с 7-летним стажем. Эксперт по Python и Django, участвовала в создании масштабных веб-приложений для финансового сектора.",
    avatar: require("../assets/svg/bestauthor/author/thirdAvatar.png"),
  },
  {
    name: "Анна",
    surname: "Лебедева",
    description: "Full-stack разработчик с более чем 6-летним опытом. Специализируется на JavaScript, Node.js и базах данных, работала в ведущих IT-компаниях и активно занимается менторством.",
    avatar: require("../assets/svg/bestauthor/author/fourthAvatar.png"),
  },
]