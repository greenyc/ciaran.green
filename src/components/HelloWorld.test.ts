/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld tests", () => {
  it("should render", async () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.exists());
  });
});
