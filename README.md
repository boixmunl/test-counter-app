# DemoApp


## Project explanation

Since the coding time is limited to 1h, I decided the following approaches:

### Code structure

I generated 3 components to increase, decrease and reset the counter. And the counter itself is in the main component

I created one service in order to contain the logical related to the counter and accessible to all components.

I tried to be the cleanest possible (put all possible logical part in the service, variables private, getters and setters, name of the variables and functions, etc.)

I created a simple routing to manage all the routes

## Appearence

I decided no waste much time in this part, so I used Angular Material and a minimum set of custom css rules

## Unit tests

In a similar way that the last point, I created and made some unit tests only for the counter service in order to demonstrate that it's important to cover the code

## Data persistance

I used local storage in order to store the counter value

## Other observations

In the test description is proposed to use "services, classes, observable, EventEmitter etc…", but since everything "should be logical", I considered not using nonsense concepts like Observables nor EventEmitter because they not provide any advantage for this technical test

I used a simple template form without form-validation to not waste time.

I tried to do a realistic solution for 1h coding. I could do it better with more dedication time, but I centered to solve it respecting the given time.