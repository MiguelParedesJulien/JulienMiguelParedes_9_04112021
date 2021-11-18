/**
 * @jest-environment jsdom
 */
import { setLocalStorage } from "../../setup-jest";
import { fireEvent, screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";

describe("Given I am connected as an employee", () => {
   describe("When I am on NewBill Page", () => {
      test("Then the newBill page should be rendered", () => {
         const html = NewBillUI();
         document.body.innerHTML = html;
         expect(screen.getAllByText("Envoyer une note de frais")).toBeTruthy();
      });
      test("Then a form with nine fields should be rendered", () => {
         const html = NewBillUI();
         document.body.innerHTML = html;
         const form = document.querySelector("form");
         expect(form.length).toEqual(9);
      });
   });
});
