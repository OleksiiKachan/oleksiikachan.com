import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EngineeringSection from './index';

const mockSkills = [`TypeScript`, `React`];
const mockCertifications = [
  { name: `Apollo Graph Developer`, issuer: `Apollo GraphQL`, year: 2025, category: `tech` as const },
  { name: `PADI Open Water Diver`, issuer: `PADI`, year: 2022, category: `other` as const },
];

describe(`EngineeringSection`, () => {
  it(`renders "ENGINEERING" eyebrow label`, () => {
    render(<EngineeringSection skills={mockSkills} certifications={mockCertifications} />);
    expect(screen.getByText(`ENGINEERING`)).toBeTruthy();
  });

  it(`renders all skills`, () => {
    render(<EngineeringSection skills={mockSkills} certifications={mockCertifications} />);
    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeTruthy();
    });
  });

  it(`renders only tech certifications`, () => {
    render(<EngineeringSection skills={mockSkills} certifications={mockCertifications} />);
    expect(screen.getByText(`Apollo Graph Developer`)).toBeTruthy();
    expect(screen.queryByText(`PADI Open Water Diver`)).toBeNull();
  });
});
