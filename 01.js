describe('Dropdown', () => {
  describe('render', () => {
    test('should render properly', () => {
      const dropdown = render(<Dropdown title="dropdown" data={animals} />);
      expect(dropdown).not.toBeUndefined();
    });

    test('should render the component collapsed when it\'s first rendered', () => {
      const { container } = render(<Dropdown title="dropdown" />);
      expect(container.find('DropdownItems')).toHaveLength(0);
    });
  })

  test('should render a default Dropdown component with a blue border and font-color', () => {
    const { container } = render(<Dropdown title="dropdown" />);
    expect(container.firstChild).toHaveStyleRule('border', '1px solid blue');
    expect(container.firstChild).toHaveStyleRule('color', 'blue');
  });
});