import React from "react";
import { render, screen } from "@testing-library/react";

/**
 * If you're looking to refresh your knowledge of JSX fundamentals
 * make sure to check these pages from the official documentation:
 *
 * - https://react.dev/learn/writing-markup-with-jsx
 * - https://react.dev/learn/javascript-in-jsx-with-curly-braces
 */

describe("JSX Practice exercises", () => {
  describe("JSX basics", () => {
    /**
     * Implement the `HelloWorld` component
     * such that it says "Hello, John Doe!"
     *
     * Read the value from the `name` variable
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - simple interpolation
     * - mixing curly brackets with text
     */
    test("hello john doe", () => {
      const name = "John Doe";

      const HelloWorld = () => <p>Hello, {name}</p>;

      render(<HelloWorld />);
      expect(screen.getByText(/Hello, John Doe/)).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component such that
     * it renders an image
     *
     * Read the image path from the `imagePath` variable
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - passing atrributes from a variable
     * - using curly brackets as attributes
     */
    test("profile image 1", () => {
      const imagePath = "https://placekitten.com/200/300";

      const ProfileImage = () => <img src={imagePath} />;

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
    });

    /**
     * Implement the `ProfileImage` component
     * such that it renders the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - passing `style` as object - double curly brackets
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;

      const ProfileImage = () => (
        <img
          src="https://placekitten.com/200/300"
          style={{ border: "1px solid blue" }}
        />
      );

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border: 1px solid blue;"
      );
    });

    /**
     * Implement the `Avatar` component such that
     * it displays the name and image of a character.
     *
     * Read the details from the `character` variable.
     * Display the name inside a heading HTML tag.
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - reading from object properties
     */
    test("avatar", () => {
      const character = {
        name: "John Doe",
        image: "https://placekitten.com/200/300",
      };

      const Avatar = () => (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </>
      );

      render(<Avatar />);
      expect(screen.getByRole("heading")).toHaveTextContent(character.name);
      expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
      expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
    });
  });

  describe("JSX expressions", () => {
    /**
     * Update the `ProductPrice` component
     * such that the value of the price is displayed
     * with two decimals
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - using Javascript expressions in JSX
     * - using `Number.toFixed` to format numbers
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    test("format number", () => {
      const price = 12;

      const ProductPrice = () => {
        return <p>Price: {price.toFixed(2)}</p>;
      };

      render(<ProductPrice />);
      expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
    });

    /**
     * Update the `HelloReact` component
     * so that it outputs "React was launched on a Wednesday"
     *
     * Tip: You can use the `Intl.DateTimeFormat` helper,
     * passing in just the `weekday` option
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - using Javascript expressions in JSX
     * - using `Intl.DateTimeFormat` to format dates
     */
    test("format date - day of week", () => {
      // Date react was launched: May 29, 2013
      const reactLaunchDate = new Date("2013-05-29");
      const formatDate = (date) =>
        new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

      const HelloWorld = () => {
        return <p>React was launched on a {formatDate(reactLaunchDate)}</p>;
      };

      render(<HelloWorld />);
      expect(
        screen.getByText(/React was launched on a Wednesday/)
      ).toBeInTheDocument();
    });
  });

  describe("HTML to JSX", () => {
    /**
     * Implement the `LearnReactSection` component
     * such that it returns the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - JSX rule: all HTML tags should be closed
     * - unclosed `li` tags
     */
    test("learn react section", () => {
      const html = `
          <div>
              <h1>Learn React</h1>
              <ul>
                  <li>Describing the UI
                  <li>Adding interactivity
                  <li>Managing state
              </ul>
          </div>
  `;

      const LearnReactSection = () => (
        <div>
          <h1>Learn React</h1>
          <ul>
            <li>Describing the UI</li>
            <li>Adding interactivity</li>
            <li>Managing state</li>
          </ul>
        </div>
      );

      render(<LearnReactSection />);
      expect(screen.getByRole("heading")).toHaveTextContent(/Learn React/);
      expect(screen.getByRole("list")).toHaveTextContent(
        "Describing the UIAdding interactivityManaging state"
      );
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - JSX rule: all HTML tags should be closed
     * - unclosed `img` tag
     */
    test("john doe profile 1", () => {
      const html = `
      <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300">
      </div>
  `;

      const Profile = () => (
        <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300" />
        </div>
      );

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - JSX rule: only one root element
     */
    test("john doe profile 2", () => {
      const html = `
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
      `;

      const Profile = () => (
        <>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300" />
        </>
      );

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - JSX rule: no reserved keywords
     * - use `className` instead of `class` for passing in CSS classes
     */
    test("profile image 1", () => {
      const html = `<img src="https://placekitten.com/200/300" class="photo" />`;

      const ProfileImage = () => (
        <img src="https://placekitten.com/200/300" className="photo" />
      );

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("class", "photo");
    });

    /**
     * Implement the `CustomerCard` component
     * such that it returns the given HTML
     *
     * SOLUTION NOTES
     * This exercise checks:
     * - JSX rule exception: `data-*` attributes can be passed as is - as opposed to camel casing,
     * as is the convetion with other properties
     */
    test("customer card", () => {
      const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

      const CustomerCard = () => (
        <section data-testid="blueberry">
          <h1>BlueBerry INC</h1>
        </section>
      );

      render(<CustomerCard />);
      expect(screen.getByTestId("blueberry")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border-color: red;" />`;

      const ProfileImage = () => (
        <img
          src="https://placekitten.com/200/300"
          style={{ borderColor: "red" }}
        />
      );

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border-color: red;"
      );
    });
  });
});
