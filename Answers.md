1. What problem does the context API help solve?

Context API helps provide access to state in various component trees without needing to do props drilling through several other components that don't need it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The 'store' is where your state is kept. Actions are the very specific things that are done within the application which affect state. Reducers represent the specific states that the application can exist in.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is relevant to mulitple components of an app. Component state is state that only one component cares about and needs to access. Anytime you find you need to give access to state to more than 2 components you might want to consider making it application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to have more control over when actions are happening. It allows us to change timing on execution of actions, modify actions after they are called, or replace them with other or additional actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I'm actually rather taken with redux. I think that it's because it's the easiest for me to visualize what is happening to my data and therefore makes it easier for me to manipulate.
