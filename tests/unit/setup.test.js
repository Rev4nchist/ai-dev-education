/**
 * Basic test to verify Jest setup
 * This test ensures that our testing environment is working correctly
 */

describe('Jest Setup', () => {
  test('Jest is working correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('DOM testing is working correctly', () => {
    // Create a simple DOM element
    document.body.innerHTML = `
      <div>
        <h1 id="title">AI Dev Education</h1>
        <p data-testid="description">Learn about AI-assisted development</p>
      </div>
    `;

    // Test that we can query the DOM
    const title = document.getElementById('title');
    const description = document.querySelector('[data-testid="description"]');

    // Verify the elements exist and have the correct content
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('AI Dev Education');
    expect(description).not.toBeNull();
    expect(description.textContent).toBe('Learn about AI-assisted development');
  });
}); 