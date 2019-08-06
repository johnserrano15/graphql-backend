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