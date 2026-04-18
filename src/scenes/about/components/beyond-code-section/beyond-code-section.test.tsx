import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BeyondCodeSection from './index';

const mockRoles = [
  { title: `Part-time Faculty`, org: `Humber College` },
  { title: `VP of Technical`, org: `WushuCanada` },
];
const mockCertifications = [
  { name: `Apollo Graph Developer`, issuer: `Apollo GraphQL`, year: 2025, category: `tech` as const },
  { name: `PADI Open Water Diver`, issuer: `PADI`, year: 2022, category: `other` as const },
];

describe(`BeyondCodeSection`, () => {
  it(`renders "BEYOND CODE" eyebrow label`, () => {
    render(<BeyondCodeSection roles={mockRoles} certifications={mockCertifications} />);
    expect(screen.getByText(`BEYOND CODE`)).toBeTruthy();
  });

  it(`renders each role as title — org`, () => {
    render(<BeyondCodeSection roles={mockRoles} certifications={mockCertifications} />);
    expect(screen.getByText(`Part-time Faculty — Humber College`)).toBeTruthy();
    expect(screen.getByText(`VP of Technical — WushuCanada`)).toBeTruthy();
  });

  it(`renders only other certifications`, () => {
    render(<BeyondCodeSection roles={mockRoles} certifications={mockCertifications} />);
    expect(screen.getByText(`PADI Open Water Diver`)).toBeTruthy();
    expect(screen.queryByText(`Apollo Graph Developer`)).toBeNull();
  });
});
