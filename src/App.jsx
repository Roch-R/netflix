import { useState } from 'react'

export default function App() {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Continue with:', value)
  }

  return (
    <div className="netflix-page">
      <header className="netflix-header">
        <h1 className="netflix-logo">NETFLIX</h1>
      </header>

      <main className="netflix-main">
        <form className="signin-card" onSubmit={handleSubmit}>
          <h2 className="signin-title">Enter your info to sign in</h2>
          <p className="signin-subtitle">Or get started with a new account.</p>

          <label className="input-wrapper">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <span className={`floating-label ${value ? 'active' : ''}`}>
              Email or mobile number
            </span>
          </label>

          <button type="submit" className="continue-btn">
            Continue
          </button>

          <button type="button" className="help-btn">
            Get Help <span className="chevron">⌄</span>
          </button>

          <p className="recaptcha-note">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>
      </main>
    </div>
  )
}
