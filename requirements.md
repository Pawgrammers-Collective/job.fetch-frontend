# Software Requirements

## Vision

```
Minimum Length: 3-5 sentences
What is the vision of this product?
What pain point does this project solve?
Why should we care about your product?
```
1. What is the vision of this product?
    - Our product will provide users with a one stop shop for their new journey in finding a tech career.  Allowing users to input their location and filter their job desires, the app will then provide the users with a list of jobs with their own tailored covered letter that they can use for the application process.
2. What pain point does this project solve?
    - The platform addresses the challenges faced by tech job seekers, offering a centralized hub for job search, resume building, and interview preparation.  It solves the pain points of scattered resources, lack of personalized guidance, and the time-consuming nature of tailoring application materials for specific job opportunities.
3. Why should we care about your product?
    - We’re helping fellow entry level developers gain employment by providing them with resources.


## Scope (In/Out)

```
- IN - What will your product do
- Describe the individual features that your product will do.
- High overview of each. Only need to list 4-5
- Example:
  - The web app will provide information to the users about all the different Cat Cafe’s in the area
  - The web app will provide both walking and driving directions to each of the destinations
  - Users will be able to “Star” their favorite shops.
  - Each shop will contain reviews of the customer’s experiences
- OUT - What will your product not do.
  - These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
```

- IN: What will your product do
  - The app will allow users to log into the site and view previously saved jobs.
  - The app will allow users to search job openings based on location and filtered keywords
  - The app will create a cover letter(with the help of AI) tailored to the job that the user has selected on screen.
  - The app will provide resources for interview preparation -ie code challenges


- OUT: What will your product not do.
  - This site will be web-based and not mobile-ready


### Minimum Viable Product vs

1. What will your MVP functionality be?
    - The platform should demonstrate the key features of job search, filtering, and saving, as well as the AI-driven interview question and cover letter generation.


### Stretch Goals

1. What stretch goals are you going to aim for?
    - LeetCode API to allow users to practice, interview prompt questions tailored to selected job, resume coach
    - LeetCode and interview prompts are priority.



## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. A user can login to the site inorder to view stored data
1. A user can search their city and desired job title and view results given
1. A cover letter based on the selected job will be shown to the user.



### Data Flow

>Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. User is prompted to login into the site
2. On page load job/cover letter are blank and “search” button is visible
3. User presses “search” button and enters location and desired role
4. On submit, 10 jobs related to user’s filters appear on screen 
5. On job window, job information is displayed along with “favorite” button and “cover letter” button
6. User presses the “favorite” and “cover letter” button. Job is added to favorites and cover letter generates to the right hand side of the screen
7. User then can copy cover letter and navigate to the favorites link and view all favorited jobs
8. User logs out.


## Non-Functional Requirements (301 & 401 only)

> Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.
> Examples include:
> Security
> Usability
> Testability
> etc….
> Pick 2 non-functional requirements and describe their functionality in your application.
> If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.
> You MUST describe what the non-functional requirement is and how it will be implemented. Simply saying “Our project will be testable for testibility” is NOT acceptable.
>  Tell us how, why, and what.

1. Security:
  - User data should be encrypted during transmission using HTTPS.
  - The website should implement proper user authentication and authorization mechanisms.
2. Usability:
  - The user interface should be intuitive and user-friendly.
  - The website should be accessible to users with disabilities, following accessibility standards (e.g., WCAG).


