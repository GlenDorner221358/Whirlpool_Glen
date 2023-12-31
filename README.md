
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/GlenDorner221358/Whirlpool?color=lightblue)
![GitHub watchers](https://img.shields.io/github/watchers/GlenDorner221358/Whirlpool?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/GlenDorner221358/Whirlpool?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/GlenDorner221358/Whirlpool?color=lightblue)

<h5 align="center" style="padding:0;margin:0;">Christian Krahtz | Glen Dorner | Hannah Naidoo | Tsebo Ramonyalioa </h5>
<h5 align="center" style="padding:0;margin:0;">221198 | 221358 | 21100366 | 200200</h5>
<h6 align="center">DV200 | Term 4</h6>
</br>
<p align="center">

  <a href="https://github.com/GlenDorner221358/Whirlpool">
    <img src="/whirlpool/client/Assets/Whirlpool.svg" width="200px">
  </a>

<h3 align="center">Whirlpool</h3>

  <p align="center">
    This is a MERN Stack Q&A<br>
   <br />
   <br />
   <!-- <a href="https://youtu.be/8iZ_rSmcN0E">View Demo</a> -->
    ·
    <a href="https://github.com/GlenDorner221358/Whirlpool/issues">Report Bug</a>
    ·
    <a href="https://github.com/GlenDorner221358/Whirlpool/issues">Request Feature</a>
</p>


## Table of Contents

- [About the Project](#about-the-project)
    - [Project Description](#project-description)
    - [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
    - [Ideation](#ideation)
    - [Wireframes](#wireframes)
- [Development Process](#development-process)
    - [Implementation Process](#implementation-process)
        - [Highlights](#highlights)
        - [Challenges](#challenges)
    - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
    - [Mockups](#mockups)
    - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project


### Project Description

Welcome to Dream Team! This is an API-generated webpage, it is similar to seeing a Forex website/application which displays statistics on the currencies, well with that in mind, Dream Team displays players' statistics such as their Field Ground Points,
3pt field ground goals made, field ground percentage ad well as more stats such as offensive rebounds. This website benefits NBA and basketball wannabes to learn more about basketball much easier with the help of Chart.js to display the content in an interesting manner. Please note that most of these NBA stats are up to 2018.

### Built With
[<img src="https://www.svgrepo.com/show/331488/mongodb.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=gs_emea_south_africa_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783) [<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://expressjs.com/)[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="6%" height="6%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://reactjs.org/)[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://nodejs.org/en/)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, the latest version of Node.js is required. The latest version can be downloaded from [Node.js](https://nodejs.org/en/download/)

### Installation

Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/GlenDorner221358/Whirlpool.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/GlenDorner221358/Whirlpool.git
    ```

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm install
    ```

## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->




<!-- CONCEPT PROCESS -->
<!-- Briefly eOpenStacklain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

I went with a simple and minimalistic UI design as I wanted a dark mode type of design, thus I utilised dark colours. DreamTeam is a website that is there to help users understand the sport of basketball. The process I took for this project was to explore and figure out things on my own so I took an explorative route for this one as I feel it payed of in my experience as a developer



### Wireframes

<!-- ![image8](client/src/Assets/mockups/wireframes.jpg) -->
<!-- ![image1](src/Assets/Landing%20Page.jpg)
![image2](src/Assets/Comparison%20Page.jpg)
![image3](src/Assets/Timeline%20Page.jpg) -->
#### Login
![image1](./Wireframes/Login.jpeg)
#### Home/Landing
![image2](./Wireframes/Home.jpeg)
#### Question
![image3](./Wireframes/Question.jpeg)
#### Single Question
![image4](./Wireframes/Single.jpeg)

## Development Process

The `Development Process` is the technical implementations and functionality done for the app.

### Implementation Process

- I used `npx create-react app` to create this React project. I implemented component-based development instead of classes. By doing this, I will be able to easily inject and eject components and sub-components into my project, making it refactorable and reusable instead of writing up classes I have to do everytime making it tedious and redundant

- I obeyed the `saas` styling of my project which is slightly different to `scss` as the manner in which indentation has been applied is important and semi-colons are not allowed 

<!-- and used `module.scss` to style each individual component. An id get given to each classname, making the styling super easy -->

- `axios` was implemented so that I can make HTTP requests to the BallDontLie API so that I can dynamically display these datasets on a magic chart called charts.js version 5

<!-- edit, delete and send (CRUD) data to it -->


#### Highlights

stipulated the highlight you experienced with the project

- The search functionality was surprisingly easy to implement
- Cursor with gpt4 makes the workload painlessly efficient
- Working in a group allowed us to efficiently split the workload so no one was overwhelmed


#### Challenges

stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved)

- Updating all of the data entries in our database when we made a change to the models
- The routes were a massive pain to get working
- Image uploading was a nightmare
- The styling was also quite a challenge, some components did not cooperate no matter the amount of css we threw at them
- one thing we had an issue with was a Mac and Windows compatibility when addressing the node modules as we had to delete and reinstall the modules every time someone committed their changes on Github


### Future Implementation

<!-- TODO Change this! -->

stipulate functionality and improvements that can be implemented in the future.

- We would love to make our Front-end better than it is 

## Final Outcome

### Deployment Link

- **Deployment Link** - https://whirlpool-live-334e9800cedf.herokuapp.com/

*NOTE: HEROKU STARTED CHARGING ME SO I CANCELLED THE DEPLOYMENT

### Mockups

#### Profile Page
![image5](./Mockup/Mockup1.png)
#### Home/Landing
![image6](./Mockup/Mockup2.png)
#### Question
![image7](./Mockup/Mockup3.png)
#### Single Question
![image8](./Mockup/Mockup4.png)
#### Single Questions Filter
![image9](./Mockup/Mockup5.png)
#### Login 
![image10](./Mockup/Mockup6.png)
#### Register 
![image10](./Mockup/Mockup7.png)
<br>


<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

<!-- TODO Change this -->

<!-- To see a run through of OpenStack, click below: -->
<!-- Add Video Here -->
[View Demonstration](https://drive.google.com/file/d/1nufmo-7J4-MQJsxDnG7TMPcMel9I3NrB/view?usp=sharing)

See the [open issues](https://github.com/GlenDorner221358/Whirlpool/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->

## Author
- **Christian Krahtz** - [Github](https://github.com/CWKrahtz)
- **Glen Dorner** - [Github](https://github.com/GlenDorner221358)
- **Hannah Naidoo** - [Github](https://github.com/HannahAmaria)
- **Tsebo Ramonyalioa** - [Github](https://github.com/Tsebo200)


<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact
**Glen Dorner** - [tsebo.ramonyalioa.an@gmail.com](mailto:tsebo.ramonyalioa.an@gmail.com) - [@inspiration200200](https://www.instagram.com/inspiration__200) 

- **Project Link** - https://github.com/GlenDorner221358/Whirlpool

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->
<!-- TODO Change this -->

- [Stack Overflow](https://stackoverflow.com/)
- [Figma](https://www.figma.com/)
- [ChatGPT](https://chat.openai.com/)
- [Cursor](https://cursor.sh/)
<!-- - [Lecturer](https://github.com/MikeMaynard14) -->
<!-- - [Freepik](https://www.freepik.com) -->



[image1]: src/Assets/Images/Dashboard.png
[image2]: src/Assets/Images/Compare.png
[image3]: src/Assets/Images/Timeline.png


