export default function foo(data) {
  return data.sort((perv, next) => next.health - perv.health);
}
