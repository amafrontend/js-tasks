import { Component, Input } from "@angular/core";

// Given:
// 1. A list of colors composed of ""red"" and ""green"" elements.
// 2. A ""Square"" component that renders a square of a given color and executes a click method.

// Implement a parent component named ""App"" that:
//     1. Uses the given Square component to render all squares from the ""colors"" list
//     2. Exposes the following functionality:
//   - click green  => change current element to "red" + add 1 new "green" element at the end of the list
//   - click red    => delete current element

@Component({
  selector: "app-square",
  styles: `
  div {
    text-align: center;
  }
  `,
  template: `
    <div
      [ngStyle]="{
        backgroundColor: color,
        width: '20px',
        height: '20px',
        margin: '10px'
      }"
    ></div>
  `
})
export class SquareComponent {
  @Input()
  public color = "black";
  public title = "CodeSandbox";
}

@Component({
  selector: "app-root",
  template: ` <!--Candidate must fill in template here--> `
})
export class AppComponent {
  colors = ["red", "green", "red"];
  //Candidate must fill in implementation here
}
