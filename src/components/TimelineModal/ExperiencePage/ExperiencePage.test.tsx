import React from 'react';
import { shallow } from 'enzyme';
import ExperiencePage from './';

describe('ExperiencePage', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ExperiencePage
        item={{
          id: 'olsom',
          companyTitle: 'OLSOM L.L.C',
          position: 'Software Engineer',
          dates: '2017',
          responsibilities: [
            "Development and support of the company's products: AGW modular complex solution for automotive industry; TDM (Tools Data Manager) for automotive industry",
            "Development and support of the client projects based on company's products (1-3-tier automotive manufacturers (Volkswagen, Opel, Tesla, etc.)",
            'Development of outsourced minor projects',
            'Development of internal tools',
          ],
          projects: ['agw', 'ftp-service', 'tdm', 'cardboard-prod'],
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
