import { test as myTest } from "@playwright/test";

type Hiper = {
  age: number,
  email: string
};

let myFixturetest = myTest.extend<Hiper>({
  age: 22,
  email: "Hiper@exmable.com",
});

export let test = myFixturetest;
