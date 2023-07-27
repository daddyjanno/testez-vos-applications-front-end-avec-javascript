/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import {
  getByRole,
  getByTestId,
  getByLabelText
} from '@testing-library/dom';

import userEvent from "@testing-library/user-event";

import { handleSignInForm } from "./index";
import SignIn from '../../pages/signIn';



beforeEach(() => {
  document.body.innerHTML = SignIn.render();
  handleSignInForm()
})

afterEach(() => {
  document.body.innerHTML = ""
})


describe("SignInForm Integration Test Suites", () => {
  it("should display the error message for invalid email", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre adresse e-mail"),
      "thomas@thomas.com"
    )

    userEvent.click(
      getByRole(document.body, "button")
    )

    expect(
      getByTestId(document.body, "user-email-error-msg")
    ).not.toHaveClass("hidden")
  })

  it("should not display the error message for invalid e-mail, but should display the password error message", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre adresse e-mail"),
      "thomas@facadia.com"
    );

    userEvent.click(
      getByRole(document.body, "button")
    );

    expect(
      getByTestId(document.body, "user-email-error-msg")
    ).toHaveClass("hidden");

    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).not.toHaveClass("hidden")
  })

  it("should display the error message for invalid password", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre adresse e-mail"),
      "thomas@facadia.com"
    );

    userEvent.type(
      getByLabelText(document.body, "Votre mot de passe"),
      "aaaa"
    );

    userEvent.click(
      getByRole(document.body, "button")
    );

    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).not.toHaveClass("hidden")
  })

  it("should not display any error message since both email and pwd are correct", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre adresse e-mail"),
      "thomas@facadia.com"
    );

    userEvent.type(
      getByLabelText(document.body, "Votre mot de passe"),
      "azerty"
    );

    userEvent.click(
      getByRole(document.body, "button")
    );

    expect(
      getByTestId(document.body, "user-email-error-msg")
    ).toHaveClass("hidden");

    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).toHaveClass("hidden")
  })
})
