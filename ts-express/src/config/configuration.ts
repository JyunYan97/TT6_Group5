export default () => ({
  secretKey: process.env.SECRET_KEY || 'secretKey',
  mongouri: process.env.MONGO_URI || '',
})
