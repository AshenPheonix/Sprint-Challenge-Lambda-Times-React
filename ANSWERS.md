- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    
    PropTypes are used to check the type of data entering a component upon mount. It's important because, as javascript is technically untyped, you don't have any other way to really test what you are getting in. This means that you might call a method/property of a thing coming into your props that isn't there, and that can crash the system. It also makes translating the code between programmers much easier.

- [ ] Describe a life-cycle event in React?

    Built in functions that activate at certain times during the life cycle of a react component. They allow direct access to parts of the process.

- [ ] Explain the details of a Higher Order Component?

    A higher order component is a component that takes in another component as part of its' call. This allows them to modify the component inline.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
    -CSS/SASS import 
        Comes bog standard, and doesn't need any additional runtime or programming dependencies (presuming you already have node-sass). However, they are unscoped, so leaking styles can occur.

    -styled-components
        interesting, but requires you to download and compile an additional library and may slow down your application's load times a small amount.

    -Stylesheet
        As react does just put standard tags on the page, you can style it via a single CSS/LESS/SASS style sheet imported normally in your page. Doesn't give any immediate context to how it interacts with components, however.