# Example GraphQL

## Querys

* Get all courses

```
{
  getCourses {
    title
    description
  }
}
```

* Get course ID

```
{
  getCourse(id: "oqeded2") {
    _id
    title
    description
  }
}
```

* Mutation

```
mutation {
  createCourse(input: {
   	title: "Nuevo curso"
    description: "Description new"
    topic: "diseño"
  }){
    _id
    title
    description
  }
}
```

* Mutation Edit

```
mutation {
  editCourse(_id: "5d499e87f05e5225c8c93db0", input: {
    title: "Curso editado"
    teacher: "John Serrano"
  }){
    title
    teacher
  }
}
```