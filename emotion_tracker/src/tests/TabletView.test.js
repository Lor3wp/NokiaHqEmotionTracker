import React from "react"; 
import {render, fireEvent, cleanup} from "@testing-library/react"; 
import TabletView from "../views/TabletView";

afterEach(cleanup);

describe('TabletView component', () => {

it('it renders correctly', () => { const {getByText, getByLabelText} = render(); 
expect(getByText('How are you feeling?')).toBeInTheDocument(); 
expect(getByLabelText('Gimme Password')).toBeInTheDocument(); 
expect(getByText('Submit')).toBeInTheDocument(); });

it('it updates state correctly', () => { 
    const {getByText, getByLabelText} = render(); 
    expect(getByText('Submit')).toBeInTheDocument(); 
    fireEvent.change(getByLabelText('Gimme Password'), {target: {value: 'kissakoira'}}); 
    expect(getByText('Submit')).toBeInTheDocument(); });

})