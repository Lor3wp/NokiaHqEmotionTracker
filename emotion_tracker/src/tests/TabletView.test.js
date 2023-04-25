//Test: 
const wrapper = shallow();

//Test that the initial state of isPassword is false 
expect(wrapper.state('isPassword')).toEqual(false);

//Test that entering 'correctPassword' into the input field updates isPassword to true 
wrapper.find('#passwordInput').simulate('input', { target: { value: 'correctPassword' } }); expect(wrapper.state('isPassword')).toEqual(true);

//Test that the TabletEmotionButton component is rendered when isPassword is true 
expect(wrapper.find('TabletEmotionButton').exists()).toBe(true);