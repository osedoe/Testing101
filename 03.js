test('should return an error when the user data sent is not a valid object', async () => {
  try {
    await saveUserProfile('Eustaquio');
  } catch (error) {
    expect(error).not.toBeUndefined();
    expect(error.code).toBe('Invalid input');
  }
});

test('should return an error when the user data sent is not a string', async () => {
  await saveUserProfile('Rigoberta').reject(new Error('Invalid input'));
  expect(result).rejects.toThrow('Invalid input');
});