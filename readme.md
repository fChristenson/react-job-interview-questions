# React job interview questions

## What we will cover

* Questions that I would ask a frontend developer about React
* A few examples of answers and my thoughts on these answers
* A Junior code test
* A Senior code test

## Notes

This is a subscriber request video where I try to show you some brief snippets
of how I would interview a frontend developer for a company that is looking
for React developers.

The goal is not to try to figure out how "good" the candidate is with code
but rather how likely they are to be able to get productive in a short amount
of time, what we are looking for is a gut feeling as it is almost impossible
for an employer to figure out how "good" someone is in a hiring process.

There are simply too many factors that affect someones performance in a 
job interview and at the end of the day most companies go with their gut.

## Questions

* Why does React need a root element?
* What is the difference between state and props?
* What is context?
* What are prop types and what are the benefits and drawbacks of them?
* Which life cycle event is the most common from your perspective?
* When do you use a pure component and when do you use a class?
* Explain how the React rendering works in your own terms.
* What is Redux?
* Explain how Redux works in your own terms.
* When do you use Redux?
* What is a container component?
* What is a view component?
* What components make for a good container candidate?

## Why does React need a root element?

Bad answer: 
"I don't know"

Decent answer: 
"React needs a DOM element to hook in to"

Good answer: 
"Since React is all Javascript it needs an element where it can 
render out it's own DOM tree"

## What is the difference between state and props?

Bad answer: 
"I don't know"

Decent answer: 
"State is where you store stuff that is internal"
"Props is where you store stuff that is going to the next component"

Good answer: 
"State is a way for a component to store an internal state and it is perfect
for when you need to store a field value or perhaps toggle a modal"

"Props is what is being passed to the component from the parent element,
this is how you most commonly work with data in React"

## What is context?

Bad answer: 
"I don't know"

Decent answer: 
"Context is like a global prop"

Good answer: 
"Context is a globally available prop that should only be used on occations
when you need something that is going to be everywhere in the applications,
perhaps for translating text or something like that."

## What are prop types and what are the benefits and drawbacks of them?

Bad answer: 
"I don't know"

Decent answer: 
"Prop types is a way for you to know what types a component is expecting."
"They are great for when you want to know what a component needs to work!"
"I don't know when they are a problem tbh."

Good answer: 
"Prop types is a way for you to know what types a component is expecting."
"They are great for when you want to know what a component needs to work!"

"They often become legacy documentation and people forget to keep them
updated or they put `.required` on the wrong things and often I see
people use `.object` instead of `.shapeOf`"

## Which life cycle event is the most common from your perspective?

Bad answer: 
"I don't know"
"I never use them"

Decent answer: 
"`componentWillMount` and `componentDidMount`"

Good answer: 
"`componentWillMount` and `componentDidMount`"
"`componentWillReceiveProps` it is often that I find that I need to do something
when my component is getting a new state"

## When do you use a pure component and when do you use a class?

Bad answer: 
"I don't know"
"I only use pure components/classes"

Decent answer: 
"I use pure components when I want to optimise for performance."

Good answer: 
"I favour using pure components because there is often no reason to use a class
if I am not storing a state or using a life cycle event"

## Explain how the React rendering works in your own terms.

Bad answer: 
"I don't know"

Decent answer: 
"React listens for DOM updates and rerenders the DOM tree on every change"

Good answer: 
"React listens for DOM updates and rerenders the DOM tree on every change but
it can do this very quickly because it uses component diffing which means that
React checks if there has been a change to the component and only rerenders
it if there is one"

## What is Redux?

Bad answer: 
"I don't know"

Decent answer: 
"Redux is a popular tool for storing state in React"

Good answer: 
"Redux is a popular tool for storing state in React"
"It is built on the pub/sub pattern or Flux and the idea is that
you store your state in a big object and use actions to change
that state"

## Explain how Redux works in your own terms.

Bad answer: 
"I don't know"

Good answer: 
"You declare a reducer that takes in an action and a state,
when you disptach an action the state gets updated and React
rerenders the DOM with the state change"

## When do you use Redux?

Bad answer: 
"I don't know"

Decent answer: 
"Most projects as it is very common that you need some global state
that is shared among different components"

Good answer: 
"Most projects as it is very common that you need some global state
that is shared among different components but I only wire up components
that need access to the global state"

"Only in applications that need to share the global state, I mean it doesn't
make sense to use Redux in your app if you don't share the state"

## What is a container component?

Bad answer: 
"I don't know"

Decent answer: 
"A container component is a popular way to separate the jsx from the logic
of a component"

Good answer: 
"A container component is a popular way to separate the jsx from the logic
of a component but I only use it when my component is doing more than
showing some information or passing things through to the view."

## What is a view component?

Bad answer: 
"I don't know"

Decent answer: 
"The view component is the dumb part of a component where you simply put
the passed in props in to jsx"

Good answer: 
"The view component is the dumb part of a component where you simply put
the passed in props in to jsx, the view is now separated from the logic
and some people will argue that this makes it reusable but that is very
rarely true."

## What components make for a good container candidate?

Bad answer: 
"I don't know"

Decent answer: 
"Almost all components except perhaps for components that have no logic"

Good answer: 
"I try to only use containers on components that are a bit more complex because
the container itself makes the component more complex and if I am only making
a small component without any extra complexity the cost of the container is
greater than simply not using a container.

## Conclusions

When interviewing someone for a React job it is vital that you have someone
who knows React that does it, trust me, no recruiter or recruitment company
will know half of what is needed to figure out if someone "knows" React.

The questions you have seen are questions from someone who has worked with React
for several years, they are questions that every React developer will face on
a daily basis and those are the sort of questions you want your candidate to
have answers to.

Anyone can learn React just as anyone could learn jquery back in the day,
the question is if you want someone who is good at React or someone who
can do the job and deal with the fallout later.

There are benefits to both approaches.

## Challanges

Present the candidate with a skeleton project and explain that they are
not allowed to use any other libraries than the ones in the `package.json`.

Junior:

The junior will have to create a Todo application using Node and
the goal is to have a Todo list that allows the user to add todos

Senior:

The senior will have the junior test and when a todo is clicked
there should be a React modal that shows the todo

Note: 

In this video I will show you an extreme case for a senior,
if the candidate solves this in a nice way they are extremely good,
the goal with the test is to see how much "real" experience they have working
with a common frontend issue that the `React mindset`* will beat
out of them if they only work in React.

`React mindset`: Everything is a tree, stay in that tree, stay inside React.
