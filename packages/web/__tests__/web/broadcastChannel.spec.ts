import { useBroadcastChannel } from '../../src'
import { Vue } from '../utils'
import { PASSIVE_EV } from '@vue-composable/core';

describe("broadcastChannel", () => {
  const _broadcastChannel = window.BroadcastChannel;
  const addEventListenerFn = jest.fn();
  const removeEventListenerFn = jest.fn();
  const postMessageFn = jest.fn();
  const closeFn = jest.fn();
  const constructorFn = jest.fn();
  beforeAll(() => {
    class BroadcastChannel {
      constructor(...args: any[]) {
        constructorFn(...args);
      }
      addEventListener = addEventListenerFn;
      postMessage = postMessageFn;
      close = closeFn;
      removeEventListener = removeEventListenerFn;
    }
    Object.defineProperty(
      window,
      'BroadcastChannel',
      { writable: true, configurable: true, value: BroadcastChannel }
    );
    Object.defineProperty(
      global,
      'BroadcastChannel',
      { writable: true, configurable: true, value: BroadcastChannel }
    );
  });

  afterAll(() => {
    Object.defineProperty(
      window,
      'BroadcastChannel',
      { writable: true, configurable: true, value: _broadcastChannel }
    );
    Object.defineProperty(
      global,
      'BroadcastChannel',
      { writable: true, configurable: true, value: _broadcastChannel }
    );
  })


  beforeEach(() => {
    addEventListenerFn.mockReset();
    postMessageFn.mockReset();
    constructorFn.mockReset();
    closeFn.mockReset();
    removeEventListenerFn.mockReset();
  })



  it("should create new BroadcastChannel and assign listeners", () => {

    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const { close, isClosed } = useBroadcastChannel("test");

        expect(constructorFn).toHaveBeenCalledTimes(1);

        expect(isClosed.value).toBe(false);

        expect(addEventListenerFn).toHaveBeenCalledTimes(2);
        expect(closeFn).not.toHaveBeenCalled();

        close();
        expect(closeFn).toHaveBeenCalled();
        expect(isClosed.value).toBe(true);
        return {};
      }
    });
    vm.$mount();
  })


  it('should close on destroy', () => {
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        return useBroadcastChannel("test");
      }
    });
    vm.$mount();
    expect(closeFn).not.toHaveBeenCalled();
    vm.$destroy();

    expect(closeFn).toHaveBeenCalled();
    expect(removeEventListenerFn).not.toHaveBeenCalled();
  })

  it('should assign data', () => {
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const { data, messageEvent } = useBroadcastChannel("test");

        const ev = {
          other: 1,
          data: { test: 1 }
        };

        expect(data.value).toBeNull();
        expect(messageEvent.value).toBeNull();

        addEventListenerFn.mock.calls[1][1](ev);

        expect(messageEvent.value).toBe(ev);
        expect(data.value).toBe(ev.data);
      }
    });
    vm.$mount();
  })

  it('should set error to true on messageerror', () => {
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const { errored, errorEvent } = useBroadcastChannel("test");

        const ev = {
          test: 1
        }

        expect(errorEvent.value).toBeNull();
        expect(errored.value).toBe(false);

        addEventListenerFn.mock.calls[0][1](ev);

        expect(errorEvent.value).toBe(ev);
        expect(errored.value).toBe(true);

        return {};
      }
    });
    vm.$mount();
  })

  it('should addListener', () => {
    let addListenerCb = jest.fn();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const { addListener } = useBroadcastChannel("test");
        expect(addEventListenerFn).toHaveBeenCalledTimes(2);

        addListener(addListenerCb, PASSIVE_EV);

        expect(addEventListenerFn).toHaveBeenNthCalledWith(3, 'message', addListenerCb, PASSIVE_EV);

        return {};
      }
    });
    vm.$mount();

    vm.$destroy();

    expect(removeEventListenerFn).toHaveBeenCalledWith('message', addListenerCb);
  })


  it('should postMessage on send', () => {
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const { send } = useBroadcastChannel("test");
        expect(addEventListenerFn).toHaveBeenCalledTimes(2);
        expect(postMessageFn).not.toHaveBeenCalled();

        const d = { data: 'whatever' };
        send(d);

        expect(postMessageFn).toHaveBeenCalledWith(d);

        return {};
      }
    });
    vm.$mount();
  })

})