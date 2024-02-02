# Intro

This is a generic component. It's a auto complete select box that take options from an array or an API call.<br>
It has used only React + TS.

# Structure

```
HomePage
├── AddNewReviewContainer.tsx
│   ├── Container
│   ├── Input
│   ├── ErrorMsg
│   ├── Select
│   └── Button
├── SearchReviewContainer.tsx
│   ├── Container
│   └── Input
└── ReviewListContainer.tsx
    ├── Container
    └── Card
```

- AddNewReviewContainer.tsx : Parent component - Event handling for `onBlue(handleClickOffSelect)` and `onKeyDown(handleKeyDown)`
  - fieldset : Component for grouping - Event handling for `onClick(handleFieldsetClick)`
- SearchReviewContainer.tsx : Input component - Event handling for `onChange(handleInputChange)`
  - fieldset : Component for grouping - Event handling for `onClick(handleFieldsetClick)`
- ReviewListContainer.tsx : Button comp
  - fieldset : Component for grouping - Event handling for `onClick(handleFieldsetClick)`

# Logic

## Select.tsx

- `inputRef`: `ref` for focusing input
- `resultContainerRef`: `ref` for scrolling on option list with keyboard actions

- `isFocused` : `state` to check focusing for styling
- `isActivated` : `state` for checking `value`
- `anchorEl` : `state` for displaying option list
- `focusedIndex` : `state` for event listener of keyboard and mouse
- `selectedOption` : `state` for selected option
- `selectedOptionValue` : `state` for selected option

- `findLongestLabel` : To generate `width` from the longest `label`
- `injectValue` : To Inject default value
- `resultContainerRef.current.scrollIntoView({block: 'nearest'})` : To scroll with keyboard on the option list

## List.tsx

### List

- `handleScroll` : To render the option list either above or below of the component depending on the space. It uses `setInterval` to reduce calling the function.

### ListItem

- `backgroundColor` : Applying background color according to `focusedIndex` and `selectedOptionValue`

<br>
<br>
<br>

# Set up instruction

To install the package and run the project: `npm install && npm run dev` <br>
To test the project : `npm run test`

It has set up with specific height of the page to test the functions.<br>
Also, it has set up with different options to see the difference for two things, width and the functionality.
