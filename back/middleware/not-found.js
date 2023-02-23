const notFoundMiddleware = (req,res) =>
res.status(404).send('Route does not exist')
//res.status(404).json({ msg : 'Route does not exist' })
export default notFoundMiddleware