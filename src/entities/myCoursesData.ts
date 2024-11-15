interface MyCoursesData {
  title: string,
  begin: string,
  author: string,
  lastView: string,
  status: string
}

export const myCoursesData: MyCoursesData[] = [
  {
    title: 'Course 1',
    begin: '2020-01-01',
    author: 'John Doe',
    lastView: '2020-01-15',
    status: 'В процессе'
  },
  {
    title: 'Course 2',
    begin: '2020-02-01',
    author: 'Jane Doe',
    lastView: '2020-02-15',
    status: 'Завершено'
  },
  {
    title: 'Course 3',
    begin: '2020-03-01',
    author: 'John Doe',
    lastView: '2020-03-15',
    status: 'В процессе'
  },
  {
    title: 'Course 4',
    begin: '2020-04-01',
    author: 'Jane Doe',
    lastView: '2020-04-15',
    status: 'Завершено'
  },
  {
    title: 'Course 5',
    begin: '2020-05-01',
    author: 'John Doe',
    lastView: '2020-05-15',
    status: 'Завершено'
  },
  {
    title: 'Course 6',
    begin: '2020-06-01',
    author: 'Jane Doe',
    lastView: '2020-06-15',
    status: 'В процессе'
  }
]