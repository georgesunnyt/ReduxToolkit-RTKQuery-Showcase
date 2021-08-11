import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'

describe('App', () => {
  
  it('CLicks on the combo option and tries to place an order without any selection', () => {
    render(<Provider store={store}><App /></Provider>);
    const thirdRadio = screen.getByText('Combo...', { exact: false });
    fireEvent.click(thirdRadio);
    const order = screen.getByText('Save order', { exact: false })
    fireEvent.click(order)
    const errorMessage = screen.getByText('Please select your toppings')
    expect(errorMessage).toBeInTheDocument();
  });

  it('Clicks on the first option (plain) and succesfully places an order', () => {
    render(<Provider store={store}><App /></Provider>);
    const firstRadio = screen.getByText('Plain', {exact: false});
    fireEvent.click(firstRadio);
    const order = screen.getByText('Save order', { exact: false})
    fireEvent.click(order)
    const successMessage = screen.getByText('Your order: Plain')
    expect(successMessage).toBeInTheDocument()
  })

});