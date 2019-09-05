describe('Input', () => {
  describe('events', () => {
    test('should change when the user types a word', () => {
      // 1. Arrange
      const handleOnChange = jest.fn();
      const { getByPlaceholder } = render(<Input name="Name" placeholder="Nombre"/>);

      const name = 'Name';
      const value = 'Gumersindo';

      // 2. Act
      const input = getByPlaceholder('Nombre');
      fireEvent.change(input, { target: { name, value } });

      // 3. Assert
      expect(handleOnChange).toBeCalledWith(mockName, mockValue);
    });
  });
});