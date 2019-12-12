import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout = {startLogout} />);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});
// Using Shallow Renderer
// import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('should render Header correctly', () => {
// 	const renderer = new ReactShallowRenderer();
// 	renderer.render(<Header/>);
// 	expect(renderer.getRenderOutput()).toMatchSnapshot();
// });