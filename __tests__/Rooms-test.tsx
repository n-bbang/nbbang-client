import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Rooms from '../src/components/screen/Home/Rooms';
import {getDummyRooms} from '../src/shared/functions/makeDummyData';

describe('Rooms', () => {
  it('rendering test', () => {
    const rendered = render(<Rooms rooms={getDummyRooms(5)} />);

    expect(rendered).toMatchSnapshot();

    expect(rendered.getAllByText('roomName').length).toBe(5);
    
  });
});
