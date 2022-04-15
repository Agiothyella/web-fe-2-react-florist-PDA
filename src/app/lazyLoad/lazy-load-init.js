import LazyLoad from "vanilla-lazyload";

const options = { threshold: 3240 };

function lazyLoadInit() {
  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(options);
  }
}

export default lazyLoadInit;
