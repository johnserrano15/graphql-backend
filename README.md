# Queries ejecutadas en el curso en GraphiQL

## Get all courses

```graphql
{
  getCourses {
    title
    description
  }
}
```

## Get course ID

```graphql
{
  getCourse(id: "oqeded2") {
    _id
    title
    description
  }
}
```

## Mutation

```graphql
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

```graphql
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

```graphql
mutation {
  deleteCourse(_id: "5d49a689956e731fb00367f1")
}
```

## Mutation Nested Types

```graphql
mutation {
  addPeople(courseID: "5d49935b7389141d5c7c7172", 
    personID: "5d49a82087948f2aac0a3b0a"){
    _id
    title
  }
}
```

## Resolver types

```graphql
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

```graphql
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

```graphql
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

## Variables

```graphql
query GetCourse2 ($course: ID!) {
  getCourse(id: $course){
   _id
    title
    people{
      _id
      name
    }
  }
}
```

* Requiere un objeto JSON como:

```json
{
  "course": "5cb4b8ce75f954a0585f7be3"
}
```
---

```graphql
mutation AddPersonToCourse ($course: ID!, $person: ID!){
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
}
```

* Requiere un objeto JSON como:

```json
{
  "course": "5d499e87f05e5225c8c93db0",
  "person": "5d49a82087948f2aac0a3b0a"
}
```

## Enums
```graphql
mutation CreateNewCourse($createInput: CourseInput!) {
  createCourse(input: $createInput) {
    title
    description
  }
}
```

* Requiere un objeto JSON como:

```json
{
  "createInput": {
    "title": "Course new example",
    "teacher": "My teacher",
    "description": "my description",
    "topic": "marketing",
    "level": "principiante"
  }
}
```

## Interfaces - Tipo Monitor
``` graphql
mutation CreateNewMonitor($createInput: PersonInput!) {
  createPerson(input: $createInput){
    _id
    name
  }
}
```

```graphql
{
  getPeople {
    _id
    name
    email
    ... on Monitor {
      phone
    }
  }
}
```

## Directivas @include and @skip
``` graphql
query getPeopleDate($monitor: Boolean!) {
  getPeople {
    _id
    name
    email
    ... on Monitor @include(if: $monitor){
      phone
    }
  }
}

query getPeopleDate($monitor: Boolean!, $avatar: Boolean!) {
  getPeople {
    _id
    name
    ... on Monitor @include(if: $monitor){
      phone
    }
    ... on Student @skip(if: $avatar){
      avatar
      email
    }
  }
}
```

* Requiere un objeto JSON como:

```json
{
  "monitor": false,
  "avatar": false
}
```

## Unions
``` graphql
{
  searchItems(keyword: "title") {
    __typename
    ... on Course {
      _id
      title
      description
    }
    ... on Monitor {
      _id
      name
      email
    }
    ... on Student {
      _id
      name
      email
    }
  }
}
```

> *Nota se crearon los indexes -> `db.courses.createIndex({ "$**": "text" }); db.students.createIndex({ "$**": "text" });`*
