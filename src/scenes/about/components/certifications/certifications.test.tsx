import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Certifications from './index';

const mockCerts = [
  { name: `Apollo Graph Developer`, issuer: `Apollo GraphQL`, year: 2025, category: `tech` as const },
  { name: `Meta Front-End Developer`, issuer: `Meta`, year: 2024, category: `tech` as const },
];

describe(`Certifications`, () => {
  it(`renders a "Certifications" heading`, () => {
    render(<Certifications certifications={mockCerts} />);
    expect(screen.getByText(`Certifications`)).toBeTruthy();
  });

  it(`renders each certification name`, () => {
    render(<Certifications certifications={mockCerts} />);
    mockCerts.forEach((cert) => {
      expect(screen.getByText(cert.name)).toBeTruthy();
    });
  });

  it(`renders issuer and year for each certification`, () => {
    render(<Certifications certifications={mockCerts} />);
    mockCerts.forEach((cert) => {
      expect(screen.getByText(`${cert.issuer} · ${cert.year}`)).toBeTruthy();
    });
  });
});
