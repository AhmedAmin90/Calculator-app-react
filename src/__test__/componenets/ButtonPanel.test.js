import React from 'react';
import { create } from 'react-test-renderer';
import { render , screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../../components/ButtonPanel';

test('It takes clickeHandler prop as a function and should render correctly' , ()=> {
    render(<ButtonPanel clickHandler={()=> "This is a test"}/>)
    const elem = create(<ButtonPanel clickHandler={() => 'data'} />);
    expect(elem).toMatchSnapshot();
    const btnName = screen.getByText('AC');
    expect(btnName).toBeString;
    const btnName2 = screen.getByText('+/-')
    expect(btnName , btnName2).toBeInTheDocument;
})