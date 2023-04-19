<h1 align="center">Intro component with signup form</h1>

<div align="center">
  <h3>
    <a href="https://intro-signup-form-alamin.netlify.app/">
      🚀 Live Site
    </a>
    |
    <a href="https://www.frontendmentor.io/solutions/intro-component-with-signup-form-w-sass-8LkXn89KsF">
      💡 Solution
    </a>
  </h5>
</div>

<p align="center">
  This project is a signup form built with HTML, CSS, and JavaScript. It features form validation using regular expressions and DOM manipulation to show error messages and style form elements.
</p>

## Screenshot

<a align="center" href="https://intro-signup-form-alamin.netlify.app/">

<img src="./screenshots/Screenshot - Intro component with sign-up form.png"/>
</a>

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

## Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Mobile-first workflow
- NPM
- Parcel

## Installation

- Clone this repo:

```sh
git clone https://github.com/CodePapa360/Intro-signup-form.git
```

- Install dependencies:

```sh
npm install
```

- Build command:

```sh
npm run build
```

- Run command:

```sh
npm start
```

## What I learned

In this project, I learned several key concepts related to form validation and manipulation using JavaScript. First, I learned how to use regular expressions to validate form inputs, such as email addresses, using the `test()` method.

Next, I learned how to manipulate the DOM to show error messages and style form elements using JavaScript. This involved accessing the parent and sibling elements of each form input to display relevant error messages, and changing the border color and label color of each input to indicate its validity.

I also learned about the difference between the click event on a submit button and the submit event on a form. While both events can be used to trigger form submissions, the submit event allows for additional validation and prevents the form from being submitted if any input is invalid.

Furthermore, I learned how to check if all form inputs are valid before submitting the form using JavaScript. This involved looping through each input and checking its validity using a function that combined regular expression validation and DOM manipulation.

Finally, I learned how to handle form submissions using JavaScript, including accessing form inputs and submitting forms. This involved preventing the default form submission behavior using `preventDefault()` and manually submitting the form using `submit()`. Overall, this project provided a great introduction to working with form elements in JavaScript.

## Useful resources

- [RegexMagic](https://www.regular-expressions.info/email.html) - This article by <b>Jan Goyvaerts</b> provides an in-depth explanation of how to use regular expressions to validate email addresses. The article not only explains how to write regular expressions for email validation but also covers the common mistakes made while writing regular expressions for email validation.

It provides clear and concise examples of regular expressions for email validation and also explains the logic behind each regular expression.

## Author

<b>👤 Alamin</b>

- Twitter - [@CodePapa360](https://www.twitter.com/CodePapa360)
- LinkedIn - [@CodePapa360](https://www.linkedin.com/in/codepapa360)
- Frontend Mentor - [@CodePapa360](https://www.frontendmentor.io/profile/CodePapa360)
- Github: [@CodePapa360](https://github.com/codepapa360)

Feel free to contact me with any questions or feedback!

## Show your support

Give a ⭐️ if you liked this project!

## Acknowledgments

I would like to express my gratitude to Frontend Mentor for providing this project idea and design. Their platform is an excellent resource for web developers looking to improve their skills.

## License

This project is licensed under the [MIT](https://github.com/CodePapa360/Intro-signup-form/blob/main/LICENSE.md) license, which means you can use, modify, and distribute the code as you wish. If you have any questions or feedback, feel free to reach out. Thank you for considering my code!
