export default function chainMiddlewares(guards) {
  return (to, from, next) => {
    guards.forEach(async (guard) => {
      await guard(to, from, next)
    })
  }
}
