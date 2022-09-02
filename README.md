
# Products table

Contains a brief description of what this project does and who it's for


## Run Locally

Clone the project

```bash
  git clone https://github.com/dhananjayjaiswal16/awign-assignment.git
```

Go to the project directory

```bash
  cd awign-assignment
```

Install dependencies

```bash
  npm install
```

Start the server on localhost:3000

```bash
  npm start
```


## Roadmap

- Search for any product or filter based on color or availability of products
- Products get updates as per filtered values


## Tech

- Built using React hooks
- Uses SASS for styling
- Responsive
- Uses react-select for filter UI
## File Description

- src/components/: Has all the component files used across this project
    - SelectFilter.js: Reusable component for select tag(uses react-select)

- src/pages/: Has all the pages which is shown based on url
    - Table.js : Main page of app which displays search bar, filter and main products table

- scss/: Has all stylesheets for designing various components and pages

- services/: 
    - api.js: responsible for making api request
    - helper.js : stores helper functions or variables

## Demo
https://dhananjay-awign-assignment.netlify.app/

