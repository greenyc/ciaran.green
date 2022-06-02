/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import SmallScreenWarning from "./SmallScreenWarning.vue";

describe("SmallScreenWarning tests", () => {
  it("should render", async () => {
    const wrapper = mount(SmallScreenWarning);
    expect(wrapper.exists());
  });
});
