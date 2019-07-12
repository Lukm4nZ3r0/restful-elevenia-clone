const nodemailer = require("nodemailer") 

module.exports =  transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maslownr@gmail.com",
    pass: "085959933411"
  }
})

module.exports = getPasswordResetURL = (user, token) =>
  `http://localhost:3000/password/reset/${user._id}/${token}`

module.exports = resetPasswordTemplate = (user, url) => {
  const from = "maslownr@gmail.com"
  const to = user.email
  const subject = "🌻 Backwoods Password Reset 🌻"
  const html = `
  <p>Hey ${user.displayName || user.email},</p>
  <p>We heard that you lost your Backwoods password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Backwoods</p>
  `

  return { from, to, subject, html }
}