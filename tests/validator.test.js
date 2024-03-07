const { isInvaLidEmail, isEmptyPayload } = require('../validator')

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "testing"
    }
    const result = isInvaLidEmail(testPayload)
    expect(result).toBe(false)
})

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "testing"
    }
    const result = isInvaLidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload', function() {
    const testPayload = {}
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test('non-empty payload', function() {
  const testPayload = {
    name: "test name",
    email: "test.email@example.com",
    interests: "testing"
  }
  const result = isEmptyPayload(testPayload)
  expect(result).toBe(false)
})