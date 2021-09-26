import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {getDummyRooms} from '../src/shared/functions/makeDummyData';
import RoomItem from '../src/components/screen/Home/Rooms/RoomItem';
import { dateToYYMMDD } from '../src/shared/functions/date';
import { numberWithComma } from '../src/shared/functions/number';

const roomItemObject = {
  roomId: 1,
  platformId: 1,
  bossUserId: 1,
  roomName: 'roomName',
  totalPrice: 10000,
  personalPrice: 2500,
  maxUser: 4,
  recentPayment: new Date('2021-09-01'),
};

describe('RoomItem', () => {
  it('rendering test', () => {
        const rendered = render(<RoomItem roomItem={roomItemObject} />);

        expect(rendered).toMatchSnapshot();

        expect(rendered.getByText(roomItemObject.roomName));
        expect(rendered.getByText(`${dateToYYMMDD({date:roomItemObject.recentPayment, separator:'.'})}까지`));
        expect(rendered.getByText(`${numberWithComma(roomItemObject.personalPrice)}`));
    
        expect(rendered.getAllByTestId('icon-test').length).toBe(roomItemObject.maxUser)        
        // expect(rendered.getAllBy)
    });
});
