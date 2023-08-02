# 05 Third-Party APIs: Work Day Scheduler

## Links
Live Site - https://raptureme.github.io/BC-work-day-schedular/
Github repo - https://github.com/RaptureMe/BC-work-day-schedular
## Description

This is a schedular that uses a few different pieces we have learned throughout the bootcamp, it uses Bootstrap, Jquery, DayJS, and LocalStorage. Great assignment to pull it all together.

The website will show past timeblocks in grey, present timeblocks in red and future timeblocks in green. When you add a note and click the save button itll save to localstorage, you can refresh the page and itll still be there. The date at the top of the page is pulled and current using DayJS

## Usage

![Photo of site](./Asset/Screenshot%202023-08-02%20at%2012.37.26%20PM.png)
## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
