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

* Mutation Delete

```
mutation {
  deleteCourse(_id: "5d49a689956e731fb00367f1")
}
```

* Mutation Nested Types

```
mutation {
  addPeople(courseID: "5d49935b7389141d5c7c7172", 
    personID: "5d49a82087948f2aac0a3b0a"){
    _id
    title
  }
}
```