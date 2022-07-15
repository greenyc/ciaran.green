/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import Test from "./Test.vue";

describe("HelloWorld tests", () => {
  it("should render", async () => {
    const wrapper = mount(Test);
    expect(wrapper.exists());
  });
});
