## Namaste React Course by Akshay Saini

# Chapter 04 - Talk is Cheap, show me the code

## Coding Assignment:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with Logo & Nav Items & Cart
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - Use Destructuring & Spread operator
      - `Render` your cards with dynamic data of restaurants
      - Use `Array.map` to render all the restaurants

# Namaste Food

/\*\*\*\*

- Header Section

* Logo
* Nav Items

- Body

* Search
* Restaurant Container
  - Restaurent Card
    - Img
    - Name of the restaurant,star rating,deliverytime,etc...

- Footer Section

* Copyrights
* License
* Links
* Contact Information
* Address Information
  \*/

Two types of export/import

- Default Export/Import

1. export default Component;
   import Component from "path";

- Named Export/Import

2. export const Component;
   import {Component} from "path";

# React Hooks

- Normal JS Utility function's
- useState()
- useEffect()
