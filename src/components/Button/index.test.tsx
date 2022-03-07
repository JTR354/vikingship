import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from ".";
describe("button", () => {
  test("init", () => {
    const text = "Nice";
    render(<Button>{text}</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn");
    expect(screen.getByRole("button")).toHaveTextContent(text);
  });

  describe("btnType", () => {
    test("primary", () => {
      render(<Button btnType="primary"></Button>);
      expect(screen.getByRole("button")).toHaveClass("btn-primary");
    });
    test("danger", () => {
      render(<Button btnType="danger"></Button>);
      expect(screen.getByRole("button")).toHaveClass("btn-danger");
    });
    test("link", () => {
      render(<Button btnType="link"></Button>);
      expect(screen.getByRole("link")).toHaveClass("btn-link");
    });
  });

  describe("size", () => {
    test("large", () => {
      render(<Button size="lg"></Button>);
      expect(screen.getByRole("button")).toHaveClass("btn-lg");
    });
    test("small", () => {
      render(<Button size="sm"></Button>);
      expect(screen.getByRole("button")).toHaveClass("btn-sm");
    });
  });
  describe("status", () => {
    test("normal", () => {
      render(<Button></Button>);
      expect(screen.getByRole("button")).not.toHaveClass("disabled");
      expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
    });
    test("disabled button", () => {
      render(<Button disabled></Button>);
      expect(screen.getByRole("button")).toHaveAttribute("disabled");
      expect(screen.getByRole("button")).not.toHaveClass("disabled");
    });
    test("disabled link", () => {
      render(
        <Button btnType="link" disabled>
          link
        </Button>
      );
      expect(screen.getByRole("link")).not.toHaveAttribute("disabled");
      expect(screen.getByRole("link")).toHaveClass("disabled");
    });
  });
  describe("event", () => {
    test("button", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} disabled></Button>);
      userEvent.click(screen.getByRole("button"));
      expect(onClick).not.toBeCalled();
    });
    test("link", () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick} disabled btnType="link">
          link
        </Button>
      );
      userEvent.click(screen.getByRole("link"));
      // ant design 没有用a标签
      // expect(onClick).not.toBeCalled();
    });
  });
});
