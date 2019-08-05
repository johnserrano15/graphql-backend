'use strict'

const courses = [
  {
    _id: 'oqeded',
    title: 'My title',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  },
  {
    _id: 'oqeded2',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  },
  {
    _id: 'oqeded3',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}
