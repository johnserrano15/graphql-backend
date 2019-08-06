# Queries ejecutadas en el curso en GraphiQL

## Get all courses

```
{
  getCourses {
    title
    description
  }
}
```

## Get course ID

```
{
  getCourse(id: "oqeded2") {
    _id
    title
    description
  }
}
```

## Mutation

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

## Mutation Edit

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

## Mutation Delete

```
mutation {
  deleteCourse(_id: "5d49a689956e731fb00367f1")
}
```

## Mutation Nested Types

```
mutation {
  addPeople(courseID: "5d49935b7389141d5c7c7172", 
    personID: "5d49a82087948f2aac0a3b0a"){
    _id
    title
  }
}
```

## Resolver types

```
{
  getCourses {
    _id
    title
    description
    teacher
    people {
      _id
      name
      email
    }
  }
}
```

## Alias

```
{
  AllCourses: getCourses {
    _id
    title
    description
  }
  
  Course1: getCourse(id: "5d4993c93b833e1d5c0929d0"){
    title
    description
  }
  
  Course2: getCourse(id: "5d499e87f05e5225c8c93db0"){
    title
    description
    topic
  }
  
  
  Course3: getCourse(id: "5d499e87f05e5225c8c93db0"){
    title
    description
    people {
      name
      email
    }
  }
}
```

## Fragment

```
{
  AllCourses: getCourses {
    ...CourseFields
  }
  
  Course1: getCourse(id: "5d4993c93b833e1d5c0929d0"){
    ...CourseFields
    teacher
  }
  
  Course2: getCourse(id: "5d499e87f05e5225c8c93db0"){
    ...CourseFields
    topic
  }
}

fragment CourseFields on Course {
	_id
  title
  description
  people {
    _id
    name
  }
}
```