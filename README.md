# A dismissible alert component for Vue.js 2

> This package doesn't provide CSS styles. You can use the [Elements framework](https://github.com/dany68/elements) or simply grab the [alert.scss file](https://github.com/dany68/elements/blob/master/sass/components/_alert.scss) from it.

## Demo
A live demo is available [here](https://dany68.github.io/elements/docs/components/alerts).

## Installation
You can install the package via npm:

```php
npm install dany68/v-alert --save
```

Then you will need to register the component globally in you main js file.

```js
// If Vue has been added to the global scope as:
// window.Vue = require('Vue')
require('v-alert');

// Otherwise
import Alert from 'v-alert';
Vue.use(Alert);
```

Alternatively you can register v-alert locally:

```js
//in your Component.vue or similar file
import Alert from 'v-alert';

export default {
    components: { 'v-alert': Alert }
}
```

## Usage

On your page you can now use html like this to render the alert:

```html
<v-alert type="flash" level="success" dismissible>
    <h2>Well done!</h2>
    <p>You can write any HTML/JS here.</p>
</v-alert>

<!-- Will generate -->

<div class="flash is-success" role="alert">
    <button type="button" class="alert-close-btn" title="Close"></button>
    <h2>Well done!</h2>
    <p>You can write any HTML/JS here.</p>
</div>

<!-- A click on the .alert-close-btn will remove the alert from the DOM  -->
```


| Prop        | Type              | Default | Required | Description                                                                                                   |
| ----------- | ----------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| show        | Boolean or Number | true    | No       | Define if the alert is displayed. If it's a number, it represent the number of second the alert is displayed. |
| type        | String            | alert   | No       | Define the main class of the alert div.                                                                       |
| level       | String            | info    | No       | Define the variant of the alert by adding a '.is-{level}' class to the alert.                                 |
| dismissible | Boolean           | false   | No       | Add a close `X` button that will remove the alert from the DOM once clicked.                                  |


### Two way binding with v-model
The v-model attribute can be used instead of the `show` property to bind the data between the parent and the component.

```html
<v-alert v-model="timer">
    This {{ timer }} value will be synchronize between the component and the parent each second.
</v-alert>
```


### Events

| Events             | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| dismissed          | Fired when the alert is removed from the DOM.                                                                   |
| dismiss-count-down | Fired each second until the end of the timer. Only fired if the show prop or the v-model attribute is a number. |
