import { shallowMount } from '@vue/test-utils'
import AppView from '@/App.vue'

describe("stopwatch", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppView)
  });
  // describe("start", () => {
  //   it("should start the count", () => {
  //     wrapper.vm.start();

  //     setTimeout(function() {
  //       expect(wrapper.vm.time).toEqual("00:00:02.000");
  //     }, 2000)
  //   });
    
  // });

  // describe("stop", () => {
  //   it("should stop the count")
  // });

  describe("format number", () => {
    it("formats to  2 digits ", () => {
      const prefixedSeconds = wrapper.vm.formatNumber(1, 2);
      expect(prefixedSeconds).toEqual("01");
    });

    it("formats to  3 digits ", () => {
      const prefixedSeconds = wrapper.vm.formatNumber(1, 3);
      expect(prefixedSeconds).toEqual("001");
    })
  });
});

