import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from './index';

const mockSkills = [`TypeScript`, `React`, `SQL`];

describe(`Skills`, () => {
  it(`renders a "Tech Stack" heading`, () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByText(`Tech Stack`)).toBeTruthy();
  });

  it(`renders each skill`, () => {
    render(<Skills skills={mockSkills} />);
    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeTruthy();
    });
  });

  it(`renders nothing when skills array is empty`, () => {
    const { container } = render(<Skills skills={[]} />);
    expect(container.querySelector(`ul`)?.children.length).toBe(0);
  });
});
