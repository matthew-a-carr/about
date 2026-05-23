import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import RevealOnScroll from './RevealOnScroll';

type Cb = (
  entries: Pick<IntersectionObserverEntry, 'isIntersecting' | 'target'>[],
) => void;

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: Cb;
  observed: Element[] = [];
  disconnect = vi.fn();
  unobserve = vi.fn((el: Element) => {
    this.observed = this.observed.filter((o) => o !== el);
  });
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = '';
  thresholds = [];

  constructor(cb: Cb) {
    this.callback = cb;
    MockIntersectionObserver.instances.push(this);
  }

  observe(el: Element) {
    this.observed.push(el);
  }

  trigger(target: Element, isIntersecting = true) {
    this.callback([{ isIntersecting, target }]);
  }
}

const SCENE = (
  <>
    <div className="reveal" data-testid="a" />
    <div className="reveal" data-testid="b" />
  </>
);

const originalIO = global.IntersectionObserver;

describe('RevealOnScroll', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    (
      global as unknown as { IntersectionObserver: typeof IntersectionObserver }
    ).IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    (
      global as unknown as {
        IntersectionObserver: typeof IntersectionObserver | undefined;
      }
    ).IntersectionObserver = originalIO;
  });

  it('observes every .reveal element on mount', () => {
    render(
      <>
        {SCENE}
        <RevealOnScroll />
      </>,
    );

    const [observer] = MockIntersectionObserver.instances;
    expect(observer.observed).toHaveLength(2);
  });

  it('adds in-view to intersecting elements and unobserves them', () => {
    const { getByTestId } = render(
      <>
        {SCENE}
        <RevealOnScroll />
      </>,
    );

    const [observer] = MockIntersectionObserver.instances;
    const target = getByTestId('a');

    expect(target.classList.contains('in-view')).toBe(false);
    observer.trigger(target, true);
    expect(target.classList.contains('in-view')).toBe(true);
    expect(observer.unobserve).toHaveBeenCalledWith(target);
  });

  it('does not add in-view when the entry is not intersecting', () => {
    const { getByTestId } = render(
      <>
        {SCENE}
        <RevealOnScroll />
      </>,
    );

    const [observer] = MockIntersectionObserver.instances;
    const target = getByTestId('b');
    observer.trigger(target, false);

    expect(target.classList.contains('in-view')).toBe(false);
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = render(
      <>
        {SCENE}
        <RevealOnScroll />
      </>,
    );

    const [observer] = MockIntersectionObserver.instances;
    unmount();
    expect(observer.disconnect).toHaveBeenCalled();
  });

  it('falls back to revealing everything when IntersectionObserver is unsupported', () => {
    // The component checks via `'IntersectionObserver' in window`, so the
    // property must actually be removed (not just set to undefined).
    delete (window as unknown as { IntersectionObserver?: unknown })
      .IntersectionObserver;

    const { getByTestId } = render(
      <>
        {SCENE}
        <RevealOnScroll />
      </>,
    );

    expect(getByTestId('a').classList.contains('in-view')).toBe(true);
    expect(getByTestId('b').classList.contains('in-view')).toBe(true);
  });
});
