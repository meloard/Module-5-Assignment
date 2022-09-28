# Module-5-Assignment
Module 5 Assignment due Friday, 9/23

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## Description

This goal of this assignment was to integrate extrernal libraries, such as jquery, into our javascript code to pull shorthand functions, while also exploring code that allows input to be stored locally. 

To accomplish this we built a custom web-scheduler that allows the user to input custom scheduling events based on time blocks, which displays past, future, and current times within the calender. 

This exercise taught me a plethora of things, including: how to properly link the corresponding library/where that infomation needs to be displayed on the HTML file, shorthand of a few jquery functions, implementation of the keyword 'this', display elements and their shorthand in js, usage of the children/parent elements, properly setting the syntax for date, and more


## Installation

N/A

## Usage

Allows user to view current date/time, input scheduling items by the selected hour, stores information entered to local storage, and displays time that has: already passed, current time, and future time blocks based on designated hour

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![F2A82D31-E814-48F5-BAEF-38F75902EA9F](https://user-images.githubusercontent.com/112831268/192880969-125109fa-453f-42db-97c2-a950aae3c8da.jpeg)


## Credits

Tutor - Jacob Nordan (GT tutor)
-https://getbootstrap.com/docs/5.2/utilities/sizing/
-https://getbootstrap.com/docs/5.2/getting-started/javascript/
-https://www.w3schools.com/jquery/
-https://www.w3schools.com/jsref/prop_win_localstorage.asp
-https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-this-keyword#:~:text=%E2%80%9CThis%E2%80%9D%20keyword%20refers%20to%20an,this%E2%80%9D%20references%20the%20global%20object.
-https://developer.mozilla.org/en-US/docs/Web/API/Element/children

## License

MIT License

Copyright (c) 2022 meloard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


