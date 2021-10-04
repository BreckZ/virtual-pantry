# Pantry-Pal

https://pantry-pal.netlify.app/

## Project Description

The Pantry Pal is a React build that uses Airtable to manager your real life pantry.  You can manual enter items into your pantry, refrigerator, and freezer and track how many and what type you have.  If you're on the go the Pantry Pal even has a search function to you can easily find what you need quickly and with ease.

## Wireframes

Desktop Design - https://i.imgur.com/ZgeZgfw.png

Mobile Design - https://i.imgur.com/lM9gg3m.png

Component Heirarchy - https://i.imgur.com/1XxwUoC.png

## API and Data Sample

https://airtable.com/appTt6DHHTKDC9XeE

```
base('items').create([
  {
    "fields": {
      "name": "tomato paste",
      "quantity": 14,
      "uofm": "can",
      "location": "pantry"
    }
  },
  {
    "fields": {
      "name": "Pears",
      "quantity": 1,
      "uofm": "Can",
      "location": "pantry"
    }
  }
```

## MVP / Post MVP

#### MVP 

  *Working, interactive React app, built using create react app.
  *Utilize React Router, installed via NPM.
  *Have at least 6 separate, rendered components.
  *Implement an organized and understandable React file structure.
  *Utilize functional components appropriately.
  *Use Axios to consume data from Airtable, and GET/render that data in your components.
  *Use Axios to POST/create new data on Airtable.
  *Use only React for DOM Manipulation.
  *Use flexbox and have 2 responsive screen sizes
    
#### PostMVP  
  * Use Axios to PUT data on Airtable.
  * Use Axios to Delete data on Airtable.
  * Allow users to search on results

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sep 20| Prompt / Wireframes / Deploy / Timeframes | Complete
|Sep 21| Build API Calls / Make API calls / Build out Home Component | Complete
|Sep 22| Build out List component / Build out Navbar / Build out List | Complete
|Sep 23| Run routes and check connectivity / Build out New component | Complete
|Sep 24| Post-MVP / build out Search / Build out Put and Delete Requests| Complete
|Sep 25| Styling Components| Complete
|Sep 26| Styling Components| Complete
|Sep 27| Presentations | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Design Component and Deploy | H | 3 hrs | 3 hrs | 3 hrs |
| Build out API calls and test | H | 3 hrs | 3 hrs | 3 hrs |
| Make API calls for user inputs | H | 3 hrs | 4 hrs | 4 hrs |
| Build out Home Component | H | 3 hrs | 6 hrs | 6 hrs | 
| Build out List Component | H | 3 hrs | 2 hrs | 2 hrs |
| Build out Navbar Component | H | 3 hrs | 5 hrs | 5 hrs | 
| Run Routes and Check connectivity | H | 3 hrs | 4 hrs | 4 hrs |
| Build out New Item Component | H | 3 hrs | 4 hrs | 4 hrs |
| Build out Search Component | H | 3 hrs | 1 hrs | 1 hrs |
| Build out Put and Delete Requests | M | 3 hrs | 3 hrs | 3 hrs |
| Style with Flexbox | M | 3 hrs | 6 hrs | 2 hrs |
| Add Media Query to Application | L | 3 hrs | 3 hrs | 0 hrs | 
| Style Components | L | 3 hrs | 6 hrs | 0 hrs |
| Total | H | 39 hrs | 51 hrs | 37 hrs |

## SWOT Analysis

### Strengths:
I am able to conceptualize how I want my application to look and function and what resources are available to me to accomplish most of it on my own

### Weaknesses:
I am still working to understand how state, props, and the component lifecycle works.  I will need to rely on review of lectures and exercises to really get a grasp of how to incorporate these into my project correctly.

### Opportunities:
I learn best when I have received material and have time to digest.  Project week will allow me to really spend time on concepts and lectures that I wasn't clear on and spend time solidifying them through trial and error and research.  

### Threats:
Advanced styling and adding bells and whistles can lead to spending excessive amounts of time researching and tinkering around with can be a big time suck.  
