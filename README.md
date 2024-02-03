# Structure

```
HomePage
├── AddNewReviewContainer
│   └── Container
│       ├── form
│       │   ├── Input
│       │   ├── ErrorMsg
│       │   ├── Select
│       │   └── Button
│       └── ToastContainer
├── SearchReviewContainer
│   └── Container
│       └── Input
└── ReviewListContainer
    └── Container
        └── Card
```

- AddNewReviewContainer.tsx
  - Container : UI component(`children`, `backgroundColor`, `title`)
  - Input : UI component(`label`, `placeholder`, `backgroundColor`,`name`,`onChange`,`onBlur`)
  - ErrorMsg : UI component(`message`, `hasError`)
  - Select : UI component(`label`, `options`, `name`,`onChange`)
  - Button : UI component(`text`, `customStyle`, `type`)
  - ToastContainer : React library
- SearchReviewContainer.tsx
  - Container : UI component(`children`, `backgroundColor`, `title`)
  - Input : UI component(`label`, `placeholder`, `backgroundColor`,`name`,`onChange`,`onBlur`)
- ReviewListContainer.tsx :
  - Container : UI component(`children`, `backgroundColor`, `title`)
  - Card : UI component(`title`, `comment`, `score`)

# Logic

## HomePage.tsx

- `useEffect`
  - Set up local storage from initial data if there ISN'T one.
  - Fetch data from local storage if there IS one.
- `filteredReviews` : This is for displaying reviews WITH search text
- `absoluteReviews` : This is for displaying reviews WITHOUT search text

### AddNewReviewContainer.tsx

- `useForm`: React form library, it give you ability to write a form with less code.
- `ToastContainer`: React form library, it's useful to display notifications.

### SearchReviewContainer.tsx

- `Input`: Handling search text

### ReviewListContainer.tsx

- `Card`: Generic card component. It has an optional prop of `score` to make itself be used for other cases as a normal card component.

<br>
<br>
<br>

# Set up instruction

To install the package and run the project: `npm install && npm run dev` <br>
To test the project : `npm run test`
