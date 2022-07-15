/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../router";

import Navigation from "./Navigation.vue";

describe("Navigation tests", () => {
  it("should render", async () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });
});
