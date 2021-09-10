import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/screen/Home';

describe("<Home />", ()=>{
    it('snapshot test', ()=>{
        const tree=renderer.create(
            <Home />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})