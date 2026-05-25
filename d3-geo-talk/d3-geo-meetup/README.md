# NYC-D3-Meetup-Talk
Slide deck for presentation given at the NYC D3 meetup group on November 21, 2019. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Testing](#testing)

## General info
This application is a React app is a slide viewer and a collection of 20+ slides. All graphics are original SVGs made with Inkscape. The top bar contains a timer control which can be set to any whole number and paused and restarted as it counts down. When the timer reaches zero then we change the color to red and start counting back up, which would indicate you are now over time. Right now this timer is viewable by both the audience and the presenter. On the bottom control bar we have navigation buttons for going forward and backward. In the middle are seven previews of the slides upcoming and slides that are past. Each preview window is clickable to move to the given slide. And each preview is actually a seperate render of that component. So if the slide is animated or has a clickable link so too will the preview be animated or clickable.
	
## Technologies
Project is created with:
* Create React App
* Prism JS for syntax highlighting
* d3: (using modules ie. d3-scale)
	
## Setup
clone the repo
```
$ git clone https://github.com/M-garrigan/d3-geo-meetup.git
```

move into repo and yarn build
```
$ cd d3-geo-meetup
$ yarn build
$ yarn start
```
-- OR --

move into repo and npm build
```
$ cd d3-geo-meetup
$ npm run build
$ npm run start
```

now you should be able to view it on localhost:3000


## Testing

This application uses Jest and Enzyme for testing.

Test files are nested in the src/ dir next to their respective component.

To run tests use: 

The first will run all tests
```
$ yarn test
```
