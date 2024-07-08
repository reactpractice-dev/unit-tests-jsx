import React from "react";
import { render, screen } from "@testing-library/react";

describe("JSX Practice exercises", () => {
  describe("JSX basics", () => {
    /**
     * Implement the `HelloWorld` component
     * such that it says "Hello, John Doe!"
     *
     * Read the value from the `name` variable
     */
    test("hello john doe", () => {
      const name = "John Doe";

      const HelloWorldd = ({ person}) => {
        return (
          <h1>Hello, {person.name}</h1>
        );
      }

      render(<HelloWorldd
        person={{ 
          name: name, 
        }}
      />);
      expect(screen.getByText(/Hello, John Doe/)).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component such that
     * it renders an image
     *
     * Read the image path from the `imagePath` variable
     */
    test("profile image 1", () => {
      const imagePath = "https://media-assets.swiggy.com/siggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png";

      const ProfileImagebyme = ({person}) => {
        return(
        <img
        src = {person.imgpath}
        alt= "image"
        style={{
            border: person.styborder
        }}/>
    )
    }

      render(<ProfileImagebyme person={{ 
          imgpath: imagePath, 
        }}/>);
      expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
    });

    /**
     * Implement the `ProfileImage` component
     * such that it renders the given HTML
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;
      const imagePath = "https://placekitten.com/200/300";
      const styborder = "1px solid blue";
      const ProfileImagebyme = ({person}) => {
        return(
        <img
        src = {person.imgpath}
        alt= "image"
        style={{
            border: person.styborder
        }}/>
    )
    }

      render(<ProfileImagebyme 
        person={{ 
          imgpath: imagePath,
          styborder: styborder, 
        }}/>);
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
     */
    test("avatar", () => {
      const character = {
        name: "John Doe",
        image: "https://placekitten.com/200/300",
      };

      const Avatarbyme = ({person}) => {
        return(
            <div>
                <h1>{
                person.name
            }</h1>
            <img
            src = {person.imgpath}
            alt= {person.name}
            />
                </div>
            
            
        );
    }

      render(<Avatarbyme 
        person={{
          name: character.name,
          imgpath: character.image,
        }} />);
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
     */
    test("format number", () => {
      const price = 12;

      const ProductPrice = ({person}) => {
        return <p>Price: {(person.price).toFixed(2)}</p>;
      };

      render(<ProductPrice person = {{price : price}} />);
      expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
    });

    /**
     * Update the `HelloReact` component
     * so that it outputs "React was launched on a Wednesday"
     *
     * Tip: You can use the `Intl.DateTimeFormat` helper,
     * passing in just the `weekday` option
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    test("format date - day of week", () => {
      // Date react was launched: May 29, 2013
      const reactLaunchDate = new Date("2013-05-29");
      var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      const HelloWorld = ({person}) => {
        return <p>React was launched on a {daylist[person.reactLaunchDate.getDay()]}</p>;
      };

      render(<HelloWorld person={{reactLaunchDate:reactLaunchDate}}/>);
      expect(
        screen.getByText(/React was launched on a Wednesday/)
      ).toBeInTheDocument();
    });
  });

  describe("HTML to JSX", () => {
    /**
     * Implement the `LearnReactSection` component
     * such that it returns the given HTML
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

      const LearnReactSection = () => {
        return(
          <div>
              <h1>Learn React</h1>
              <ul>
                  <li>Describing the UI</li>
                  <li>Adding interactivity</li>
                  <li>Managing state</li>
              </ul>
          </div>
        )
      };

      render(<LearnReactSection />);
      expect(screen.getByRole("heading")).toHaveTextContent(/Learn React/);
      expect(screen.getByRole("list")).toHaveTextContent(
        "Describing the UIAdding interactivityManaging state"
      );
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    test("john doe profile 1", () => {
      const html = `
      <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300">
      </div>
  `;

      const Profile = () => {
        return(
          <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
      </div>
        )
      };

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    test("john doe profile 2", () => {
      const html = `
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
      `;
      const Profile = () => {
        return(
          <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
          </div>
        )
      };

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    test("profile image 1", () => {
      const html = `<img src="https://placekitten.com/200/300" class="photo" />`;

      const ProfileImage = () => {
        return(
          <div>
          <img
          src = "https://placekitten.com/200/300"
          className = "photo"
          />
          </div>
        )
      };

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("class", "photo");
    });

    /**
     * Implement the `CustomerCard` component
     * such that it returns the given HTML
     */
    test("customer card", () => {
      const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

      const CustomerCard = () => {
        return(
          <section data-testid="blueberry"><h1>BlueBerry INC</h1></section>
        )
      };

      render(<CustomerCard />);
      expect(screen.getByTestId("blueberry")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border-color: red;" />`;
      const ProfileImagee = ({person}) => {
        return(
          <img 
      src="https://placekitten.com/200/300" 
      style={{ borderColor: 'red' }} 
    />
        )
      };

      render(<ProfileImagee />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border-color: red;"
      );
    });
  });
});
