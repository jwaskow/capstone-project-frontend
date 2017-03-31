# Tea Time

### Site Preview

![Preview](http://i.imgur.com/Pa9iHWk.png)

### Technologies

The front end of this application was built using HTML, CSS, Bootstrap, and Javascript for page structure and formatting.  jQuery and AJAX were used to communicate with the back end.  I chose this setup because jQuery and javascript explicitly communicate every action to the server, giving me more control over the events on the page.  The timer is built entirely with javascript and jQuery, and the Tea Time animation is CSS.

### General Approach

I came up with this idea because I wanted to build an application that was simple but useful.  We only had 4 days to work on this project so I wanted to keep the scope down, but I still wanted to show my improvement and skill.  I've always enjoyed drinking tea, so I thought that a tea timer would be something I would use regularly.  I began the project working on the back end, creating a resource for teas with the relationship user has many teas.

Once the API was set up, I began constructing the client application.  First I did all authorization actions, allowing a user to sign-up/in/out.  Next I built a table for the user to store their collection of teas.  I decided that a table would look nicer and more organized than a long list of teas.  I then added all the necessary code for a user to fully CRUD on the teas table.

Next I began work on the timer.  I did not know how to build a timer, and initially tried to install an npm module to help.  However, this proved more complicated than it seemed, so I decided to build a timer with javascript.  I spent time researching `setInterval`, and was able to construct a basic timer.  Scope became a very difficult problem, and it took the majority of a day to get everything working correctly.  Next, I wanted to experiment with CSS, so I made an animated message to alert the user that their tea is ready.  Finally, I finished with general styling and bug fixes.

#### Dependencies

Dependencies are installed with `npm install`

## Pitch Deck

#### Wireframe

![Wireframe](http://i.imgur.com/Knho4Fg.jpg)

#### User Stories

As a user:

- I want to be able to create an account
- I want to be able to sign in with my account
- I want to be able to change my password
- I want to be able to sign out of my account
- I want to have a list of all my teas
- I want to be able to add new teas to the list
- I want to be able to use a timer for the steep time
- I want to click a button next to a tea and have the timer load that tea’s steep time
- I want to be able to update a tea on the list
- I want to be able to delete teas from the list



#### Proposed Architecture

- Sort teas by type (black, green, white, other)
- Add another table with about 15 common teas, and the user can select from those teas to add to their list.  The user can not CRUD on this table. (seed data)
- Add a sound that plays when the timer ends
- Add more CSS animations and *fanfare* to the timer.

### Major Hurdles

The largest problem I encountered was creating the javascript timer.  The main issue was that the timer's interval would persist after the countdown ended, so any new timer started would be interrupted by the old timer every second, causeing the timer to flash between numbers.  `clearInterval` initially did not actually end the interval, until I realized I had to refactor the timer in order to get the proper interval ID to pass through `clearInterval`.  Furthermore, the scope proved to be an issue when I started stopping the timer on sign-out.  I had to write another function to clear the interval, and export that function to my auth-ui file.  Overall, I am very happy with how the timer works.
