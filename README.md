# Spartan Football Rivalries

App for Michigan State University (MSU) Spartan fans to explore the history of classic rivalry games and favorite games.

## Watch the Demo in two minutes: 
https://www.loom.com/share/7e938ab070274d66af55096f342f08ed

Check out the app on [Heroku](https://msu-rivalries.herokuapp.com/)

## How I worked on this project
- Started with domain model [relationships](https://res.cloudinary.com/do4zijkje/image/upload/v1638898073/MSU_Rivalries_Backend_zn5hg6.png)
- Built out a [component tree](https://res.cloudinary.com/do4zijkje/image/upload/v1638898121/MSU_Component_Tree_odjlh4.png)
- Managed tasks in a [Google Sheet](https://docs.google.com/spreadsheets/d/14jmx_eQZ_ao7nRVJm48_FjACl5dg41H9mpOtaoiXhkY/edit?usp=sharing)
- Leaned on my Flatiron Instructors/Community throughout development, especially for user authentication and deployment to Heroku.

## How to navigate this project
- [Routes](config/routes.rb) for user authentication in the and [session actions](app/controllers/sessions_controller.rb) (thanks [Dakota](https://github.com/DakotaLMartinez))
- Fetch requests to set state values to display backend data in [authenticated app](client/src/AuthenticatedApp.js) along with DOM updating callback functions
- Seeded rivalry games with CSV.foreach in [seeds.rb](db/seeds.rb)

## Why I built this project this way
- Used React in order to use state to set backend data and easily update it on the DOM based on user interaction 
- Stored all backend fetch requests and corresponding state variables in authenticated app to create continuity for callback function and how I passed down props
- Created Rivalry routes by mapping over each rivalry series to make the app scalable if new series were to be added.

## If I had more time I would change this:
- I would add open sourced notes and highlights attributes to the games model so users could contribute more information to the games
- Remove the inline styling and dive deeper into bootstrap to optimize it
- Dive into Redux and implement (did not know Redux at time of development)
