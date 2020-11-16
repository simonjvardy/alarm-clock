![ISS Tracker](assets/img/logo-image.jpg)

The idea for this project is to build a site that would be an interesting learning tool for school astronomy clubs to use. 
Looking through online resources for tracking / viewing the International Space Station (ISS) location, the available data was 
good but the sites and apps lacked features to present the information that was easy to consume and the look and feel haven't been updated. 
So I wanted to build a tracking app that combined freely available API data from multiple sources and to present the ISS tracking information 
in a dashboard display that is easy to understand and something I'd want to use regularly myself.


![Responsive Layout Screenshots](/wireframes/am-i-responsive.jpg) 

To allow ease of deployment for end users such as school clubs, it was important to try to source all the data from APIs that didn't require the 
need to register and use API keys as well as including much information about any API Rate Limiting of requests.

## Contents ##

- [Contents](#contents)
- [UX (User Experience)](#ux-user-experience)
  - [Project Goals](#project-goals)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Site Owner Goals](#site-owner-goals)
- [Design Choices](#design-choices)
  - [Fonts](#fonts)
  - [Colours](#colours)
  - [Wireframes](#wireframes)
    - [Hand drawn drafts](#hand-drawn-drafts)
    - [Final Wireframes](#final-wireframes)
- [Technologies](#technologies)
  - [Languages](#languages)
  - [Libraries](#libraries)
  - [Tools](#tools)
- [Features](#features)
  - [Features Implemented](#features-implemented)
  - [Future Features](#future-features)
- [API](#api)
    - [API-1](#api-1)
    - [API-2](#api-2)
    - [API-3](#api-3)
- [Version Control](#version-control)
    - [Gitpod Workspaces](#gitpod-workspaces)
    - [Branches](#branches)
    - [Working within a branch](#working-within-a-branch)
    - [Merging branches in GitHub](#merging-branches-in-github)
    - [Update Gitpod with the latest GitHub commits](#update-gitpod-with-the-latest-github-commits)
- [Project Management](#project-management)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
  - [Running ISS-Tracker Locally](#running-iss-tracker-locally)
- [Credits](#credits)
  - [Images](#images)
  - [Colour](#colour)
  - [Image editing](#image-editing)
  - [Inspiration](#inspiration)
  - [Acknowledgements](#acknowledgements)

---

## UX (User Experience) ##

### Project Goals ###

The **goal** of this project is to build a website which displays near realtime data of the ISS Space Station in a dashboard format.

The **features** on the website will:

- Show a world map with the continuously updated position of the ISS Space Station overlayed on the map
- Present statistical data to the user relating to the ISS Space Station in a dashboard layout.
- Allow users to email comments and new feature requests to the site owners via a contact form.

I achieve this by:

- Proving continuous, near realtime ISS data using REST API requests.
- Presenting a world map with the current ISS position as a custom map marker.
- Presenting the ISS data in a clean, modern dashboard design.
- Providing an option to the customers to submit their contact and request details in a form.

### User Goals ###

- **Receive** ISS Space Station data presented in a dashboard layout.
- **Contact** the site owners to submit comments and new feature requests.

### User Stories ###

- As a **user**, I want to see a responsive navigation menu.
- As a **user**, I can see a world map showing the current location of the ISS Space Station.
- As a **user**, I can see the ISS Space Station location updating regularly.
- As a **user**, I can see a dashboad of current ISS data:
  - The ISS latitude and Longitude
  - The ISS orbital altitude.
  - The ISS orbital velocity.
  - The number of astronaughts onboard and their nationality
  - The time the ISS has been in Earth orbit.
  - The ISS is in daylight or eclipsed
  - The which timezone and country the ISS is currenty above
- As a **user**, I can see a switch to change the displayed units in metric or imperial
- As a **user**, I can see a button to change between light and dark display mode options.
- As a **user**, I can see a contact us form that emails the site owners after submission.

### Site Owner Goals ###

- As a **site owner**, I want to create an **interactive website** to present a clean, easy to understand display of information.
- As a **site owner**, I want the **user** to be able to have the data automatically refreshed as regularly as possible.
- As a **site owner**, I want the **user** to be able to see errors displayed in a user friendly way.
- As a **site owner**, I want the **user** to be able to contact me via email with their contact details, comments and new feature requests.

--- 

## Design Choices ##

### Fonts ###

I have chosen [Oswald](https://fonts.google.com/specimen/Oswald?query=Oswald) for all of the headers and [Roboto](https://fonts.google.com/specimen/Roboto?query=Roboto) the rest of the text.

### Colours ###

I have chosen the colours that say 'trust' and 'dependable' buy using light blue, white and black to compliment the aviation theme. The images used in the site display a range of blue tones and so the palette choice also compliments the design of the project.
![Colour palette](wireframes/coolors-palette-sm.png)

- *Black* (000000) - Black
- *Onyx* (444444) - Dark Grey
- *Light Blue* (ADD8E6) - Sky blue
- *White* (FFFFFF) - White

These colours will compliment each other well when used across the site creating a professional, clean website.

### Wireframes ###

I designed the site mock-ups originally using pen and paper and then developing the designs further using [Balsamiq wireframes](https://balsamiq.com/).

I'm focusing on defining the basic layout structure of the site and identifying how displays would change on different screen sizes such as mobile, tablet and desktop for each page.

#### Hand drawn drafts ####

The original hand drawn sketch wireframes were created as quick and rough method to try out page formatting ideas to form a basis for creating the wireframe within balsamic.

They represent the early stages of the design process for the website as ideas started to form and the flow of the design process from idea to finished website.
- [Homepage](wireframes/original-drafts/wireframe-mobile-homepage-draft.jpg)
- [Contact Us](wireframes/original-drafts/wireframe-mobile-contact-us-draft.jpg)


#### Final Wireframes ####

The final wireframes were created using Balsamiq adapted from the original hand drawn wireframe concepts. Each image shows a page from the site in three display sizes to demonstrate the page design and layout.

- [Homepage](wireframes/home-page.png)
- [Contact Form Modal](wireframes/contact-form.png)

---  

## Technologies ##

### Languages ###

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Used as the main markup language for the website content.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Used to style the individual webpages.

### Libraries ###

- [Bootstrap](https://getbootstrap.com/)
  - Used to design a mobile-first responsive website layout.
- [jQuery](https://jquery.com/)
  - Loaded as part of the [Bootstrap CDN starter template](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template)
- [Popper](https://popper.js.org/)
  - Loaded as part of the [Bootstrap CDN starter template](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template)
- [Jasmine.js](https://jasmine.github.io/pages/getting_started.html)
  - Used to create test-driven development of the JavaScript files

### APIs ###

- [Where The ISS At?](https://wheretheiss.at/w/developer)
  - WTIA REST API providing position, velocity, altitude, timezone for a set of cordinates etc.
- [Leaflet.js](https://leafletjs.com/download.html)
  - [TBC]
- [OpenStreetMaps.org](https://popper.js.org/)
  - [TBC]
- [EmailJS](https://www.emailjs.com/)
  - A service using a JavaScript SDK that allows you to send emails without the need for backend development.
  
### Tools ###

- [Git](https://git-scm.com/)
  - Git was used for version control by utilising the Gitpod terminal to commit to Git and push to GitHub.
- [GitHub](https://github.com/)
  - Used to store, host and deploy the project files and source code after being pushed from Git.
- [Gitpod](https://www.gitpod.io/)
  - An online IDE linked to the GitHub repository used for the majority of the code development.
- [CodePen](https://codepen.io/simonjvardy/)
  - An online code editor and open-source learning environment used to test small sections of code quickly and easily.
- [Visual Studio Code](https://code.visualstudio.com/)
  - A locally installed IDE connected to the GitHub repository for when there was no internet connection to use Gitpod.
- [Font-Awesome](https://fontawesome.com/icons?d=gallery)
  - Used for icons to enhance headings and add emphasis to text.
- [Google fonts](https://fonts.google.com/)
  - Used for the website fonts.
- [Coolors](https://coolors.co/)
  - An online tool used to choose the website colour scheme.
- [Favicons](https://favicon.io/)
  - Used to generate a favicon for the website title.
- [Am I Responsive?](http://ami.responsivedesign.is/)
  - A tool for taking a quick snapshot of the responsive breakpoints of the website to visualise how the site will look on different device screen sizes in one place. The resulting screenshot is also used as the README.md logo image.
- [What is my Screen Resolution](http://whatismyscreenresolution.net/)
  - An online tool to find out the screen resolution on your device used for CSS @media queries

---

## Features ##

### Features Implemented ###

- Responsive mobile first design using a [Bootstrap](https://getbootstrap.com/) framework.
- User friendly display with lots of images
- A Navbar with easy navigation that collapses on mobile displays
- A Contact Us pop-up modal with a form to submit user details and a message that will generate an email
- Social media links

  
### Future Features ###

- Allow users to enter an address and receive future iSS sighting data

---

## Version Control ##
**Version control** for this repository is managed within **GitHub** and **Gitpod** using separate [branches](https://github.com/simonjvardy/ISS-Tracker/branches)  used to work on specific aspects of the project.
The following describes the repository branch structure:
- **Master** - this is the default branch and the source for the repository deployment.
    - **Documentation** - this branch is used for updating the README.md and testing.md documentation only.
    - **Development** - this branch is used as the main working branch for the website development
    - Each individual **bug fixes** are raised within their own **separate branches** using the naming convention **\<GitHub Issue ID Number>-\<bug fix description>** e.g. branch name ***12-correct-navbar-links*** 

The following workflow steps are used to create and update branches within Gitpod and to push changes back to GitHub.

#### Gitpod Workspaces ####
1. Open **Gitpod** from **Github** using the Gitpod button. This needs to only be done **once** at the start of the project.
2. Start the Gitpod Workspace which opens an **online IDE editor** window.

#### Branches ####
3. For changes to be made to any **documentation files**, the git command `git checkout documentation` is used to checkout and switch to the **documentation branch**.
4. For changes to be made to **other files** under normal site development, the git command `git checkout development` is used to checkout and switch to the **development branch**.
5. To create a **new branch** for bug fixes, use the git command `git checkout -b <branch-name>` to **create and switch** to the new branch.

#### Working within a branch ####
6. **New** or **modified** files are **staged** using the `git add .` command
7. The changes are **committed** using `git commit -m "<commit message>"` command.
8. If the changes are in a newly created branch, the **committed** changes are **pushed** from Gitpod to GitHub using the `git push --set-upstream origin <branch-name>` command as there is currently no upstream branch in the remote repository.
9. For branches that have already been synchronised, the **committed** changes are **pushed** from Gitpod to GitHub using the `git push` command.

#### Merging branches in GitHub ####
10. Opening the repository in Github, a new **pull request** is created for the updated branch and assigned to the **Development project**.
11. The changes are **reviewed** to ensure there are **no conflicts** between the **updated branch** and the **Master branch**.
12. The changes are then **merged** into the **Master branch** and the merge request is **closed**. The **Project entry** is **automatically** moved to the **Done** card.

#### Update Gitpod with the latest GitHub commits ####
13. To update Gitpod with the **latest commits** From GitHub, the `git checkout master` command is used to checkout and switch to the master branch.
14. Use the `git pull` command to update the master branch and **reset the pointer**.
15. Now **switch** to the **other branches** in Gitpod using the `git checkout <branch-name>` command and use the `git merge origin/master` command to **update each branch in turn**.
16. Use the `git push` on **each branch** to update the relevant GiHub Branches to the **same commit** as the **Master branch**.
17. **Repeat steps 3 - 17 regularly** to ensure updates are **saved** and **correctly version controlled** in GitHub.

---

## Project Management ##

GitHub [Projects](https://github.com/simonjvardy/ISS-Tracker/projects) are used to organise the planning and development of the website using the Automated kanban template.
The following project cards are used to manage the tasks:
- **Backlog** - this card is used to capture ideas for project tasks.
- **To Do** - this is the current work queue for the project.
- **In Progress** - this is the list of tasks currently in work.
    - New issues and pull requests are automatically added to this column using project card automation options.
- **Review in progress** - Pull requests are automatically moved here by project automation options when the reviewer requests any changes to be carried out.
    - As there is only one contributor on this project currently, most pull requests bypass this card as the request is usually reviewed and merged in the same step.
- **Reviewer approved** - Pull requests are automatically moved here by project automation options when they meet the minimum number of required reviews.
    - As there is only one contributor currently, most pull requests bypass this card as the request is usually reviewed and merged in the same step.
- **Testing** - Testing tasks list
- **Done** - completed tasks

Markdown syntax is used to create **"To-Do" list** style checkboxes by adding `- [ ]` for an un-ticked checkbox and `- [x]` for a ticked checkbox on cards as a way of splitting a single complex task into a list of steps to be completed.

![GitHub Projects](assets/img/github-projects.png)

---
## Testing ##

- Testing information can be found in a separate [testing.md](testing.md) file.

---
## Bugs ##

To manage bugs and issues tracking, the default GitHub [bug_report.md template](https://github.com/simonjvardy/ISS-Tracker/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) has been created and activated within the repository settings Features > Issues section.
All new bugs and issues are tracked within the GitHub repository [Issues section](https://github.com/simonjvardy/ISS-Tracker/issues) .
Open issues are managed within the [GitHub Projects section](https://github.com/simonjvardy/ISS-Tracker/projects)

Each branch is then **merged** into the **master branch** using a **pull request** that is **linked** to the **open issue**. Once merged, and the bug report **closed**, the branch is **deleted**.

Fixed bugs and issues are marked as [closed](https://github.com/simonjvardy/ISS-Tracker/issues?q=is%3Aissue+is%3Aclosed).

---

## Deployment ##

The website was developed using both *Gitpod* and *Visual Studio Code* and using *Git* pushed to *GitHub*, which hosts the repository. I made the following steps to deploy the site using *GitHub Pages*:

- Opened up **GitHub** in the browser.
- Signed in with my **username** and **password**.
- Selected my **repositories**.
- Navigated to **simonjvardy/ISS-Tracker**.
- In the top navigation clicked **settings**.
- Scrolled down to the **GitHub Pages** area.
- Selected **Master Branch** from the **Source** dropdown menu.
- Clicked to **confirm** my **selection**.
- [ISS-Tracker](https://simonjvardy.github.io/ISS-Tracker/) is now **live** on **GitHub Pages**.

### Running ISS-Tracker Locally ###

Cloning ISS-Tracker from GitHub:

- Navigate to **simonjvardy/ISS-Tracker**.
- Click the green **Code** button.
- **Copy** the url in the dropdown box.
- Using your favourite **IDE** open up your preferred terminal.
- **Navigate** to your desired file location.

Copy the following code and input it into your terminal to clone ISS-Tracker:

```git clone https://github.com/simonjvardy/ISS-Tracker.git```

---

## Credits ##

### Images ###

You can find the images used for the site [here](assets/images). I have sourced them through various websites, which are either free to use or used under license:

- Homepage

### Colour ###

The colour palette was identified on [Coolors](https://coolors.co/)

### Inspiration ###

The following websites were used for design and image ideas based on similar business sectors:
- [Osprey Consulting Services](https://ospreycsl.co.uk/)
- [IAG The International Aviation Group](https://theaviationgroup.eu/mro/)
- [Aviation Analysts International](http://www.inter-aviation.com/)
- [Aviation Consulting Services](https://aviationconsultingservices.com.au/)
- [ICF](https://www.icf.com/)
- [Alton Aviation Consultants](https://altonaviation.com/)
- [VJL Consulting Ltd](https://vjlconsult.com)

The following website was used for design ideas and a clean modern look:
- [Greenhouse Digital Marketing Agency](https://pages.ghagency.com/)

### Acknowledgements ###

- [Simon Vardy](https://github.com/simonjvardy/Aviation-Consultancy) MS-1 Project for the re-use of many ideas and code snippets.
- [NASA ISS Mission Page](https://www.nasa.gov/mission_pages/station/main/index.html) for it's endless supply of cool ideas, images, data, resources and all round awesomeness!
- [W3Schools](https://www.w3schools.com/) for just being a constant source of help and inspiration!
- [Code Institute](https://codeinstitute.net/full-stack-software-development-diploma/) Course material for the inspiration from code-along challenges.
- [San Francisco State Univerity](https://its.sfsu.edu/projects/resources) PMO Resources webpage where the original Unit Testing and UAT Testing Plan documents were sourced
- [usersnap.com blog](https://usersnap.com/blog/user-acceptance-testing-example/) which was the inspiration for the modified UAT Testing document and wording.
- [Richard Read](https://github.com/Readri205/MS2_Project) for project inspiration and ideas.
- [Frozenaught](https://github.com/Frozenaught/homechopped) for further README.md content ideas.
- [Gary Simons](https://github.com/GarySimons/WildBunch-Florist) for further README.md content ideas.
- [Software Testing Fundamentals (STF)](http://softwaretestingfundamentals.com/) for an excellent guide on building testing processes.
- [Git - Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) documentation for help understanding how to manage branches in GitHub / Gitpod.
- [Stack Overflow](https://stackoverflow.com/questions/273695/what-are-some-examples-of-commonly-used-practices-for-naming-git-branches) for ideas and help with GitHub branch naming conventions.
- [digitaljhelms](https://gist.github.com/digitaljhelms/4287848) for ideas and help with GitHub branch naming conventions.
- [TutorialRepublic](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/) for Boostrap help and tutorials.
- [Stack Overflow](https://stackoverflow.com/questions/49042458/how-do-i-create-a-transparent-jumbotron-with-bootstrap-v-4-0-0) for fixing the Jumbotron background problem.
- [Bootstrap](https://getbootstrap.com/)
  - [Jumbotron](https://getbootstrap.com/docs/4.5/components/jumbotron/) example code was copied and adapted for the Home page CTA / Hero image.
  - [Cards](https://getbootstrap.com/docs/4.5/components/card/) example code was copied and adapted for the Home page features section.
  - [Modal](https://getbootstrap.com/docs/4.5/components/modal/) example code was copied and adapted for the Contact Us form.
  - [Forms](https://getbootstrap.com/docs/4.5/components/forms/) example code was copied and adapted for the Contact Us form.
  - [Embeds](https://getbootstrap.com/docs/4.0/utilities/embed/) example code was copied and adapted for the Google Maps embedded iframe
  - [Icon Library](https://icons.getbootstrap.com/) icon HTML SVG tag code copied for the Contact Us modals form input fields
  
---
