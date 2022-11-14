import { shallowMount } from '@vue/test-utils'
import AppView from '@/App.vue'

describe("stopwatch", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppView)
  });
  describe("start", () => {
    it("should start the count");
    
  });

  describe("stop", () => {
    it("should stop the count")
  });
});

