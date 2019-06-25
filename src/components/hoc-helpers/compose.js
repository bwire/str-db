const compose = (...fns) => {
  return (item) => fns.reduceRight((comp, fn) => fn(comp), item);
};

export default compose;