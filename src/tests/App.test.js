import { render, screen } from '@testing-library/react';
import App from '../App';
import mocks from './mocks';

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
     global.fetch = jest.fn(() => Promise.resolve({
       json: () => Promise.resolve(mocks)
     }))
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', () => {
    const characterName = screen.getByRole('heading', {
      name: /rick sanchez/i,
      level: 3,
    })
    expect(characterName).toBeInTheDocument();
})

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const input = screen.getByRole('textbox');
    const btn = screen.getByRole('button', {
      name: /buscar/i,
    })
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    const quantityName = screen.getAllByRole('heading', {
      name: / * smith/i,
      level: 3,
    })
    expect(quantityName).toHaveLength(4);
  })

})
