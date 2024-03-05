# Dynamic & Conditional Inline Styles

```JSX
<input
  type="email"
  style={{
    backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
  }}
  // className={emailNotValid ? 'invalid' : undefined}
  onChange={(event) => handleInputChange('email', event.target.value)}
/>
```